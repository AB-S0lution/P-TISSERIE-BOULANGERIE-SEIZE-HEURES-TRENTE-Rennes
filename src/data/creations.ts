// DONNÉES D'EXEMPLE : l'atlas des créations. Les 5 premiers noms et leur composition viennent de
// sources publiques (Gault&Millau, voir PLAN.md §3) ; les autres, les saisons et les coordonnées
// affichées sont des illustrations. Les coordonnées sont celles du lieu nommé, à titre décoratif.
import type { ArtKind } from '../core/art'

export interface Creation {
  id: string
  name: string
  kind: ArtKind
  seed: number
  sky: number
  lat: number
  lng: number
  region: string
  season: 'printemps' | 'été' | 'automne' | 'hiver'
  line: string
  ingredients: string[]
  real: boolean
}

export const creations: Creation[] = [
  { id: 'menton', name: 'Menton', kind: 'sable', seed: 3, sky: 0, lat: 43.7747, lng: 7.4973, region: 'Alpes-Maritimes', season: 'hiver', line: 'Sablé et crème au citron.', ingredients: ['citron', 'sablé', 'crème légère'], real: true },
  { id: 'medellin', name: 'Medellin', kind: 'entremets', seed: 1, sky: 2, lat: 6.2442, lng: -75.5812, region: 'Colombie', season: 'automne', line: 'Chantilly praliné et courge.', ingredients: ['praliné', 'courge', 'chantilly'], real: true },
  { id: 'tiajin', name: 'Tiajin', kind: 'flan', seed: 1, sky: 3, lat: 39.3434, lng: 117.3616, region: 'Chine', season: 'été', line: 'Flan, caramel à la reine-des-prés et beurre salé.', ingredients: ['flan', 'reine-des-prés', 'beurre salé'], real: true },
  { id: 'cambrai', name: 'Cambrai', kind: 'saintho', seed: 0, sky: 5, lat: 50.1766, lng: 3.2353, region: 'Nord', season: 'automne', line: 'Saint-honoré, chantilly à la levure torréfiée.', ingredients: ['choux', 'caramel', 'levure torréfiée'], real: true },
  { id: 'brehat', name: 'Bréhat', kind: 'cake', seed: 1, sky: 1, lat: 48.8444, lng: -3.0033, region: 'Côtes-d’Armor', season: 'printemps', line: 'Caramel et poire dans un cake.', ingredients: ['poire', 'caramel', 'cake'], real: true },
  { id: 'ouessant', name: 'Ouessant', kind: 'flan', seed: 2, sky: 5, lat: 48.4637, lng: -5.0912, region: 'Finistère', season: 'hiver', line: 'Sarrasin torréfié et caramel salé.', ingredients: ['sarrasin', 'caramel', 'beurre salé'], real: false },
  { id: 'kyoto', name: 'Kyoto', kind: 'entremets', seed: 4, sky: 1, lat: 35.0116, lng: 135.7681, region: 'Japon', season: 'printemps', line: 'Matcha et haricot rouge.', ingredients: ['matcha', 'haricot rouge', 'amande'], real: false },
  { id: 'seville', name: 'Séville', kind: 'sable', seed: 0, sky: 3, lat: 37.3891, lng: -5.9845, region: 'Andalousie', season: 'hiver', line: 'Orange amère et amande.', ingredients: ['orange amère', 'amande', 'fleur d’oranger'], real: false },
  { id: 'trieste', name: 'Trieste', kind: 'entremets', seed: 2, sky: 2, lat: 45.6495, lng: 13.7768, region: 'Frioul', season: 'automne', line: 'Café serré et mascarpone.', ingredients: ['café', 'mascarpone', 'cacao'], real: false },
  { id: 'cassis', name: 'Cassis', kind: 'macaron', seed: 5, sky: 4, lat: 43.2146, lng: 5.5381, region: 'Bouches-du-Rhône', season: 'été', line: 'Cassis, vanille, sablé noisette.', ingredients: ['cassis', 'vanille', 'noisette'], real: false },
  { id: 'oaxaca', name: 'Oaxaca', kind: 'entremets', seed: 2, sky: 2, lat: 17.0732, lng: -96.7266, region: 'Mexique', season: 'automne', line: 'Chocolat noir et piment doux.', ingredients: ['chocolat', 'piment doux', 'cacao'], real: false },
  { id: 'bergen', name: 'Bergen', kind: 'babka', seed: 3, sky: 5, lat: 60.3913, lng: 5.3221, region: 'Norvège', season: 'hiver', line: 'Pomme et cardamome en feuilleté.', ingredients: ['pomme', 'cardamome', 'beurre'], real: false },
  { id: 'guerande', name: 'Guérande', kind: 'kouign', seed: 1, sky: 0, lat: 47.3286, lng: -2.4296, region: 'Loire-Atlantique', season: 'été', line: 'Caramel à la fleur de sel de Guérande.', ingredients: ['fleur de sel', 'caramel', 'beurre'], real: false },
  { id: 'lisbonne', name: 'Lisbonne', kind: 'flan', seed: 0, sky: 3, lat: 38.7223, lng: -9.1393, region: 'Portugal', season: 'printemps', line: 'Crème cuite, cannelle, feuilletage fin.', ingredients: ['cannelle', 'crème', 'feuilletage'], real: false },
  { id: 'quiberon', name: 'Quiberon', kind: 'sable', seed: 6, sky: 5, lat: 47.4833, lng: -3.1167, region: 'Morbihan', season: 'été', line: 'Beurre salé, pomme et sablé breton.', ingredients: ['pomme', 'sablé breton', 'beurre salé'], real: false },
  { id: 'trapani', name: 'Trapani', kind: 'macaron', seed: 3, sky: 3, lat: 38.0176, lng: 12.5365, region: 'Sicile', season: 'été', line: 'Amande, citron vert et sel de mer.', ingredients: ['amande', 'citron vert', 'sel'], real: false },
]
