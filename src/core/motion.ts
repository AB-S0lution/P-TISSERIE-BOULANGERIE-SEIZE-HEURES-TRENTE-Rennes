import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'
import { $$, reducedMotion } from './dom'

gsap.registerPlugin(ScrollTrigger, SplitText)

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
  const fallback = window.setTimeout(() => $$('[data-split]', root).forEach(show), 2500)
  onLeave(() => clearTimeout(fallback))

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

    // Révélations en rafale
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 92%',
      once: true,
      onEnter: (els) =>
        gsap.to(els, { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out', overwrite: true }),
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

    // Parallaxe douce (transform seulement)
    $$<HTMLElement>('[data-parallax]', root).forEach((el) => {
      const amt = Number(el.dataset.parallax) || 40
      gsap.fromTo(
        el,
        { y: -amt },
        { y: amt, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } },
      )
    })

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
