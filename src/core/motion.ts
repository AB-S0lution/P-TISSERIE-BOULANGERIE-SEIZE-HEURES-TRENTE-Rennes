import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'
import { $$, reducedMotion } from './dom'

gsap.registerPlugin(ScrollTrigger, SplitText)
// Téléphones : la barre d'adresse qui se replie ne doit pas relancer tous les calculs (saccades, sauts de pin).
ScrollTrigger.config({ ignoreMobileResize: true })

/** Points de rupture du mouvement : une version riche au pointeur fin, une version allégée au tactile. */
export const MQ = {
  desktop: '(min-width: 900px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
  touch: '(max-width: 899px), (hover: none), (pointer: coarse)',
  reduced: '(prefers-reduced-motion: reduce)',
} as const

export { gsap, ScrollTrigger, SplitText }

export let lenis: Lenis | null = null
const ctxs: gsap.Context[] = []
const cleanups: Array<() => void> = []

/** Smooth scroll (Lenis) piloté par le ticker GSAP ; absent en mouvement réduit. */
export function initScroll(): void {
  if (reducedMotion()) return
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis?.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
}

export function scrollToTop(): void {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
  else window.scrollTo(0, 0)
}

export function scrollToEl(el: Element): void {
  if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -80 })
  else el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' })
}

/** Les pages enregistrent ici ce qu'il faut défaire à la sortie. */
export function onLeave(fn: () => void): void {
  cleanups.push(fn)
}

export function leavePage(): void {
  while (cleanups.length) cleanups.pop()?.()
  while (ctxs.length) ctxs.pop()?.revert()
  ScrollTrigger.getAll().forEach((t) => t.kill())
}

/** Exécute du code d'animation dans un contexte GSAP lié à la page courante. */
export function withContext(root: Element, fn: () => void): gsap.Context {
  const c = gsap.context(fn, root)
  ctxs.push(c)
  return c
}

const show = (el: Element) => ((el as HTMLElement).style.visibility = 'visible')

/** Animations génériques pilotées par attributs : data-split, data-reveal, data-count, data-parallax, data-magnetic. */
export function enhance(root: HTMLElement): void {
  const rm = reducedMotion()
  // Le script inline de <head> retire « motion-on » si ce drapeau n'arrive jamais (JS en panne).
  ;(window as Window & { __motionReady?: boolean }).__motionReady = true
  const fallback = window.setTimeout(() => $$('[data-split]', root).forEach(show), 2500)
  // Filet de sécurité : tout ce qui est déjà passé à l'écran sans avoir été révélé l'est d'office.
  const revealFallback = window.setTimeout(() => {
    $$<HTMLElement>('[data-reveal]', root).forEach((el) => {
      if (getComputedStyle(el).opacity !== '0') return
      if (el.getBoundingClientRect().top < window.innerHeight * 1.1) gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.5, overwrite: true })
    })
  }, 3200)
  onLeave(() => {
    clearTimeout(fallback)
    clearTimeout(revealFallback)
  })
  pauseOffscreen(root)

  if (rm) {
    $$('[data-split]', root).forEach(show)
    $$<HTMLElement>('[data-count]', root).forEach((el) => (el.textContent = fmtNum(Number(el.dataset.count))))
    return
  }

  const c = withContext(root, () => {
    const run = () => {
      $$('[data-split]', root).forEach((el) => {
        try {
          SplitText.create(el, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: (self: SplitText) => {
              show(el)
              return gsap.from(self.lines, {
                yPercent: 108,
                duration: 1,
                stagger: 0.09,
                ease: 'expo.out',
                scrollTrigger: { trigger: el, start: 'top 88%', once: true },
              })
            },
          })
        } catch {
          show(el)
        }
      })
    }
    if (document.fonts?.ready) document.fonts.ready.then(() => c.add(run)).catch(() => c.add(run))
    else run()

    // Révélations en rafale : plus courtes au tactile (le doigt lance vite, l'écran ne doit pas rester vide).
    const touch = window.matchMedia(MQ.touch).matches
    ScrollTrigger.batch('[data-reveal]', {
      start: touch ? 'top 96%' : 'top 92%',
      once: true,
      onEnter: (els) =>
        // Plafond du décalage : après un saut de défilement (lancer au doigt, ancre), un lot
        // de dizaines d'éléments ne doit pas laisser l'écran vide plusieurs secondes.
        gsap.to(els, { opacity: 1, y: 0, scale: 1, duration: touch ? 0.6 : 0.9, stagger: Math.min(touch ? 0.05 : 0.08, 0.5 / els.length), ease: 'power3.out', overwrite: true }),
    })

    // Compteurs
    $$<HTMLElement>('[data-count]', root).forEach((el) => {
      const target = Number(el.dataset.count)
      const o = { v: 0 }
      ScrollTrigger.create({
        trigger: el,
        start: 'top 92%',
        once: true,
        onEnter: () =>
          gsap.to(o, { v: target, duration: 1.8, ease: 'power2.out', onUpdate: () => (el.textContent = fmtNum(Math.round(o.v))) }),
      })
    })

    // Parallaxe douce (transform seulement) : amplitude réduite de moitié au tactile.
    $$<HTMLElement>('[data-parallax]', root).forEach((el) => {
      const amt = (Number(el.dataset.parallax) || 40) * (touch ? 0.5 : 1)
      gsap.fromTo(
        el,
        { y: -amt },
        { y: amt, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } },
      )
    })

    // Photos des en-têtes : léger zoom au défilement, au pointeur fin seulement.
    const mm = gsap.matchMedia()
    mm.add(MQ.desktop, () => {
      $$<HTMLElement>('.phero__media img', root).forEach((img) => {
        gsap.fromTo(img, { scale: 1.08 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: img, start: 'top 80%', end: 'bottom top', scrub: true } })
      })
    })
    onLeave(() => mm.revert())

    // Barre de progression
    const bar = document.querySelector<HTMLElement>('.progress')
    if (bar)
      gsap.to(bar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.2 },
      })
  })

  magnetic(root)
}

/** Met en pause les boucles CSS (bandeau défilant, indices) quand elles sortent de l'écran. */
function pauseOffscreen(root: HTMLElement): void {
  const els = $$<HTMLElement>('.marquee, .swipe-hint, [data-loop]', root)
  if (!els.length || !('IntersectionObserver' in window)) return
  const io = new IntersectionObserver((entries) => entries.forEach((e) => e.target.classList.toggle('is-offscreen', !e.isIntersecting)), { rootMargin: '80px' })
  els.forEach((el) => io.observe(el))
  onLeave(() => io.disconnect())
}

function fmtNum(n: number): string {
  return new Intl.NumberFormat('fr-FR').format(n)
}

/** Boutons magnétiques : souris uniquement. */
export function magnetic(root: ParentNode): void {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || reducedMotion()) return
  $$<HTMLElement>('[data-magnetic]', root).forEach((el) => {
    const qx = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' })
    const qy = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' })
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      qx((e.clientX - (r.left + r.width / 2)) * 0.28)
      qy((e.clientY - (r.top + r.height / 2)) * 0.34)
    }
    const leave = () => {
      qx(0)
      qy(0)
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    onLeave(() => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    })
  })
}
