// DONNÉES D'EXEMPLE : temps forts de l'année (dates indicatives, rien n'est annoncé par la maison).

export interface EventItem { id: string; name: string; when: string; month: number; text: string; kind: 'fête' | 'atelier' | 'saison' }

export const events: EventItem[] = [
  { id: 'galette', name: 'Galette des rois', when: 'Début janvier', month: 1, text: 'Frangipane au beurre, fève cachée, couronne en papier. Exemple de programme.', kind: 'fête' },
  { id: 'chandeleur', name: 'Chandeleur', when: 'Début février', month: 2, text: 'Une pause crêpes et caramels au beurre salé, version goûter.', kind: 'fête' },
  { id: 'paques', name: 'Pâques', when: 'Mars ou avril', month: 4, text: 'Cloches, œufs et brioches tressées en grand format.', kind: 'fête' },
  { id: 'atelier-brioche', name: 'Atelier brioche feuilletée', when: 'Un samedi de printemps', month: 5, text: 'Apprendre à tourer la pâte, avec une brioche à emporter. Atelier d’exemple, non programmé.', kind: 'atelier' },
  { id: 'fraises', name: 'Saison des fraises', when: 'Mai et juin', month: 6, text: 'Les créations se parent de fruits rouges, comme chaque année.', kind: 'saison' },
  { id: 'rentree', name: 'Rentrée gourmande', when: 'Septembre', month: 9, text: 'Retour des cakes de voyage et du banana bread.', kind: 'saison' },
  { id: 'atelier-gouter', name: 'Atelier du goûter', when: 'Un mercredi d’automne', month: 10, text: 'Un après-midi pour les enfants : cookies et chocolat chaud. Atelier d’exemple.', kind: 'atelier' },
  { id: 'buches', name: 'Bûches de Noël', when: 'Décembre', month: 12, text: 'Bûches à commander, en bocal ou à partager. Exemple.', kind: 'fête' },
]
