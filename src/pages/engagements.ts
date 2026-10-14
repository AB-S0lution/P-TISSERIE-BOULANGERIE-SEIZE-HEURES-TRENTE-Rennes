import { counterArt, jarBig } from '../core/art'
import { $, reducedMotion, typo } from '../core/dom'
import { gsap, onLeave } from '../core/motion'
import { btn, pageHero, photoImg } from '../core/ui'
import { photo } from '../data/photos'
import { stats } from '../data/stats'

export const title = 'Engagements, la consigne à 1 € | 16h30, Rennes'
export const description =
  'La consigne de 1 € sur les bocaux, les emballages limités, les produits bio et bretons : les engagements de 16h30. Rapportez un bocal virtuel.'

const START = stats.find((s) => s.id === 'jars')!.value

export function render(main: HTMLElement): void {
  main.innerHTML = typo(`
${pageHero({
  title: 'Un bocal, un euro, un geste.',
  kicker: 'Engagements',
  lead: 'Les entremets, glaces et certains gâteaux sont servis dans un bocal consigné 1 €. Rapportez-le : on vous rend l’euro.',
  art: 'bocal',
  seed: 4,
  photo: photo('bocal-fraise'),
})}

<section class="section section--tight" id="consigne">
  <div class="wrap consigne">
    <div class="stack">
      <h2 class="h-lg" data-split>La consigne, à toucher du doigt</h2>
      <p class="lead" data-reveal>Faites glisser le bocal sur le comptoir. Il se range d’un ressort, une pièce de 1 € tourne, et le compteur de la saison monte.</p>
      <p class="tally" data-reveal><b id="tally" aria-live="polite">${START.toLocaleString('fr-FR')}</b><span class="small muted">bocaux rapportés cette saison <span class="sample-flag">exemple</span></span></p>
      <p class="status" id="status" role="status" aria-live="polite"></p>
      <div class="cta-row" data-reveal><button class="btn btn--amber" type="button" id="return-btn">Rapporter le bocal<span class="btn__dot" aria-hidden="true">&rarr;</span></button></div>
      <p class="small muted">Au clavier ou sans glisser : le bouton fait la même chose. Compteur fictif, démonstration.</p>
    </div>
    <div class="stage" id="stage" data-reveal>
      <div class="stage__counter">${counterArt()}<div class="stage__target" id="target" aria-hidden="true"></div></div>
      <div class="jar" id="jar" role="button" tabindex="0" aria-label="Bocal consigné : faites-le glisser sur le comptoir, ou appuyez sur Entrée pour le rapporter">${jarBig()}</div>
      <div class="coin" id="coin" aria-hidden="true">+1&nbsp;€</div>
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap">
    <h2 class="h-lg" data-split>Ce que la maison s’engage à faire</h2>
    <div class="cards cards--3" style="margin-top:2rem">
      <div class="card card--media" data-reveal><figure class="card__ph">${photoImg(photo('pain-sac-kraft'))}<figcaption class="ph__cap">Photo d’illustration</figcaption></figure><h3>Des emballages limités</h3><p>Très peu de plastique à usage unique. Apportez votre sac à pain ou votre boîte.</p></div>
      <div class="card card--media" data-reveal><figure class="card__ph">${photoImg(photo('petrissage'))}<figcaption class="ph__cap">Photo d’illustration</figcaption></figure><h3>Du fait maison</h3><p>« Notre idée est de faire du 100 % maison, tout de A à Z », dit Marion Juhel dans la presse régionale.</p></div>
      <div class="card card--media" data-reveal><figure class="card__ph">${photoImg(photo('biscuits-ble'))}<figcaption class="ph__cap">Photo d’illustration</figcaption></figure><h3>Du bio et du breton</h3><p>Des matières premières majoritairement bio et bretonnes, du commerce équitable quand ce n’est pas local.</p></div>
      <div class="card card--media" data-reveal><figure class="card__ph">${photoImg(photo('bocal-creme'))}<figcaption class="ph__cap">Photo d’illustration</figcaption></figure><h3>La carte de fidélité</h3><p>Valable uniquement sur les produits achetés sans emballage, selon un avis public. <span class="flag">À confirmer</span></p></div>
      <div class="card card--media" data-reveal><figure class="card__ph">${photoImg(photo('pains-tranches'))}<figcaption class="ph__cap">Photo d’illustration</figcaption></figure><h3>Moins d’eau</h3><p>Des économiseurs d’eau sur les robinets, relevés lors de la distinction Éco-Défis 2020.</p></div>
      <div class="card card--media" data-reveal><figure class="card__ph">${photoImg(photo('corbeille-pains'))}<figcaption class="ph__cap">Photo d’illustration</figcaption></figure><h3>Moins de gaspillage</h3><p>Pas de baguette au fournil, pour en perdre moins. <span class="flag">À valider</span></p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="stack">
      <h2 class="h-lg" data-split>Autour de Rennes</h2>
      <p class="lead" data-reveal>Le Beurre de Madame vient de Pacé, avec du lait de Froment du Léon. Les autres fournisseurs ne sont pas nommés ici : seuls ces deux noms sont publics.</p>
      <p class="small muted" data-reveal>Schéma illustratif des distances : les producteurs sont décrits par type, hors beurre et farine cités. <span class="sample-flag">exemple</span></p>
    </div>
    <div data-reveal>
      <svg class="rings" viewBox="0 0 360 360" role="img" aria-label="Schéma des cercles d’approvisionnement autour de Rennes">
        <circle cx="180" cy="180" r="160" fill="none" stroke="currentColor" stroke-opacity=".22" stroke-dasharray="3 6"/>
        <circle cx="180" cy="180" r="110" fill="none" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="3 6"/>
        <circle cx="180" cy="180" r="60" fill="none" stroke="currentColor" stroke-opacity=".35" stroke-dasharray="3 6"/>
        <circle cx="180" cy="180" r="10" fill="#E39A3B"/><text x="196" y="184" font-weight="700">Rennes</text>
        <g fill="#2E4A3C"><circle cx="212" cy="142" r="6"/><circle cx="135" cy="205" r="6"/><circle cx="240" cy="230" r="6"/><circle cx="108" cy="130" r="6"/><circle cx="270" cy="100" r="6"/></g>
        <g fill="#A8643A"><circle cx="70" cy="70" r="6"/></g>
        <text x="220" y="138">Pacé :<tspan x="220" dy="15">Beurre de Madame</tspan></text>
        <text x="30" y="205">Meunier breton</text>
        <text x="190" y="252">Maraîcher</text>
        <text x="40" y="126">Brasserie voisine</text>
        <text x="236" y="96">Ferme laitière</text>
        <text x="78" y="60">Léon : Froment du Léon</text>
        <text x="148" y="352" fill-opacity=".7">rayons : 25, 50, 100 km (indicatif)</text>
      </svg>
    </div>
  </div>
</section>

<section class="section section--amber">
  <div class="wrap split">
    <div class="stack"><h2 class="h-lg" data-split>Une distinction en 2020</h2><p class="lead" data-reveal>Le prix coup de cœur Éco-Défis, remis par Rennes Métropole et la chambre des métiers, a salué dix-sept défis environnementaux relevés par la maison.</p></div>
    <div class="stack" data-reveal><p>Retrouvez la boutique et rapportez un vrai bocal.</p><div class="cta-row">${btn('Nos deux adresses', 'contact', 'btn--ink')}${btn('Voir le journal', 'journal', 'btn--ghost')}</div></div>
  </div>
</section>`)

  initJar(main)
}

