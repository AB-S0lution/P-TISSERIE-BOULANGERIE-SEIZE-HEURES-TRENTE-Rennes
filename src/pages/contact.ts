import { $, esc, typo } from '../core/dom'
import { onLeave } from '../core/motion'
import { btn, gouterMessage, pageHero, photoImg } from '../core/ui'
import { photo } from '../data/photos'
import { hoursHoche, hoursJeanneChauveau, closedMonday } from '../data/hours'
import { addresses, site } from '../data/site'

export const title = 'Nos deux adresses et contact | 16h30, Rennes'
export const description = 'Rue Hoche et passage Jeanne-Chauveau à Rennes : adresses, téléphone, plan et horaires à confirmer. Horloge locale du goûter.'

export function render(main: HTMLElement): void {
  const [hoche, jc] = addresses
  main.innerHTML = typo(`
${pageHero({ title: 'Nos deux adresses', kicker: 'Contact et accès', lead: 'Une pâtisserie rue Hoche, une boulangerie au passage Jeanne-Chauveau. Deux façons de goûter à Rennes.', art: 'macaron', seed: 0, photo: photo('comptoir-vitrines') })}
<section class="section section--tight">
  <div class="wrap addr">
    <article class="card card--media" data-reveal>
      <figure class="card__ph">${photoImg(photo('patisseries-comptoir'))}<figcaption class="ph__cap">Photo d’illustration, pas la boutique</figcaption></figure>
      <h3>${esc(hoche.name)}</h3><p class="muted">${esc(hoche.role)}</p>
      <dl><dt>Adresse</dt><dd>${esc(hoche.street)}<br />${esc(hoche.city)}</dd><dt>Téléphone</dt><dd><a href="tel:+33299633765">${esc(hoche.phone!)}</a></dd><dt>Métro</dt><dd>Sainte-Anne (à confirmer)</dd></dl>
      <h4 class="h-md" style="margin:1rem 0 .4rem">Horaires <span class="flag">à confirmer</span></h4>
      <table class="hours"><tbody>${hoursHoche.rows.map((r) => `<tr><th scope="row">${esc(r.days)}</th><td>${esc(r.slots)}</td></tr>`).join('')}</tbody></table>
      <p class="small muted" style="margin-top:.8rem">${esc(hoursHoche.note)} ${esc(closedMonday.text)}</p>
      <div class="cta-row" style="margin-top:1rem">${btn('Ouvrir le plan', hoche.mapsUrl, 'btn--amber')}${btn('Appeler', 'tel:+33299633765', 'btn--ghost')}</div>
    </article>
    <article class="card card--media" data-reveal>
      <figure class="card__ph">${photoImg(photo('pains-vitrine'))}<figcaption class="ph__cap">Photo d’illustration, pas la boutique</figcaption></figure>
      <h3>${esc(jc.name)}</h3><p class="muted">${esc(jc.role)}</p>
      <dl><dt>Adresse</dt><dd>${esc(jc.street)}<br />${esc(jc.city)}</dd><dt>Téléphone</dt><dd><a href="tel:+33223472024">${esc(jc.phone!)}</a><br /><span class="small muted">${esc(jc.phoneNote!)}</span></dd></dl>
      <h4 class="h-md" style="margin:1rem 0 .4rem">Horaires <span class="flag">à confirmer</span></h4>
      <p>${esc(hoursJeanneChauveau.note)} Nous n’avons trouvé aucune source fiable.</p>
      <div class="cta-row" style="margin-top:1rem">${btn('Ouvrir le plan', jc.mapsUrl, 'btn--amber')}${btn('Appeler', 'tel:+33223472024', 'btn--ghost')}</div>
    </article>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap split">
    <div class="stack">
      <h2 class="h-lg" data-split>16h30 près de chez vous</h2>
      <p class="lead" data-reveal>L’heure locale de votre appareil, et le temps qu’il reste avant le goûter.</p>
    </div>
    <div class="stack" data-reveal>
      <div class="live-clock" id="clock" aria-hidden="true">--:--</div>
      <p class="goute__big" id="gouter">Goûter dans…</p>
      <p class="small muted" id="gouter-sub"></p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="stack">
      <h2 class="h-lg" data-split>Nous suivre</h2>
      <p class="lead" data-reveal>Les créations du moment et la vitrine du jour se trouvent sur Instagram et Facebook.</p>
      <div class="cta-row" data-reveal>${btn('Instagram ' + site.instagram.handle, site.instagram.url, 'btn--amber')}${btn('Facebook', site.facebook.url, 'btn--ghost')}</div>
    </div>
    <div class="card" data-reveal><h3>Ce site</h3><p>Site de démonstration, non officiel. Pas d’adresse e-mail publique vérifiée, pas de formulaire d’envoi : pour commander, appelez la boutique.</p><p class="small muted" style="margin:0">Accès : transports en commun et vélos en libre-service à proximité de la rue Hoche, d’après l’Office de Tourisme.</p></div>
  </div>
</section>`)

  const clock = $('#clock', main)!
  const g = $('#gouter', main)!
  const gs = $('#gouter-sub', main)!
  const tick = () => {
    const now = new Date()
    clock.textContent = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    const m = gouterMessage(now)
    g.textContent = m.big
    gs.textContent = m.sub
  }
  tick()
  const id = window.setInterval(tick, 15_000)
  onLeave(() => clearInterval(id))
}
