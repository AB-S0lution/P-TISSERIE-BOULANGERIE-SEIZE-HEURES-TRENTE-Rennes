import { typo } from '../core/dom'
import { pageHero, photoStrip } from '../core/ui'
import { photo } from '../data/photos'
import { site, addresses } from '../data/site'

export const title = 'Mentions légales | 16h30, Seize Heures Trente'
export const description = 'Mentions légales du site de démonstration 16h30 (Seize Heures Trente), Rennes.'

export function render(main: HTMLElement): void {
  main.innerHTML = typo(`
${pageHero({ title: 'Mentions légales', lead: 'Informations publiques sur l’entreprise et sur ce site de démonstration.' })}
<section class="section section--tight"><div class="wrap prose">
  <h2>Ce site</h2>
  <p>Ce site est une <strong>démonstration de design</strong>, non officielle, réalisée sans lien contractuel avec l’entreprise présentée. Il n’a pas de back-end : aucune commande, aucun paiement, aucune donnée collectée. Les prix, descriptions, articles, événements et statistiques signalés « exemple » sont fictifs.</p>
  <p>Les illustrations sont des créations originales en SVG. Les photos sont des photos d’illustration issues d’Unsplash (licence Unsplash) : ce ne sont pas des photos de la maison, et aucun logo de la maison n’est utilisé. La palette de couleurs est une proposition et n’est pas l’identité officielle.</p>
  <h2>L’entreprise présentée</h2>
  <ul>
    <li>Dénomination sociale : ${site.legalName}</li>
    <li>Enseigne : ${site.tradeName} (« ${site.listingName} »)</li>
    <li>SIREN : ${site.siren} · SIRET du siège : ${site.siret}</li>
    <li>Activité (NAF) : ${site.nafCode}</li>
    <li>Gérante : ${site.founder}</li>
    ${addresses.map((a) => `<li>Établissement : ${a.street}, ${a.city}</li>`).join('')}
    <li>Téléphone (rue Hoche) : 02 99 63 37 65</li>
  </ul>
  <p>Sources : registre public des entreprises (recherche-entreprises.api.gouv.fr), fiches publiques de l’Office de Tourisme de Rennes et du guide Gault&amp;Millau. Informations relevées le 13 octobre 2026.</p>
  <h2>Hébergement</h2>
  <p>Site statique hébergé sur GitHub Pages.</p>
  <h2>Propriété intellectuelle</h2>
  <p>Le code et les illustrations de cette démonstration sont fournis sous la licence du dépôt. Les marques et noms cités appartiennent à leurs propriétaires.</p>
  <h2>Signaler une erreur</h2>
  <p>Si vous représentez la maison et souhaitez corriger ou retirer ce site, contactez le propriétaire du dépôt GitHub.</p>
</div></section>
${photoStrip(['pain-couteau', 'croissants-pile', 'tarte-citron'].map(photo))}`)
}
