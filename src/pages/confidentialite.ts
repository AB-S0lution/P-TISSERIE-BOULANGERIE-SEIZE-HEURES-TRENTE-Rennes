import { typo } from '../core/dom'
import { pageHero } from '../core/ui'

export const title = 'Confidentialité | 16h30, Seize Heures Trente'
export const description = 'Politique de confidentialité du site de démonstration 16h30 : aucune donnée collectée.'

export function render(main: HTMLElement): void {
  main.innerHTML = typo(`
${pageHero({ title: 'Confidentialité', lead: 'Ce site ne collecte rien. Voici ce qui se passe, concrètement.' })}
<section class="section section--tight"><div class="wrap prose">
  <h2>Aucune collecte</h2>
  <p>Le site est statique : pas de base de données, pas de compte, pas d’analyse d’audience, pas de cookie publicitaire. Aucune donnée n’est envoyée à un serveur par les formulaires.</p>
  <h2>Le formulaire de commande</h2>
  <p>Il compose un message sur votre appareil. Vous le copiez, ou vous appelez la boutique : rien ne part automatiquement.</p>
  <h2>L’heure locale</h2>
  <p>Le compte à rebours « Goûter dans… » utilise l’heure de votre appareil. Elle n’est ni stockée ni transmise.</p>
  <h2>Liens externes</h2>
  <p>Les liens vers Instagram, Facebook et Google Maps ouvrent des services tiers, avec leurs propres règles.</p>
  <h2>Polices et ressources</h2>
  <p>Les polices et les images sont hébergées avec le site : aucune requête vers un service de polices externe.</p>
</div></section>`)
}
