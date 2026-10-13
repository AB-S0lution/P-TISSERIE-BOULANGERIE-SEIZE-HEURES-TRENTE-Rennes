import { photoBand } from '../core/ui'
import { photo } from '../data/photos'
import { bakeryArt } from '../core/art'
import { esc, eur, typo } from '../core/dom'
import { btn, cardMedia, pageHero, photoFig, tile } from '../core/ui'
import { breads } from '../data/breads'

export const title = 'La boulangerie | 16h30, passage Jeanne-Chauveau, Rennes'
export const description =
  'Les pains du passage Jeanne-Chauveau, à l’Hôtel-Dieu : Ty Fauve, pain de Lodève, petit Marcel, pain au sarrasin. Pas de baguette, volontairement.'

export function render(main: HTMLElement): void {
  main.innerHTML = typo(`
${pageHero({
  title: 'La boulangerie du passage Jeanne-Chauveau',
  kicker: 'Hôtel-Dieu, depuis juillet 2023',
  lead: 'Des pains ronds, des couronnes au sarrasin et une brioche tressée. Le fournil est visible depuis la boutique.',
  art: 'boule',
  seed: 0,
  photo: photo('pain-panier'),
  actions: btn('Voir les pains', '#pains', 'btn--amber', true) + btn('Venir', 'contact', 'btn--ghost'),
})}

<section class="section section--tight">
  <div class="wrap split">
    <div class="panel-art" data-reveal>${bakeryArt()}</div>
    <div class="stack">
      <h2 class="h-lg" data-split>Le cœur de 16h30</h2>
      <p class="lead" data-reveal>En 2023, la production quitte la rue Hoche pour le passage Jeanne-Chauveau. C’est là que se pétrissent le pain et une grande partie des pâtisseries.</p>
      <p data-reveal>Cette illustration représente le fournil de façon schématique : ce n’est pas une photo du lieu.</p>
      ${photoFig(photo('pains-grille'), 'ph--wide')}
    </div>
  </div>
</section>

<section class="section" id="pains">
  <div class="wrap">
    <h2 class="h-lg" data-split>Les pains de la maison</h2>
    <p class="lead muted" style="margin:1rem 0 2rem" data-reveal>${breads.length} pains. Les noms marqués « nom réel » sont cités par la presse ou des clients ; les descriptions et prix sont des exemples.</p>
    <div class="pgrid">
      ${breads
        .map(
          (b) => `<article class="pcard" data-reveal>
        ${cardMedia(b.kind, b.seed, tile(b.seed + 2))}
        <div class="pcard__body"><h3>${esc(b.name)}</h3><p>${esc(b.description)}</p>
        <p class="small"><strong>Farine :</strong> ${esc(b.flour)}<br /><strong>Se garde :</strong> ${esc(b.keeps)}</p>
        <div class="tags">${b.real ? '<span class="tag tag--real">nom réel</span>' : ''}${b.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        <div class="pcard__foot"><span class="price">${eur(b.price)}</span><span class="small muted">prix d’exemple</span></div></div></article>`,
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap split">
    <div class="stack">
      <h2 class="h-lg" data-split>Pourquoi pas de baguette ?</h2>
      <p class="lead" data-reveal>Ici, pas de baguette, et c’est voulu. La raison avancée : on en perd beaucoup de morceaux, et la maison veut limiter le gaspillage.</p>
      <p data-reveal><span class="flag">À valider avec la maison</span> Cette explication nous a été rapportée par un client.</p>
      <p data-reveal>Venez avec votre sac à pain : « tout est bon, prévoir son sac à pain », écrit un avis public.</p>
    </div>
    <ul class="cards cards--2" data-reveal>
      <li class="card"><h3 class="h-md">Des boules</h3><p style="margin:0">Moins de croûte exposée, un pain qui dure plus longtemps.</p></li>
      <li class="card"><h3 class="h-md">Des couronnes</h3><p style="margin:0">Au sarrasin, pour la mie et le goût de noisette.</p></li>
      <li class="card"><h3 class="h-md">Des drêches</h3><p style="margin:0">Le Brasseur est fait avec les drêches d’une microbrasserie voisine, selon nos sources.</p></li>
      <li class="card"><h3 class="h-md">Un sac</h3><p style="margin:0">On vous invite à apporter le vôtre.</p></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2 class="h-lg" data-split>Une journée au fournil</h2>
    <div class="cards cards--3" style="margin-top:2rem">
      <div class="card" data-reveal><h3>Pétrir</h3><p>Des farines de blé, d’épeautre, de seigle et de sarrasin, selon les pains de la carte.</p></div>
      <div class="card" data-reveal><h3>Cuire</h3><p>Des pains cuits sur place, pour qu’ils soient frais en boutique.</p></div>
      <div class="card" data-reveal><h3>Regarder</h3><p>Le fournil est visible depuis la boutique : on suit le travail à travers la vitre.</p></div>
    </div>
    <div class="cta-row" style="margin-top:2rem" data-reveal>${btn('Les horaires et l’accès', 'contact', 'btn--amber')}</div>
  </div>
</section>
${photoBand('Les pains, en images', ['pains-graines','pain-planche','pain-table-bois','corbeille-pains','pain-jute','pain-plateau-rond','pains-tranches','pains-vitrine','pain-panier','pain-sac-kraft'].map(photo))}`)
}
