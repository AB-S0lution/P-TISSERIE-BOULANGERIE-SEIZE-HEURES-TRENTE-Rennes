import { photoBand } from '../core/ui'
import { photo } from '../data/photos'
import { pastry } from '../core/art'
import { esc, typo } from '../core/dom'
import { btn, pageHero, photoImg, quoteCard } from '../core/ui'
import { roles } from '../data/roles'
import { stats } from '../data/stats'
import { testimonials } from '../data/testimonials'

export const title = 'La maison | 16h30, Seize Heures Trente, Rennes'
export const description =
  'L’histoire de 16h30, fondée en 2018 par Marion Juhel à Rennes : une pâtisserie régressive, moderne, responsable et abordable, puis une boulangerie en 2023.'

// Mains au travail, vitrines, service : jamais de visage en gros plan.
const ROLE_PH = ['tarte-fruits-rouges', 'tarte-citron', 'petrissage', 'croissants-plaque', 'comptoir-vitrines', 'theiere-gouter']

export function render(main: HTMLElement): void {
  main.innerHTML = typo(`
${pageHero({
  title: 'Régressive, moderne, responsable, abordable.',
  kicker: 'La maison',
  lead: 'C’est ainsi que Marion Juhel décrit la pâtisserie qu’elle a ouverte seule rue Hoche, en 2018. 16h30, c’est l’heure du goûter.',
  art: 'brioche',
  photo: photo('patisseries-comptoir'),
  actions: btn('Nos engagements', 'engagements', 'btn--amber') + btn('Nos deux adresses', 'contact', 'btn--ghost'),
})}

<section class="section section--tight">
  <div class="wrap">
    <div class="stats">${stats
      .map(
        (s) => `<div class="stat" data-reveal><b ${s.format === 'year' ? '' : `data-count="${s.value}"`}>${s.format === 'year' ? s.value : '0'}${s.suffix ?? ''}</b><span>${esc(s.label)} ${s.real ? '' : '<span class="sample-flag">exemple</span>'}</span></div>`,
      )
      .join('')}</div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2 class="h-lg" data-split>Une histoire en trois dates</h2>
    <div class="timeline" style="margin-top:2.5rem">
      <div class="tl" data-reveal><figure class="tl__ph">${photoImg(photo('croissant-plateau'))}<figcaption class="ph__cap">Photo d’illustration</figcaption></figure><time datetime="2018">2018</time><h3>Rue Hoche, toute seule</h3><p>Marion Juhel ouvre 16h30 au 3 rue Hoche, une petite boutique de pâtisserie avec un coin salon de thé. La brioche feuilletée devient la signature de la maison.</p></div>
      <div class="tl" data-reveal><figure class="tl__ph">${photoImg(photo('tartes-vitrine'))}<figcaption class="ph__cap">Photo d’illustration</figcaption></figure><time datetime="2020">2020</time><h3>Deux distinctions</h3><p>Le Trophée Pâtissier Gault&amp;Millau Grand Ouest et le prix coup de cœur Éco-Défis récompensent la qualité et la démarche : consigne, économies d’eau, emballages limités.</p></div>
      <div class="tl" data-reveal><figure class="tl__ph">${photoImg(photo('pains-grille'))}<figcaption class="ph__cap">Photo d’illustration</figcaption></figure><time datetime="2023-07">Juillet 2023</time><h3>Passage Jeanne-Chauveau</h3><p>La rue Hoche devient trop petite. Une seconde boutique ouvre à l’Hôtel-Dieu : la production y déménage, la boulangerie naît, le fournil est visible depuis la boutique.</p></div>
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap">
    <h2 class="h-lg" data-split>Quatre mots, et ce qu’ils changent</h2>
    <div class="values" style="margin-top:2.5rem">
      <div class="value" data-reveal><h3>Régressive</h3><p>Des goûts d’enfance : brioche, cake, cookie, kouign-amann.</p></div>
      <div class="value" data-reveal><h3>Moderne</h3><p>Courge, reine-des-prés, épicéa, levure torréfiée : des idées de cuisine dans la pâtisserie.</p></div>
      <div class="value" data-reveal><h3>Responsable</h3><p>Du bio et du breton quand c’est possible, du fait maison de A à Z, peu d’emballages.</p></div>
      <div class="value" data-reveal><h3>Abordable</h3><p>Une brioche à 1,80 €, une boutique ouverte à tous.</p></div>
    </div>
    <p class="small muted" style="margin-top:1.4rem" data-reveal>Les quatre mots viennent d’un entretien public de Marion Juhel (podcast « Ici vous êtes », 2021).</p>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="stack">
      <h2 class="h-lg" data-split>L’équipe, par métiers</h2>
      <p class="lead" data-reveal>Entre dix et dix-neuf personnes font vivre les deux adresses. Voici les rôles, sans noms : seule Marion Juhel est nommée sur ce site.</p>
    </div>
    <ul class="cards" data-reveal>${roles
      .map((r, i) => `<li class="card card--media"><figure class="card__ph card__ph--short">${photoImg(photo(ROLE_PH[i % ROLE_PH.length]))}<figcaption class="ph__cap">Photo d’illustration</figcaption></figure><h3 class="h-md">${esc(r.title)}</h3><p style="margin:0">${esc(r.text)}</p><p class="small muted" style="margin:.6rem 0 0">${esc(r.place)} <span class="sample-flag">exemple</span></p></li>`)
      .join('')}</ul>
  </div>
</section>

<section class="section section--spruce">
  <div class="wrap">
    <div class="split">
      <div class="stack">
        <h2 class="h-lg" data-split>Petit par la taille, grand par le talent</h2>
        <p data-reveal>Le magazine <em>Régal</em> (n° 112, 2023) résumait ainsi la rue Hoche. Voici d’autres voix.</p>
      </div>
      <div class="panel-art panel-art--duo" data-reveal style="background:transparent">${pastry('saintho', 0)}<figure class="ph panel-art__ph"><img src="${photo('tarte-meringuee').src}" alt="${esc(photo('tarte-meringuee').alt)}" width="1200" height="1800" loading="lazy" decoding="async" /><figcaption class="ph__cap">Photo d’illustration · Unsplash</figcaption></figure></div>
    </div>
    <div class="quotes" style="margin-top:2.4rem">${testimonials.filter((t) => ['t6', 't5', 't8'].includes(t.id)).map(quoteCard).join('')}</div>
  </div>
</section>
${photoBand('L’atelier, en images', ['petrissage','biscuits-ble','planche-viennoiseries','croissants-plaque','pains-grille','mie-alveolee','levain-planche','pain-couteau'].map(photo))}`)
}
