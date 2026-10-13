import { photoBand } from '../core/ui'
import { photo } from '../data/photos'
import { pastry, postcardSky } from '../core/art'
import { $, $$, esc, typo } from '../core/dom'
import { gsap, ScrollTrigger, onLeave, withContext } from '../core/motion'
import { btn, pageHero, productCard } from '../core/ui'
import { creations } from '../data/creations'
import { products, categoryLabels, type Product } from '../data/products'

export const title = 'La pâtisserie | 16h30, Seize Heures Trente, Rennes'
export const description =
  'Brioche feuilletée, kouign-amann, cakes de voyage, cookies, financiers et créations de saison qui portent des noms de lieux. Atlas interactif. Prix d’exemple.'

type Filter = 'tout' | 'saison' | 'sans-gluten' | 'a-partager' | 'voyage'
const FILTERS: Array<{ id: Filter; label: string }> = [
  { id: 'tout', label: 'Tout' },
  { id: 'saison', label: 'De saison' },
  { id: 'sans-gluten', label: 'Sans gluten' },
  { id: 'a-partager', label: 'À partager' },
  { id: 'voyage', label: 'De voyage' },
]

function postcard(c: (typeof creations)[number]): string {
  const lat = `${Math.abs(c.lat).toFixed(2)}° ${c.lat >= 0 ? 'N' : 'S'}`
  const lng = `${Math.abs(c.lng).toFixed(2)}° ${c.lng >= 0 ? 'E' : 'O'}`
  return `
<div class="card-pc">
  <button class="pc" type="button" aria-pressed="false" aria-label="Retourner la carte postale ${esc(c.name)}">
    <span class="pc__face pc__front" style="--sky:${postcardSky(c.sky)}">
      <span class="pc__stamp mono"><span>${lat}<br />${lng}</span><span>${esc(c.season)}</span></span>
      ${pastry(c.kind, c.seed)}
      <span><h3>${esc(c.name)}</h3><span class="small">${esc(c.line)}</span></span>
    </span>
    <span class="pc__face pc__back">
      <h4 class="it">${esc(c.name)}, ${esc(c.region)}</h4>
      <ul>${c.ingredients.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
      <span class="small">${c.real ? 'Composition relevée dans la presse.' : 'Création d’exemple.'}</span>
      <span class="mono small">${lat}, ${lng}</span>
    </span>
  </button>
</div>`
}

