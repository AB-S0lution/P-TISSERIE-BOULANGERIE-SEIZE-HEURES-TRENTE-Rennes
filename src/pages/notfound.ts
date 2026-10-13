import { href, typo } from '../core/dom'
import { btn } from '../core/ui'

export const title = 'Page introuvable | 16h30, Seize Heures Trente'
export const description = 'Cette page n’existe pas ou a été déplacée.'

export function render(main: HTMLElement): void {
  main.innerHTML = typo(`
<section class="nf">
  <div>
    <svg class="clock-404" viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="92" fill="#F6EEE1" stroke="#22191A" stroke-width="6"/>
      <g stroke="#22191A" stroke-linecap="round"><path d="M100 100V52" stroke-width="9" transform="rotate(135 100 100)"/><path d="M100 100V30" stroke-width="5" transform="rotate(186 100 100)"/></g>
      <circle cx="100" cy="100" r="8" fill="#E39A3B"/>
    </svg>
    <h1 class="h-xl" data-split>Il est 16h31, ce gâteau est parti.</h1>
    <p class="lead" style="margin:1.2rem auto 1.6rem" data-reveal>La page demandée n’existe pas. Il reste de la brioche feuilletée à l’accueil.</p>
    <div class="cta-row" style="justify-content:center" data-reveal>${btn('Retour à l’accueil', '', 'btn--amber')}${btn('Voir la pâtisserie', 'patisserie', 'btn--ghost')}</div>
    <p class="small muted" style="margin-top:2rem"><a href="${href('')}" data-link>16h30</a> · erreur 404</p>
  </div>
</section>`)
}
