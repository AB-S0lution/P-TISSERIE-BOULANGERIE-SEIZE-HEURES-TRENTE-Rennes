import { pastry } from '../core/art'
import { $, esc, typo } from '../core/dom'
import { btn, pageHero, photoImg, tile } from '../core/ui'
import { photo } from '../data/photos'
import { events } from '../data/events'
import { products } from '../data/products'
import { addresses, site } from '../data/site'

export const title = 'Commandes et occasions | 16h30, Seize Heures Trente, Rennes'
export const description =
  'Entremets, gâteaux de fête et grands formats à commander chez 16h30 : préparez votre demande, puis appelez la boutique. Pas de commande en ligne.'

const OCCASIONS = [
  { id: 'anniv', name: 'Anniversaire', text: 'Un gâteau pour 6 à 12 personnes, parfum au choix.', kind: 'entremets' as const, seed: 5 },
  { id: 'brunch', name: 'Brunch et petit-déjeuner', text: 'Une brioche feuilletée grand format, des viennoiseries, un cake.', kind: 'brioche' as const, seed: 0 },
  { id: 'mariage', name: 'Mariage et cocktail', text: 'Des mini-pâtisseries et des financiers, en plateau.', kind: 'macaron' as const, seed: 3 },
  { id: 'bureau', name: 'Goûter de bureau', text: 'Cookies et cakes de voyage pour toute une équipe.', kind: 'cookie' as const, seed: 0 },
]

const OCC_PH = ['tarte-fruits-rouges', 'planche-viennoiseries', 'macarons', 'cookies', 'gateau-chocolat', 'babka-noisettes']

