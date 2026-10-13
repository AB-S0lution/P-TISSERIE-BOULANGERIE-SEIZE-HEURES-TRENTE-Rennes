import { pastry } from '../core/art'
import { $, esc, reducedMotion, typo } from '../core/dom'
import { gsap, ScrollTrigger, onLeave, withContext } from '../core/motion'
import { btn, photoBand, photoFig, quoteCard, startGouterTicker, tile } from '../core/ui'
import { photo, photos } from '../data/photos'
import { breads } from '../data/breads'
import { products } from '../data/products'
import { site } from '../data/site'
import { testimonials } from '../data/testimonials'
import { creations } from '../data/creations'
import { postcardSky } from '../core/art'

export const title = '16h30, pâtisserie et boulangerie à Rennes | Seize Heures Trente'
export const description =
  'Pâtisserie et boulangerie artisanales à Rennes, fondées par Marion Juhel : brioche feuilletée, kouign-amann, cakes de voyage, pains au sarrasin. Deux adresses. Site de démonstration.'

// Chronologie ILLUSTRATIVE de la journée (pas des horaires d'ouverture).
const STAGES = [
  { at: 0, time: 7, name: 'Le fournil s’éveille', text: 'Le four monte en température, le beurre sort du froid.' },
  { at: 0.2, time: 9.5, name: 'Première fournée', text: 'Les viennoiseries sont proposées deux fois par jour : voici la première.' },
  { at: 0.42, time: 12, name: 'Les pains', text: 'Ty Fauve, petit Marcel, pain de Lodève : le fournil du passage Jeanne-Chauveau tourne.' },
  { at: 0.62, time: 14.25, name: 'Deuxième fournée', text: 'La seconde fournée de viennoiseries croque encore.' },
  { at: 0.82, time: 15.75, name: 'Mise en vitrine', text: 'Les créations de saison prennent leur place sur les étagères.' },
  { at: 0.96, time: 16.5, name: 'L’heure du goûter', text: 'Il est 16h30.' },
]

function dialSvg(): string {
  let ticks = ''
  for (let i = 0; i < 60; i++) {
    const major = i % 5 === 0
    ticks += `<line x1="240" y1="${major ? 38 : 44}" x2="240" y2="${major ? 62 : 54}" stroke="#22191A" stroke-width="${major ? 4 : 1.6}" stroke-linecap="round" transform="rotate(${i * 6} 240 240)"/>`
  }
  let nums = ''
  for (let h = 1; h <= 12; h++) {
    const a = (h / 12) * Math.PI * 2
    const x = 240 + Math.sin(a) * 148
    const y = 240 - Math.cos(a) * 148 + 13
    nums += `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${h === 4 ? 46 : 38}" text-anchor="middle" fill="${h === 4 ? '#8A4E28' : '#22191A'}" ${h === 4 ? 'font-style="italic"' : ''}>${h}</text>`
  }
  // Hauteur initiale : 16h30 (état statique sans JS ou en mouvement réduit).
  return `<svg class="dial" viewBox="0 0 480 480" role="img" aria-label="Cadran d’horloge indiquant 16h30">
  <circle cx="240" cy="240" r="226" fill="#22191A"/>
  <circle cx="240" cy="240" r="214" fill="#F6EEE1"/>
  <path d="M240 240 L240 26 A214 214 0 0 1 ${(240 + Math.sin(Math.PI * 0.75) * 214).toFixed(1)} ${(240 - Math.cos(Math.PI * 0.75) * 214).toFixed(1)} Z" fill="#E39A3B" opacity=".16"/>
  ${ticks}${nums}
  <g id="hand-h" transform="rotate(135 240 240)"><rect x="231" y="120" width="18" height="136" rx="9" fill="#22191A"/></g>
  <g id="hand-m" transform="rotate(180 240 240)"><rect x="236" y="62" width="8" height="200" rx="4" fill="#22191A"/></g>
  <circle cx="240" cy="240" r="13" fill="#E39A3B" stroke="#22191A" stroke-width="4"/>
</svg>`
}

