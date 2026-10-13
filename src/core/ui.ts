import { kindPhoto, type Photo } from '../data/photos'
import { pastry, type ArtKind } from './art'
import { eur, esc, href, typo } from './dom'
import type { Product, Category } from '../data/products'
import { categoryLabels } from '../data/products'

const TILES = ['#F5D893', '#EFE3C8', '#C3D1B5', '#E7B27A', '#F7EAA0', '#E8A3AE', '#D9C7A3']
export const tile = (seed: number): string => TILES[Math.abs(seed) % TILES.length]

export interface HeroOpts {
  title: string
  lead: string
  kicker?: string
  art?: ArtKind
  seed?: number
  actions?: string
  /** Photo d'illustration affichée à côté du dessin (ou seule, sans dessin). */
  photo?: Photo
}

/** En-tête commun des pages intérieures. */
export function pageHero(o: HeroOpts): string {
  return typo(`
<section class="phero">
  <div class="wrap phero__grid">
    <div>
      ${o.kicker ? `<span class="kicker">${o.kicker}</span>` : ''}
      <h1 data-split>${o.title}</h1>
      <p class="lead" style="margin-top:1.4rem" data-reveal>${o.lead}</p>
      ${o.actions ? `<div class="cta-row" style="margin-top:1.4rem" data-reveal>${o.actions}</div>` : ''}
    </div>
    ${o.photo ? `<div class="phero__media" data-reveal>${photoImg(o.photo, 'eager')}${o.art ? `<div class="phero__badge" aria-hidden="true">${pastry(o.art, o.seed ?? 0)}</div>` : ''}<span class="ph__cap">Photo d’illustration · ${esc(o.photo.credit)}</span></div>` : o.art ? `<div class="phero__art" data-reveal>${pastry(o.art, o.seed ?? 0)}</div>` : ''}
  </div>
</section>`)
}

export function btn(label: string, path: string, cls = 'btn--ink', magnetic = false): string {
  const external = /^https?:|^tel:|^mailto:/.test(path)
  const attrs = external ? (path.startsWith('http') ? ' target="_blank" rel="noopener"' : '') : ' data-link'
  return `<a class="btn ${cls}" href="${external ? path : href(path)}"${attrs}${magnetic ? ' data-magnetic' : ''}>${label}<span class="btn__dot" aria-hidden="true">&rarr;</span></a>`
}

export function productCard(p: Product, opts: { showAllergens?: boolean } = {}): string {
  const tags = [
    ...(p.real ? ['<span class="tag tag--real">nom réel</span>'] : []),
    ...p.tags.slice(0, 2).map((t) => `<span class="tag">${tagLabel(t)}</span>`),
  ].join('')
  const unit = p.unit === 'pièce' ? '' : ` ${p.unit}`
  return `
<article class="pcard" data-reveal>
  ${cardMedia(p.kind, p.seed, tile(p.seed + 1))}
  <div class="pcard__body">
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.description)}</p>
    ${opts.showAllergens ? `<p class="small">Allergènes (exemple) : ${p.allergens.length ? esc(p.allergens.join(', ')) : 'aucun majeur'}.</p>` : ''}
    <div class="tags">${tags}</div>
    <div class="pcard__foot"><span class="price">${eur(p.price)}${unit}</span><span class="small muted">${p.priceReal ? 'prix relevé' : 'prix d’exemple'}</span></div>
  </div>
</article>`
}

export function tagLabel(t: string): string {
  const m: Record<string, string> = {
    saison: 'de saison', 'sans-gluten': 'sans gluten', 'a-partager': 'à partager', voyage: 'de voyage',
    signature: 'signature', consigne: 'bocal consigné', sarrasin: 'sarrasin',
  }
  return m[t] ?? t
}

export function catLabel(c: Category): string {
  return categoryLabels[c]
}

export function sampleFlag(label = 'exemple'): string {
  return `<span class="sample-flag">${label}</span>`
}

