import { pastry } from '../core/art'
import { $, $$, esc, typo } from '../core/dom'
import { gsap } from '../core/motion'
import { pageHero, photoBand } from '../core/ui'
import { photos } from '../data/photos'
import { gallery } from '../data/gallery'

export const title = 'Galerie | 16h30, Seize Heures Trente, Rennes'
export const description = 'Galerie d’illustrations originales : pâtisseries, pains et objets de 16h30. Aucune photo de la maison, tout est dessiné.'

export function render(main: HTMLElement): void {
  const sets = ['Tout', ...Array.from(new Set(gallery.map((g) => g.set)))]
  main.innerHTML = typo(`
${pageHero({ title: 'La galerie', kicker: 'Dessiné, pas photographié', lead: 'Vingt illustrations originales en SVG. Les vraies photos viendront de la maison, avec son accord.', art: 'macaron', seed: 3 })}
${photoBand('Photothèque', photos, `${photos.length} photos d’illustration (Unsplash, licence Unsplash), pas des photos de la maison.`)}
<section class="section section--tight">
  <div class="wrap">
    <h2 class="h-md" style="margin-bottom:1rem">Les illustrations</h2>
    <div class="toolbar" role="group" aria-label="Séries">${sets.map((s, i) => `<button class="chip" type="button" data-set="${esc(s)}" aria-pressed="${i === 0}">${esc(s)}</button>`).join('')}</div>
    <div class="gallery" id="gal">${gallery
      .map(
        (g) => `<button class="tile tile--${g.shape}" type="button" data-set-of="${esc(g.set)}" data-id="${g.id}" style="--tile:${g.tile}" data-reveal aria-label="Agrandir : ${esc(g.title)}">
        <span class="tile__art">${pastry(g.kind, g.seed)}</span><span class="cap"><strong>${esc(g.title)}</strong><br />${esc(g.caption)}</span></button>`,
      )
      .join('')}</div>
  </div>
</section>`)

  const gal = $('#gal', main)!
  $$('[data-set]', main).forEach((b) =>
    b.addEventListener('click', () => {
      const s = b.dataset.set
      $$('[data-set]', main).forEach((x) => x.setAttribute('aria-pressed', String(x === b)))
      $$<HTMLElement>('.tile', gal).forEach((t) => {
        const show = s === 'Tout' || t.dataset.setOf === s
        t.hidden = !show
        if (show) gsap.fromTo(t, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out', clearProps: 'transform' })
      })
    }),
  )

  // Lightbox accessible
  gal.addEventListener('click', (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('.tile')
    if (!t) return
    const g = gallery.find((x) => x.id === t.dataset.id)!
    const box = document.createElement('div')
    box.className = 'lightbox'
    box.setAttribute('role', 'dialog')
    box.setAttribute('aria-modal', 'true')
    box.setAttribute('aria-label', g.title)
    box.innerHTML = typo(`<div class="lightbox__in" style="--tile:${g.tile};background:${g.tile}">${pastry(g.kind, g.seed)}<h2 class="h-md">${esc(g.title)}</h2><p>${esc(g.caption)}</p><button class="btn" type="button">Fermer</button></div>`)
    document.body.appendChild(box)
    const close = () => {
      box.remove()
      document.removeEventListener('keydown', onKey)
      t.focus()
    }
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    box.addEventListener('click', (ev) => {
      if (ev.target === box || (ev.target as HTMLElement).closest('button')) close()
    })
    gsap.from(box.firstElementChild, { opacity: 0, y: 20, scale: 0.97, duration: 0.35, ease: 'power3.out' })
    $<HTMLElement>('button', box)!.focus()
  })
}