export function render(main: HTMLElement): void {
  const feat = ['pain-chocolat', 'brioche-feuilletee', 'kouign-individuel', 'menton', 'cookie-noisette']
  const shelf = feat.map((id, i) => pastry(products.find((p) => p.id === id)!.kind, products.find((p) => p.id === id)!.seed + i)).join('')

  const vitrineItems = products.filter((p) => p.vitrine).slice(0, 8)

  main.innerHTML = typo(`
<section class="scene" id="scene" aria-label="Le cadran du goûter">
  <div class="sky sky--morn"></div>
  <div class="sky sky--amber"></div>
  <div class="sun" id="sun" aria-hidden="true"></div>
  <div class="scene__grid">
    <div class="scene__copy">
      <div class="copy-intro">
        <h1 data-split>Tout mène à 16h30.</h1>
        <p>Pâtisserie et boulangerie rennaises, faites maison de A à Z. Deux adresses, une heure préférée.</p>
        <div class="cta-row">${btn('Voir la vitrine', 'patisserie', 'btn--ink', true)}${btn('Nos deux adresses', 'contact', 'btn--ghost')}</div>
      </div>
      <div class="copy-stage" aria-hidden="true">
        <div class="clock-read" id="clock-read">07:00</div>
        <div class="stage-name" id="stage-name">Le fournil s’éveille</div>
        <p class="stage-text" id="stage-text">Le four monte en température, le beurre sort du froid.</p>
      </div>
    </div>
    <div class="scene__dial" id="dial-wrap">${dialSvg()}</div>
    <p class="scene__note">Chronologie illustrative de la journée : ce ne sont pas des horaires d’ouverture.</p>
  </div>
  <div class="vitrine" id="vitrine">
    <div class="vitrine__in">
      <span class="kicker">16:30</span>
      <h2>La vitrine est ouverte.</h2>
      <div class="vitrine__shelf" aria-hidden="true">${shelf}</div>
      <div class="cta-row" style="justify-content:center">${btn('Découvrir la pâtisserie', 'patisserie', 'btn--amber')}${btn('Voir les pains', 'boulangerie', 'btn--ghost')}</div>
      <p class="vitrine__small">3 rue Hoche et 2 passage Jeanne-Chauveau, Rennes</p>
    </div>
  </div>
</section>

<div class="hours-stages wrap section--tight" aria-label="Déroulé de la journée">
  <h2 class="h-md">La journée jusqu’à 16h30</h2>
  <ol class="stack">${STAGES.map((s) => `<li><strong>${fmt(s.time)}</strong> ${esc(s.name)}. ${esc(s.text)}</li>`).join('')}</ol>
</div>

<section class="wrap goute-wrap" aria-live="off">
  <div class="goute">
    <div>
      <div class="goute__big" id="goute-big">Goûter dans 2 h 14</div>
      <p class="small muted" id="goute-sub" style="margin:.3rem 0 0">Heure locale de votre appareil.</p>
    </div>
    ${btn('Commander pour 16h30', 'commandes', 'btn--amber', true)}
  </div>
  <div class="awards">
    <div class="award" data-reveal><span class="mono">2020</span><b>Trophée Pâtissier Gault&amp;Millau Grand Ouest</b></div>
    <div class="award" data-reveal><span class="mono">2020</span><b>Prix coup de cœur Éco-Défis</b><span class="small muted">Rennes Métropole et chambre des métiers</span></div>
    <div class="award" data-reveal><span class="mono">Relevé du ${site.ratingCapture.date}</span><b>${site.ratingCapture.value}/5</b><span class="small muted">sur ${site.ratingCapture.source} (${site.ratingCapture.count} avis)</span></div>
  </div>
</section>

<section class="section section--tight" aria-label="Au fournil, en images">
  <div class="wrap">
    ${photoFig(photo('croissants-four'), 'ph--wide')}
    <div class="ph-strip" style="margin-top:1rem">${['planche-viennoiseries','tartes-vitrine','pains-graines','cafe-viennoiseries','macarons','mie-alveolee','tarte-fruits-rouges'].map((s) => photoFig(photo(s))).join('')}</div>
  </div>
</section>

<section class="section section--tight">
  <div class="wrap">
    <h2 class="h-lg" data-split>Les signatures de la maison</h2>
    <p class="lead" style="margin:1rem 0 2rem" data-reveal>Une brioche feuilletée, un kouign-amann au beurre de Pacé, des cakes de voyage, des cookies et des financiers.</p>
    <div class="sig-grid">
      <article class="sig sig--big" style="--tile:#F5D893" data-reveal><div class="art-wrap">${pastry('brioche', 0)}</div><div><h3>Brioche feuilletée</h3><p>La signature depuis l’ouverture en 2018. Individuelle à 1,80 €, ou en grand pour partager.</p></div></article>
      <article class="sig" style="--tile:#E7B27A" data-reveal>${pastry('kouign', 1)}<div><h3>Kouign-amann</h3><p>Au beurre de Madame, de Pacé. Le grand format est à 17 €.</p></div></article>
      <article class="sig sig--wide" style="--tile:#EFE3C8" data-reveal>${pastry('cake', 0)}<div><h3>Cakes de voyage</h3><p>Buckingham, banana bread, Madagascar, quatre-quarts, pamplemousse rose.</p></div></article>
      <article class="sig sig--wide" style="--tile:#C3D1B5" data-reveal>${pastry('cookie', 0)}<div><h3>Cookies et financiers</h3><p>Noisette, pécan, financier au sarrasin : des textures très croustillantes.</p></div></article>
    </div>
    <div class="cta-row" style="margin-top:2rem" data-reveal>${btn('Toute la pâtisserie', 'patisserie')}</div>
  </div>
</section>

<section class="section section--tight" aria-label="Les pains du jour">
  <div class="wrap"><h2 class="h-md" data-split>Les pains du passage Jeanne-Chauveau</h2></div>
  <div class="marquee" style="margin-top:1.6rem">
    <div class="marquee__track">${marquee()}${marquee(true)}</div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap">
    <h2 class="h-lg" data-split>Aujourd’hui en vitrine</h2>
    <p class="lead muted" style="margin:1rem 0 2rem" data-reveal>Une sélection d’exemple. La vitrine réelle change à chaque fournée. <span class="sample-flag">exemple</span></p>
    <div class="pgrid pgrid--home">
      ${vitrineItems.map((p) => `<article class="pcard" data-reveal><div class="pcard__art" style="--tile:${tile(p.seed + 1)}">${pastry(p.kind, p.seed)}</div><div class="pcard__body"><h3>${esc(p.name)}</h3><div class="pcard__foot"><span class="price">${(p.price).toFixed(2).replace('.', ',')} €</span><span class="small muted">${p.priceReal ? 'prix relevé' : 'exemple'}</span></div></div></article>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="stack">
      <h2 class="h-lg" data-split>Une pâtisserie qui voyage</h2>
      <p class="lead" data-reveal>Menton, Medellin, Bréhat, Cambrai : chaque création de saison porte le nom d’un lieu. Faites défiler l’atlas.</p>
      <div data-reveal>${btn('Ouvrir l’atlas', 'patisserie#atlas', 'btn--amber', true)}</div>
    </div>
    <div class="postcards" aria-hidden="true">
      ${creations.slice(0, 5).map((c, i) => `<div class="mini-pc" style="--r:${(i - 2) * 5}deg;--x:${i * 9}%;background:${postcardSky(c.sky)}">${pastry(c.kind, c.seed)}<b>${esc(c.name)}</b></div>`).join('')}
    </div>
  </div>
</section>

${photoBand('Une journée de fournil, en images', photos.filter((_, i) => i % 3 === 1).slice(0, 8))}

<section class="section section--spruce">
  <div class="wrap">
    <h2 class="h-lg" data-split>Ce qu’en disent les gourmands</h2>
    <p class="muted" style="margin:.8rem 0 2rem" data-reveal>Extraits d’avis publics, sans nom. Deux sont plus nuancés, et c’est normal.</p>
    <div class="quotes">${testimonials.filter((t) => t.real).slice(0, 6).map(quoteCard).join('')}</div>
    <div class="cta-row" style="margin-top:2rem" data-reveal>${btn('Suivre @patisserie_16h30', site.instagram.url, 'btn--paper')}</div>
  </div>
</section>
`)

  const rm = reducedMotion()
  const disposeTick = startGouterTicker($('#goute-big')!, $('#goute-sub')!)
  onLeave(disposeTick)
  if (rm) return

  const scene = $('#scene')!
  withContext(main, () => initDial(scene))
}

function fmt(t: number): string {
  const h = Math.floor(t)
  const m = Math.round((t - h) * 60)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

function marquee(hidden = false): string {
  const names = breads.map((b) => b.name)
  const row = names.map((n) => `<span class="marquee__item">${esc(n)}<i aria-hidden="true">&#10033;</i></span>`).join('')
  return `<div class="marquee__row" style="display:flex;gap:2.5rem" ${hidden ? 'aria-hidden="true"' : ''}>${row}</div>`
}

function initDial(scene: HTMLElement): void {
  const hh = $<SVGGElement>('#hand-h', scene)!
  const hm = $<SVGGElement>('#hand-m', scene)!
  const read = $('#clock-read', scene)!
  const nameEl = $('#stage-name', scene)!
  const textEl = $('#stage-text', scene)!
  const intro = $('.copy-intro', scene)!
  const stage = $('.copy-stage', scene)!
  const note = $('.scene__note', scene)!
  const sky = $('.sky--amber', scene)!
  const sun = $('#sun', scene)!
  const vitrine = $('#vitrine', scene)!
  const dialWrap = $('#dial-wrap', scene)!

  const mobile = window.matchMedia('(max-width: 899px)').matches
  const state = { p: 0 }
  let current = -1

  const apply = () => {
    const t = 7 + 9.5 * state.p
    const hAng = ((t % 12) / 12) * 360
    const mAng = (t % 1) * 360
    hh.setAttribute('transform', `rotate(${hAng.toFixed(2)} 240 240)`)
    hm.setAttribute('transform', `rotate(${mAng.toFixed(2)} 240 240)`)
    const H = Math.floor(t)
    const M = Math.floor((t - H) * 60)
    read.textContent = `${String(H).padStart(2, '0')}:${String(M).padStart(2, '0')}`
    let idx = 0
    STAGES.forEach((s, i) => {
      if (state.p >= s.at) idx = i
    })
    if (idx !== current) {
      current = idx
      nameEl.textContent = STAGES[idx].name
      textEl.textContent = STAGES[idx].text
      gsap.fromTo([nameEl, textEl], { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power3.out', overwrite: true })
    }
  }

  // Centre du cercle de révélation = centre du cadran.
  const setReveal = () => {
    const s = scene.getBoundingClientRect()
    const d = dialWrap.getBoundingClientRect()
    scene.style.setProperty('--cx', `${d.left - s.left + d.width / 2}px`)
    scene.style.setProperty('--cy', `${d.top - s.top + d.height / 2}px`)
  }
  setReveal()
  const reveal = { r: 0 }
  const applyReveal = () => {
    const cx = scene.style.getPropertyValue('--cx') || '50%'
    const cy = scene.style.getPropertyValue('--cy') || '50%'
    vitrine.style.clipPath = `circle(${reveal.r}% at ${cx} ${cy})`
  }
  applyReveal()
  vitrine.style.pointerEvents = 'none'
  vitrine.inert = true

  gsap.set(sun, { x: '-30vw', y: '48dvh', scale: 0.7 })

  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: scene,
      start: 'top top',
      end: mobile ? '+=260%' : '+=340%',
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onRefresh: () => {
        setReveal()
        applyReveal()
      },
      onUpdate: (self) => {
        const open = self.progress > 0.94
        vitrine.style.pointerEvents = open ? 'auto' : 'none'
        vitrine.inert = !open
      },
    },
  })
  tl.to(state, { p: 1, duration: 0.88, onUpdate: apply }, 0)
  tl.to(intro, { opacity: 0, y: -40, duration: 0.07 }, 0.02)
  tl.to(stage, { opacity: 1, duration: 0.06 }, 0.07)
  tl.to(note, { opacity: 0.85, duration: 0.05 }, 0.08)
  tl.to(sky, { opacity: 1, duration: 0.6 }, 0.28)
  tl.to(sun, { x: mobile ? '48vw' : '58vw', y: mobile ? '52dvh' : '38dvh', scale: 1.15, duration: 0.88 }, 0)
  tl.to(dialWrap, { scale: 1.06, duration: 0.88 }, 0)
  tl.to(stage, { opacity: 0, duration: 0.04 }, 0.88)
  tl.to(reveal, { r: 150, duration: 0.12, onUpdate: applyReveal }, 0.88)
  tl.to({}, { duration: 0.08 }, 1)
  apply()

  ScrollTrigger.addEventListener('refreshInit', setReveal)
  onLeave(() => ScrollTrigger.removeEventListener('refreshInit', setReveal))
}