/** Bandeau du compte à rebours vers 16h30, calculé avec l'heure locale du visiteur. */
export function gouterMessage(now = new Date()): { big: string; sub: string } {
  const mins = now.getHours() * 60 + now.getMinutes()
  const target = 16 * 60 + 30
  if (mins >= target - 30 && mins < target + 60) {
    return { big: 'C’est l’heure du goûter.', sub: 'Il est 16h30 ou presque : la vitrine est à son meilleur.' }
  }
  let diff = target - mins
  if (diff < 0) diff += 24 * 60
  const h = Math.floor(diff / 60)
  const m = diff % 60
  const txt = h > 0 ? `${h} h ${String(m).padStart(2, '0')}` : `${m} min`
  return { big: `Goûter dans ${txt}`, sub: mins > target ? 'À demain, 16h30.' : 'Heure locale de votre appareil.' }
}

export function startGouterTicker(el: HTMLElement, sub?: HTMLElement): () => void {
  const upd = () => {
    const g = gouterMessage()
    el.textContent = g.big
    if (sub) sub.textContent = g.sub
  }
  upd()
  const id = window.setInterval(upd, 30_000)
  return () => clearInterval(id)
}

export function quoteCard(q: { text: string; source: string; critical?: boolean; real: boolean; url?: string }): string {
  return `<figure class="quote${q.critical ? ' quote--crit' : ''}" data-reveal>
  <blockquote>« ${esc(q.text)} »</blockquote>
  <figcaption>${esc(q.source)}${q.real ? '' : ' <span class="sample-flag">exemple</span>'}${q.url ? ` · <a href="${q.url}" target="_blank" rel="noopener">source</a>` : ''}</figcaption>
</figure>`
}

/** Photo d'illustration (Unsplash) : figure lazy, recadrée en cover. */
export function photoFig(ph: Photo, cls = '', caption = true): string {
  return `<figure class="ph ${cls}" data-reveal><img src="${ph.src}" alt="${esc(ph.alt)}" width="${ph.width}" height="${ph.height}" loading="lazy" decoding="async" />${caption ? `<figcaption class="ph__cap">Photo d’illustration · ${esc(ph.credit)}</figcaption>` : ''}</figure>`
}

/** Bande de photos d'illustration pour une page (titre + grille). */
export function photoBand(title: string, list: Photo[], lead = 'Photos d’illustration (Unsplash), pas des photos de la maison.'): string {
  return `<section class="section section--tight" aria-label="${esc(title)}">
  <div class="wrap">
    <h2 class="h-md" data-split>${esc(title)}</h2>
    <p class="small muted" style="margin:.5rem 0 1.5rem" data-reveal>${esc(lead)}</p>
    <div class="ph-grid">${list.map((ph, i) => photoFig(ph, i % 5 === 0 ? 'ph--tall' : '', true)).join('')}</div>
  </div>
</section>`
}

/** Balise img d'une photo d'illustration (dimensions intrinsèques, lazy par défaut). */
export function photoImg(ph: Photo, loading: 'lazy' | 'eager' = 'lazy'): string {
  return `<img src="${ph.src}" alt="${esc(ph.alt)}" width="${ph.width}" height="${ph.height}" loading="${loading}" decoding="async"${loading === 'eager' ? ' fetchpriority="high"' : ''} />`
}

/** Média d'une carte produit : photo d'illustration + pastille du dessin SVG original. */
export function cardMedia(kind: ArtKind, seed: number, bg: string): string {
  const ph = kindPhoto(kind, seed)
  return `<div class="pcard__art pcard__art--photo" style="--tile:${bg}">${photoImg(ph)}<span class="pcard__badge" aria-hidden="true">${pastry(kind, seed)}</span><span class="pcard__cap">Photo d’illustration</span></div>`
}

/** Bande de photo fine (pages FAQ, légales, 404). */
export function photoStrip(list: Photo[]): string {
  return `<section class="section section--tight" aria-label="Photos d’illustration"><div class="wrap"><div class="ph-slim">${list.map((ph) => photoFig(ph, 'ph--slim')).join('')}</div></div></section>`
}
