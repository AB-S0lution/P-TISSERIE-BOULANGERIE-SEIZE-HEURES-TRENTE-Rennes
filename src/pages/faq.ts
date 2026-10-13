import { esc, typo } from '../core/dom'
import { btn, pageHero } from '../core/ui'
import { faq } from '../data/faq'

export const title = 'Questions fréquentes | 16h30, Seize Heures Trente, Rennes'
export const description = 'Horaires, produits, consigne, commandes : les réponses aux questions fréquentes sur 16h30. Réponses d’exemple, à valider avec la maison.'

export function render(main: HTMLElement): void {
  const groups = Array.from(new Set(faq.map((f) => f.group)))
  main.innerHTML = typo(`
${pageHero({ title: 'Questions fréquentes', kicker: 'FAQ', lead: 'Quatorze réponses. Les faits viennent de sources publiques ; le reste est à valider avec la maison.', art: 'tasse', seed: 6 })}
<section class="section section--tight">
  <div class="wrap faq-groups">${groups
    .map(
      (g) => `<div class="faq" data-reveal><h2 class="h-md" style="margin-bottom:.6rem">${esc(g)}</h2>${faq
        .filter((f) => f.group === g)
        .map((f) => `<details><summary>${esc(f.q)}</summary><div class="ans"><p>${esc(f.a)}</p></div></details>`)
        .join('')}</div>`,
    )
    .join('')}</div>
</section>
<section class="section section--spruce"><div class="wrap split"><div class="stack"><h2 class="h-lg" data-split>Une autre question ?</h2><p class="lead" data-reveal>Le plus simple est d’appeler la boutique de la rue Hoche.</p></div><div class="cta-row" data-reveal>${btn('Appeler le 02 99 63 37 65', 'tel:+33299633765', 'btn--paper')}${btn('Nos deux adresses', 'contact', 'btn--ghost')}</div></div></section>`)
}