function initJar(main: HTMLElement): void {
  const jar = $('#jar', main)!
  const target = $('#target', main)!
  const coin = $('#coin', main)!
  const tally = $('#tally', main)!
  const status = $('#status', main)!
  const stage = $('#stage', main)!
  const btnReturn = $('#return-btn', main)!
  const rm = reducedMotion()
  let count = START
  let busy = false
  let startX = 0
  let startY = 0
  let dragging = false
  let ox = 0
  let oy = 0

  const targetCenter = () => {
    const s = stage.getBoundingClientRect()
    const t = target.getBoundingClientRect()
    const j = jar.getBoundingClientRect()
    return {
      x: t.left + t.width / 2 - (j.left + j.width / 2) + ox,
      y: t.top + t.height / 2 - (j.top + j.height / 2) + oy + 12,
      sx: t.left - s.left + t.width / 2,
      sy: t.top - s.top,
    }
  }

  const award = () => {
    count += 1
    const o = { v: count - 1 }
    if (rm) tally.textContent = count.toLocaleString('fr-FR')
    else gsap.to(o, { v: count, duration: 0.7, ease: 'power2.out', onUpdate: () => (tally.textContent = Math.round(o.v).toLocaleString('fr-FR')) })
    status.textContent = '1 € rendu. Merci pour le geste.'
  }

  const dropIn = (c: ReturnType<typeof targetCenter>) => {
    if (busy) return
    busy = true
    const done = () => {
      award()
      // la pièce
      gsap.set(coin, { left: c.sx - 32, top: c.sy - 32, opacity: 1, scale: 1, rotationY: 0, y: 0 })
      if (rm) {
        gsap.delayedCall(1.2, () => gsap.set(coin, { opacity: 0 }))
        reset()
        return
      }
      gsap
        .timeline({ onComplete: () => reset() })
        .to(coin, { y: -70, rotationY: 720, duration: 0.9, ease: 'power2.out' })
        .to(coin, { y: -20, opacity: 0, duration: 0.5, ease: 'power1.in' }, '>0.2')
    }
    if (rm) {
      gsap.set(jar, { x: c.x, y: c.y })
      done()
    } else {
      gsap.to(jar, { x: c.x, y: c.y, scale: 0.72, duration: 0.65, ease: 'back.out(1.7)', onComplete: done })
    }
  }

  const reset = () => {
    gsap.to(jar, { opacity: 0, duration: rm ? 0 : 0.4, delay: rm ? 0 : 0.6, onComplete: () => {
      gsap.set(jar, { x: 0, y: 0, scale: 1 })
      gsap.to(jar, { opacity: 1, duration: rm ? 0 : 0.5 })
      busy = false
      ox = 0
      oy = 0
      status.textContent = ''
    } })
  }

  const down = (e: PointerEvent) => {
    if (busy || dragging) return
    dragging = true
    jar.setPointerCapture(e.pointerId)
    startX = e.clientX - ox
    startY = e.clientY - oy
    gsap.to(jar, { scale: 1.06, duration: 0.15, ease: 'power2.out' })
  }
  const move = (e: PointerEvent) => {
    if (!dragging) return
    ox = e.clientX - startX
    oy = e.clientY - startY
    gsap.set(jar, { x: ox, y: oy })
    const t = target.getBoundingClientRect()
    const j = jar.getBoundingClientRect()
    const over = j.left + j.width / 2 > t.left - 20 && j.left + j.width / 2 < t.right + 20 && j.top + j.height / 2 > t.top - 40 && j.top + j.height / 2 < t.bottom + 40
    target.classList.toggle('is-over', over)
  }
  const up = (e: PointerEvent) => {
    if (!dragging) return
    dragging = false
    jar.releasePointerCapture(e.pointerId)
    const over = target.classList.contains('is-over')
    target.classList.remove('is-over')
    if (over) dropIn(targetCenter())
    else {
      ox = 0
      oy = 0
      gsap.to(jar, { x: 0, y: 0, scale: 1, duration: rm ? 0 : 0.7, ease: 'elastic.out(1,0.6)' })
    }
  }
  const trigger = () => {
    if (busy) return
    const c = targetCenter()
    dropIn(c)
  }

  jar.addEventListener('pointerdown', down)
  jar.addEventListener('pointermove', move)
  jar.addEventListener('pointerup', up)
  jar.addEventListener('pointercancel', up)
  jar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      trigger()
    }
  })
  btnReturn.addEventListener('click', trigger)
  onLeave(() => {
    gsap.killTweensOf([jar, coin])
  })
}