export function render(main: HTMLElement): void {
  const choices = products.filter((p) => ['partager', 'entremets'].includes(p.category) || p.tags.includes('a-partager'))
  main.innerHTML = typo(`
${pageHero({
  title: 'Commander pour 16h30',
  kicker: 'Commandes et occasions',
  lead: 'Il n’y a pas de commande en ligne. Préparez votre demande ici, puis appelez la boutique pour la confirmer.',
  art: 'entremets',
  seed: 5,
  photo: photo('desserts-table'),
  actions: btn('Préparer ma demande', '#demande', 'btn--amber', true),
})}

<section class="section section--tight">
  <div class="wrap">
    <h2 class="h-lg" data-split>Pour quelles occasions ?</h2>
    <div class="cards cards--2" style="margin-top:2rem">${OCCASIONS.map(
      (o, i) => `<article class="card occasion" data-reveal style="background:${tile(i + 3)};color:#22191A;--muted:#3b2f2c"><figure class="occasion__ph">${photoImg(photo(OCC_PH[i % OCC_PH.length]))}<span class="occasion__art" aria-hidden="true">${pastry(o.kind, o.seed)}</span><figcaption class="ph__cap">Photo d’illustration</figcaption></figure><div><h3 class="h-md">${esc(o.name)}</h3><p style="margin:0">${esc(o.text)}</p></div></article>`,
    ).join('')}</div>
  </div>
</section>

<section class="section section--spruce" id="demande">
  <div class="wrap split">
    <div class="stack">
      <h2 class="h-lg" data-split>Préparer ma demande</h2>
      <p class="lead" data-reveal>Ce formulaire ne part nulle part. Il compose un message que vous lisez au téléphone ou copiez dans un message privé Instagram.</p>
      <p class="small" data-reveal>Pas d’adresse e-mail publique vérifiée à ce jour : c’est pourquoi aucun envoi par courriel n’est proposé.</p>
    </div>
    <form class="form" id="order" novalidate data-reveal>
      <div class="form-row">
        <div class="field"><label for="f-name">Votre prénom</label><input id="f-name" name="name" autocomplete="given-name" required /><span class="error" id="e-name"></span></div>
        <div class="field"><label for="f-date">Pour quel jour ?</label><input id="f-date" name="date" type="date" required /><span class="error" id="e-date"></span></div>
      </div>
      <div class="form-row">
        <div class="field"><label for="f-item">Produit</label><select id="f-item" name="item">${choices.map((p) => `<option>${esc(p.name)}</option>`).join('')}<option>Autre (à préciser)</option></select></div>
        <div class="field"><label for="f-n">Nombre de personnes</label><input id="f-n" name="n" type="number" min="1" max="60" value="6" inputmode="numeric" /></div>
      </div>
      <div class="field"><label for="f-place">Boutique de retrait</label><select id="f-place">${addresses.map((a) => `<option>${esc(a.street)}</option>`).join('')}</select></div>
      <div class="field"><label for="f-msg">Précisions (allergies, message)</label><textarea id="f-msg"></textarea><span class="hint">Pas de données sensibles : ce message reste sur votre appareil.</span></div>
      <button class="btn btn--amber" type="submit" style="justify-self:start">Composer le message<span class="btn__dot" aria-hidden="true">&rarr;</span></button>
    </form>
  </div>
  <div class="wrap" style="margin-top:2rem"><div class="output" id="out" hidden aria-live="polite" style="color:#22191A;--muted:#3b2f2c;--accent-ink:#5a2f12;background:#F6EEE1"></div></div>
</section>

<section class="section">
  <div class="wrap">
    <h2 class="h-lg" data-split>Les temps forts de l’année</h2>
    <p class="lead muted" style="margin:1rem 0 2rem" data-reveal>Un calendrier d’exemple : aucune date n’est annoncée par la maison. <span class="sample-flag">exemple</span></p>
    <div class="cards cards--3">${events
      .map((e) => `<article class="card" data-reveal><p class="mono" style="margin:0;color:var(--accent-ink)">${esc(e.when)}</p><h3>${esc(e.name)}</h3><p style="margin:0">${esc(e.text)}</p></article>`)
      .join('')}</div>
  </div>
</section>`)

  const form = $<HTMLFormElement>('#order', main)!
  const out = $('#out', main)!
  const date = $<HTMLInputElement>('#f-date', main)!
  const today = new Date()
  today.setDate(today.getDate() + 1)
  date.min = today.toISOString().slice(0, 10)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = ($<HTMLInputElement>('#f-name', main)!).value.trim()
    const d = date.value
    $('#e-name', main)!.textContent = name ? '' : 'Indiquez votre prénom.'
    $('#e-date', main)!.textContent = d ? '' : 'Choisissez une date.'
    if (!name || !d) return
    const item = ($<HTMLSelectElement>('#f-item', main)!).value
    const n = ($<HTMLInputElement>('#f-n', main)!).value
    const place = ($<HTMLSelectElement>('#f-place', main)!).value
    const msg = ($<HTMLTextAreaElement>('#f-msg', main)!).value.trim()
    const when = new Date(d + 'T12:00:00').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
    const text = `Bonjour, c’est ${name}. Je voudrais commander : ${item}, pour ${n} personne${Number(n) > 1 ? 's' : ''}, pour le ${when}, à retirer au ${place}.${msg ? ' Précisions : ' + msg : ''} Merci de me confirmer la disponibilité et le prix.`
    out.hidden = false
    out.innerHTML = `<h3 class="h-md" style="margin-bottom:.8rem">Votre message</h3><pre id="msg-text"></pre>
      <div class="cta-row"><button class="btn btn--ink" type="button" id="copy">Copier le message</button>
      <a class="btn btn--amber" href="tel:+33299633765">Appeler la rue Hoche, 02 99 63 37 65</a>
      <a class="btn btn--ghost" href="${site.instagram.url}" target="_blank" rel="noopener">Écrire sur Instagram</a></div>
      <p class="small muted" id="copied" role="status" style="margin-top:.8rem"></p>`
    $('#msg-text', out)!.textContent = text
    $('#copy', out)!.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(text)
        $('#copied', out)!.textContent = 'Message copié.'
      } catch {
        $('#copied', out)!.textContent = 'Copie impossible : sélectionnez le texte et copiez-le.'
      }
    })
    out.scrollIntoView({ block: 'nearest' })
  })
}