export function render(main: HTMLElement): void {
  const list = products
  main.innerHTML = typo(`
${pageHero({
  title: 'La pâtisserie',
  kicker: 'Rue Hoche et passage Jeanne-Chauveau',
  lead: 'Des classiques bien faits, des cakes de voyage et des créations de saison qui portent le nom d’un lieu. Tout est fait maison.',
  art: 'saintho',
  actions: btn('Voir l’atlas', '#atlas', 'btn--amber', true) + btn('Commander', 'commandes', 'btn--ghost'),
})}

<section class="atlas" id="atlas" aria-labelledby="atlas-title">
  <div class="atlas__pin">
    <div class="atlas__head wrap">
      <h2 class="h-lg" id="atlas-title" data-split>L’atlas des créations</h2>
      <p class="lead muted" style="margin-top:1rem">Chaque dessert de saison est une destination. Touchez une carte pour la retourner et lire sa composition.</p>
    </div>
    <div class="atlas__track" id="atlas-track" role="list" tabindex="0" aria-label="Cartes postales des créations, défilement horizontal">
      ${creations.map(postcard).join('')}
    </div>
    <div class="atlas__bar" aria-hidden="true"><i id="atlas-bar"></i></div>
  </div>
</section>

<section class="section" id="carte">
  <div class="wrap">
    <h2 class="h-lg" data-split>La carte de la vitrine</h2>
    <p class="lead muted" style="margin:1rem 0 1.6rem" data-reveal>${list.length} références d’exemple. Seuls les noms marqués « nom réel » et deux prix (brioche 1,80 €, grand kouign-amann 17 €) sont relevés ; le reste est fictif.</p>
    <div class="toolbar" role="group" aria-label="Filtres">
      ${FILTERS.map((f, i) => `<button class="chip" type="button" data-filter="${f.id}" aria-pressed="${i === 0}">${f.label}</button>`).join('')}
      <label class="visually-hidden" for="q" style="position:absolute;left:-9999px">Rechercher une pâtisserie</label>
      <input class="search" id="q" type="search" placeholder="Rechercher (brioche, citron, cookie)" autocomplete="off" />
    </div>
    <p class="status small" id="count" role="status" aria-live="polite"></p>
    <div class="pgrid" id="grid"></div>
    <div class="empty" id="empty" hidden><p class="h-md">Rien ne correspond.</p><p>Essayez un autre mot ou retirez un filtre.</p></div>
  </div>
</section>

<section class="section section--spruce">
  <div class="wrap split">
    <div class="stack">
      <h2 class="h-lg" data-split>Les catégories de la carte</h2>
      <ul class="stack" data-reveal>${(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((k) => `<li>${categoryLabels[k]} <span class="mono muted">${products.filter((p) => p.category === k).length}</span></li>`).join('')}</ul>
    </div>
    <div class="stack" data-reveal>
      <p class="lead">Pour un entremets ou un gâteau de fête, passez par la page Commandes. Les entremets, glaces et certains gâteaux se prennent en bocal consigné à 1 €.</p>
      <div class="cta-row">${btn('Commandes et occasions', 'commandes', 'btn--paper')}${btn('La consigne', 'engagements', 'btn--ghost')}</div>
    </div>
  </div>
</section>
${photoBand('La vitrine, en images', ['croissants-table','deux-croissants','tartes-vitrine','patisseries-comptoir','macarons','tarte-fruits-rouges','croissant-plateau','brioche-tressee','croissants-pile','croissant-blanc'].map(photo))}`)

  // Filtres et recherche
  const grid = $('#grid', main)!
  const count = $('#count', main)!
  const empty = $('#empty', main)!
  const input = $<HTMLInputElement>('#q', main)!
  let filter: Filter = 'tout'
  let first = true

  const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  const match = (p: Product, q: string) => {
    if (filter !== 'tout' && !p.tags.includes(filter)) return false
    if (!q) return true
    return norm(`${p.name} ${p.description} ${p.ingredients.join(' ')} ${categoryLabels[p.category]}`).includes(q)
  }
  const draw = () => {
    const q = norm(input.value.trim())
    const shown = list.filter((p) => match(p, q))
    grid.innerHTML = shown.map((p) => productCard(p, { showAllergens: true })).join('')
    empty.hidden = shown.length > 0
    count.textContent = `${shown.length} résultat${shown.length > 1 ? 's' : ''}`
    if (!first) {
      gsap.fromTo($$('.pcard', grid), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.02, ease: 'power3.out', clearProps: 'transform' })
    } else {
      // premier affichage : révélation au scroll gérée par [data-reveal]
      first = false
    }
  }
  draw()
  $$('[data-filter]', main).forEach((b) =>
    b.addEventListener('click', () => {
      filter = b.dataset.filter as Filter
      $$('[data-filter]', main).forEach((x) => x.setAttribute('aria-pressed', String(x === b)))
      draw()
    }),
  )
  input.addEventListener('input', draw)

  // Retourner les cartes postales
  $$('.pc', main).forEach((pc) =>
    pc.addEventListener('click', () => {
      const on = pc.classList.toggle('is-flipped')
      pc.setAttribute('aria-pressed', String(on))
    }),
  )

  initAtlas(main)
}

function initAtlas(main: HTMLElement): void {
  const section = $('#atlas', main)!
  const track = $('#atlas-track', main)!
  const bar = $('#atlas-bar', main)!
  const mq = window.matchMedia('(min-width: 900px) and (prefers-reduced-motion: no-preference)')

  const build = () => {
    if (!mq.matches) {
      section.classList.remove('is-pinned')
      track.addEventListener('scroll', onScroll, { passive: true })
      return
    }
    section.classList.add('is-pinned')
    withContext(main, () => {
      const dist = () => Math.max(0, track.scrollWidth - window.innerWidth)
      gsap.to(track, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${dist() + window.innerHeight * 0.2}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => gsap.set(bar, { scaleX: Math.max(0.04, self.progress) }),
        },
      })
    })
  }
  const onScroll = () => {
    const max = track.scrollWidth - track.clientWidth
    gsap.set(bar, { scaleX: Math.max(0.04, max ? track.scrollLeft / max : 1) })
  }
  build()
  ScrollTrigger.refresh()
  onLeave(() => track.removeEventListener('scroll', onScroll))
}
