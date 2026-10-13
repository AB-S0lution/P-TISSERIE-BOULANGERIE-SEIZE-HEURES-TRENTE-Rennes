// DONNÉES D'EXEMPLE : les pains du passage Jeanne-Chauveau. Les noms real:true viennent de la presse
// ou d'avis publics (Ty Fauve, pain de Lodève, petit Marcel, Brasseur, sarrasin, tressée) ; les
// descriptions, farines et prix sont des exemples. Pas de baguette, volontairement.
import type { ArtKind } from '../core/art'

export interface Bread {
  id: string
  name: string
  kind: ArtKind
  seed: number
  flour: string
  description: string
  keeps: string
  price: number
  real: boolean
  tags: string[]
}

export const breads: Bread[] = [
  { id: 'ty-fauve', name: 'Ty Fauve', kind: 'boule', seed: 0, flour: 'Petit épeautre', description: 'Un pain de petit épeautre à la croûte brune, parfumé, qui tient bien la semaine.', keeps: '4 à 5 jours', price: 5.8, real: true, tags: ['épeautre'] },
  { id: 'lodeve', name: 'Pain de Lodève', kind: 'boule', seed: 1, flour: 'Blé, très hydraté', description: 'Une mie alvéolée, légère, à croûte fine ; le pain d’origine languedocienne.', keeps: '3 jours', price: 5.2, real: true, tags: ['très hydraté'] },
  { id: 'marcel', name: 'Le petit Marcel', kind: 'boule', seed: 6, flour: 'Blé et seigle', description: 'Le pain du matin : blé et seigle, mie souple. La presse le cite parmi les « pains épatants ».', keeps: '3 à 4 jours', price: 4.6, real: true, tags: ['seigle'] },
  { id: 'brasseur', name: 'Le Brasseur', kind: 'boule', seed: 2, flour: 'Blé et drêches de brasserie', description: 'Fait avec les drêches d’une microbrasserie voisine, d’après les sources ; un pain malté.', keeps: '4 jours', price: 5.6, real: true, tags: ['drêches'] },
  { id: 'couronne-sarrasin', name: 'Couronne au sarrasin', kind: 'couronne', seed: 2, flour: 'Blé et sarrasin', description: 'Une couronne à la farine de sarrasin, très citée pour son goût de noisette.', keeps: '3 jours', price: 5.9, real: true, tags: ['sarrasin'] },
  { id: 'pain-sarrasin', name: 'Pain au sarrasin', kind: 'boule', seed: 2, flour: 'Sarrasin et blé', description: 'La version en boule, pour les tartines salées et le beurre demi-sel.', keeps: '3 jours', price: 5.4, real: true, tags: ['sarrasin'] },
  { id: 'tressee', name: 'Brioche tressée', kind: 'tresse', seed: 0, flour: 'Blé, beurre, œufs', description: 'La brioche du dimanche, vendue au fournil.', keeps: '2 jours', price: 5.8, real: true, tags: ['brioché'] },
  { id: 'complet', name: 'Pain complet au levain', kind: 'boule', seed: 6, flour: 'Blé complet', description: 'Un levain vif, une mie dense et fruitée.', keeps: '5 jours', price: 4.9, real: false, tags: ['levain'] },
  { id: 'noix-figues', name: 'Pain noix et figues', kind: 'boule', seed: 2, flour: 'Blé et seigle', description: 'Pour le plateau de fromages et le goûter salé.', keeps: '4 jours', price: 6.2, real: false, tags: ['fruits secs'] },
  { id: 'graines', name: 'Pain aux graines', kind: 'boule', seed: 0, flour: 'Blé, lin, tournesol', description: 'Un pain de table, croquant de graines torréfiées.', keeps: '4 jours', price: 5.6, real: false, tags: ['graines'] },
  { id: 'seigle-miel', name: 'Pain de seigle au miel', kind: 'boule', seed: 1, flour: 'Seigle', description: 'Dense, légèrement sucré, parfait avec le beurre salé.', keeps: '6 jours', price: 5.8, real: false, tags: ['seigle'] },
  { id: 'focaccia', name: 'Focaccia du jour', kind: 'tresse', seed: 3, flour: 'Blé, huile d’olive', description: 'Servie en carrés, garnie selon la saison.', keeps: '1 jour', price: 3.6, real: false, tags: ['du jour'] },
]
