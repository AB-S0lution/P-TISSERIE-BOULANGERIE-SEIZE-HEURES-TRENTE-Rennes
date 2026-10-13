import { photoBand } from '../core/ui'
import { photo, type Photo } from '../data/photos'
import { pastry } from '../core/art'
import { esc, eur, typo } from '../core/dom'
import { btn, pageHero, photoFig, photoImg, tile } from '../core/ui'
import { drinks } from '../data/drinks'
import { formulas } from '../data/gouter-formulas'
import { hoursHoche } from '../data/hours'

export const title = 'Le salon de thé | 16h30, 3 rue Hoche, Rennes'
export const description = 'Le petit salon de thé du 3 rue Hoche : thés, cafés, chocolats et formules goûter à déguster sur place. Formules et prix d’exemple.'

const FAM = ['thé', 'café', 'chocolat', 'frais'] as const

const GOUTER: Photo[] = ['gateau-citron-the', 'cafe-viennoiseries', 'cake-tranche', 'cookies', 'babka-tranche', 'viennoiserie-soucoupe'].map(photo)

export function render(main: HTMLElement): void {
  main.innerHTML = typo(`
${pageHero({
  title: 'Le salon de thé de la rue Hoche',
  kicker: '3 rue Hoche',
  lead: 'Une petite salle pour goûter sur place : un thé, une part de cake, et le temps qu’il faut.',
  art: 'tasse',
  seed: 1,
  photo: photo('theiere-gouter'),
  actions: btn('Les formules', '#formules', 'btn--amber', true) + btn('Y aller', 'contact', 'btn--ghost'),
})}

<section class="section section--tight">
  <div class="wrap split">
    <div class="stack">
      <h2 class="h-lg" data-split>Petit par la taille</h2>
      <p class="lead" data-reveal>La salle est petite, les places sont comptées. Une majoration de 0,50 € pour consommer sur place a été signalée par un client.</p>
      <p data-reveal><span class="flag">À confirmer en boutique</span></p>
    </div>
    <div class="card" data-reveal>
      <h3>Horaires indicatifs</h3>
      <table class="hours"><tbody>${hoursHoche.rows.map((r) => `<tr><th scope="row">${esc(r.days)}</th><td>${esc(r.slots)}</td></tr>`).join('')}</tbody></table>
      <p class="small muted" style="margin-top:1rem">${esc(hoursHoche.note)}</p>
    </div>
  </div>
</section>

<section class="section" id="formules">
  <div class="wrap">
    <h2 class="h-lg" data-split>Les formules goûter</h2>
    <p class="lead muted" style="margin:1rem 0 2rem" data-reveal>Six formules d’exemple. <span class="sample-flag">exemple</span></p>
    <div class="cards cards--3">
      ${formulas
        .map(
          (f, i) => `<article class="card card--media" data-reveal style="background:${tile(i + 2)};color:#22191A;--muted:#3b2f2c"><figure class="card__ph">${photoImg(GOUTER[i % GOUTER.length])}<figcaption class="ph__cap">Photo d’illustration</figcaption></figure>
        <p class="mono" style="margin:0">${f.people} ${f.people > 1 ? 'personnes' : 'personne'}</p>
        <h3>${esc(f.name)}</h3><p>${esc(f.tagline)}</p>
        <ul class="small">${f.includes.map((x) => `<li>+ ${esc(x)}</li>`).join('')}</ul>
        <p class="price" style="margin:1rem 0 0;font-size:1rem">${eur(f.price)}</p></article>`,
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section section--spruce">
  <div class="wrap">
    <h2 class="h-lg" data-split>Les boissons</h2>
    <div class="cards cards--2" style="margin-top:2rem">
      ${FAM.map(
        (fam) => `<div class="card" data-reveal><h3 class="it">${fam === 'frais' ? 'Boissons fraîches' : fam === 'thé' ? 'Thés et infusions' : fam === 'café' ? 'Cafés' : 'Chocolats'}</h3>
        <table class="hours"><tbody>${drinks
          .filter((d) => d.family === fam)
          .map((d) => `<tr><th scope="row">${esc(d.name)}<br /><span class="small muted">${esc(d.note)}</span></th><td>${d.price === 0 ? 'offerte' : eur(d.price)}${d.priceReal ? ' <span class="sample-flag">relevé</span>' : ''}</td></tr>`)
          .join('')}</tbody></table></div>`,
      ).join('')}
    </div>
    <p class="small muted" style="margin-top:1.2rem">Seul le prix du pot de thé à 4 € a été relevé. Les autres sont des exemples.</p>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="panel-art panel-art--duo" data-reveal style="background:#F5D893;padding:2rem">${pastry('tasse', 1)}${photoFig(photo('bocal-creme'), 'panel-art__ph')}</div>
    <div class="stack">
      <h2 class="h-lg" data-split>Apporter son bocal</h2>
      <p class="lead" data-reveal>Pour emporter, la maison propose un bocal consigné à 1 €. On le rapporte, on récupère son euro.</p>
      <div data-reveal>${btn('Comment ça marche', 'engagements', 'btn--amber')}</div>
    </div>
  </div>
</section>
${photoBand('Le goûter, en images', ['cafe-viennoiseries','viennoiserie-soucoupe','plateau-gourmandises','desserts-table','glace-cornet','croissant-blanc'].map(photo))}`)
}
