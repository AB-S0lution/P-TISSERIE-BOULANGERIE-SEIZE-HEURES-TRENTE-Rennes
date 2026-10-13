// DONNÉES D'EXEMPLE : galerie d'illustrations originales (SVG/CSS). Aucune photo de la maison.
import type { ArtKind } from '../core/art'

export interface GalleryItem { id: string; title: string; caption: string; kind: ArtKind; seed: number; tile: string; shape: 'tall' | 'wide' | 'sq'; set: 'Pâtisseries' | 'Pains' | 'Lieux' | 'Objets' }

export const gallery: GalleryItem[] = [
  { id: 'g1', title: 'Brioche feuilletée', caption: 'La signature, en doré.', kind: 'brioche', seed: 0, tile: '#F5D893', shape: 'tall', set: 'Pâtisseries' },
  { id: 'g2', title: 'Kouign-amann', caption: 'Beurre et sucre caramélisés.', kind: 'kouign', seed: 1, tile: '#E7B27A', shape: 'sq', set: 'Pâtisseries' },
  { id: 'g3', title: 'Menton', caption: 'Sablé au citron.', kind: 'sable', seed: 3, tile: '#F7EAA0', shape: 'wide', set: 'Pâtisseries' },
  { id: 'g4', title: 'Saint-honoré de Cambrai', caption: 'Chantilly à la levure torréfiée.', kind: 'saintho', seed: 0, tile: '#EFE3C8', shape: 'sq', set: 'Pâtisseries' },
  { id: 'g5', title: 'Cookie noisette', caption: 'Croustillant sur les bords.', kind: 'cookie', seed: 0, tile: '#D9C7A3', shape: 'wide', set: 'Pâtisseries' },
  { id: 'g6', title: 'Financier sarrasin', caption: 'Beurre noisette.', kind: 'financier', seed: 2, tile: '#C3D1B5', shape: 'tall', set: 'Pâtisseries' },
  { id: 'g7', title: 'Ty Fauve', caption: 'Petit épeautre.', kind: 'boule', seed: 0, tile: '#EFE3C8', shape: 'sq', set: 'Pains' },
  { id: 'g8', title: 'Couronne au sarrasin', caption: 'Un pain en anneau.', kind: 'couronne', seed: 2, tile: '#F5D893', shape: 'tall', set: 'Pains' },
  { id: 'g9', title: 'Brioche tressée', caption: 'Pour le dimanche.', kind: 'tresse', seed: 0, tile: '#E8A3AE', shape: 'wide', set: 'Pains' },
  { id: 'g10', title: 'Le petit Marcel', caption: 'Blé et seigle.', kind: 'boule', seed: 6, tile: '#C3D1B5', shape: 'sq', set: 'Pains' },
  { id: 'g11', title: 'Pain de Lodève', caption: 'Mie alvéolée.', kind: 'boule', seed: 1, tile: '#F7EAA0', shape: 'wide', set: 'Pains' },
  { id: 'g12', title: 'Entremets en bocal', caption: 'Le bocal à 1 €.', kind: 'bocal', seed: 5, tile: '#E8A3AE', shape: 'tall', set: 'Objets' },
  { id: 'g13', title: 'Glace maison', caption: 'Pot consigné.', kind: 'glace', seed: 6, tile: '#C3D1B5', shape: 'sq', set: 'Objets' },
  { id: 'g14', title: 'Pot de thé', caption: 'Pour deux.', kind: 'tasse', seed: 1, tile: '#F5D893', shape: 'wide', set: 'Objets' },
  { id: 'g15', title: 'Macaron yuzu', caption: 'Chantilly à l’épicéa.', kind: 'macaron', seed: 3, tile: '#C3D1B5', shape: 'sq', set: 'Pâtisseries' },
  { id: 'g16', title: 'Babka', caption: 'Torsades chocolat.', kind: 'babka', seed: 2, tile: '#E7B27A', shape: 'tall', set: 'Pâtisseries' },
  { id: 'g17', title: 'Tiajin', caption: 'Flan à la reine-des-prés.', kind: 'flan', seed: 1, tile: '#F5D893', shape: 'wide', set: 'Pâtisseries' },
  { id: 'g18', title: 'Le Buckingham', caption: 'Cake de voyage.', kind: 'cake', seed: 0, tile: '#EFE3C8', shape: 'sq', set: 'Pâtisseries' },
  { id: 'g19', title: 'Croissant', caption: 'Pur beurre.', kind: 'croissant', seed: 0, tile: '#F5D893', shape: 'tall', set: 'Pâtisseries' },
  { id: 'g20', title: 'Entremets du soir', caption: 'Chocolat et sarrasin.', kind: 'entremets', seed: 2, tile: '#D9C7A3', shape: 'wide', set: 'Pâtisseries' },
]
