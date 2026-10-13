// DONNÉES D'EXEMPLE : formules goûter du salon de thé (rue Hoche). Prix et contenus inventés.
// Seul fait réel : une majoration de 0,50 € pour consommer sur place est évoquée par un client.

export interface Formula { id: string; name: string; tagline: string; includes: string[]; price: number; people: number }

export const formulas: Formula[] = [
  { id: 'classique', name: 'Le classique', tagline: 'Un goûter simple, comme à la maison.', includes: ['1 viennoiserie ou 1 part de cake', '1 boisson chaude'], price: 7.4, people: 1 },
  { id: 'gourmand', name: 'Le gourmand', tagline: 'Pour la pause qui s’étire.', includes: ['1 création de saison', '1 cookie', '1 boisson chaude'], price: 11.8, people: 1 },
  { id: 'enfant', name: 'Le petit goûter', tagline: 'Pour les enfants jusqu’à 10 ans.', includes: ['1 brioche feuilletée', '1 jus de pomme breton'], price: 5.2, people: 1 },
  { id: 'duo', name: 'Le duo', tagline: 'Deux théières, deux parts, un banc.', includes: ['2 cakes de voyage', '1 pot de thé pour deux', '2 financiers'], price: 19.5, people: 2 },
  { id: 'tribu', name: 'La tribu', tagline: 'Quatre personnes autour du kouign-amann.', includes: ['1 kouign-amann grand format', '2 pots de thé', '4 cookies'], price: 36, people: 4 },
  { id: 'sans-gluten', name: 'Le goûter sans gluten', tagline: 'Des pâtisseries individuelles sans gluten.', includes: ['1 pâtisserie individuelle sans gluten', '1 financier sarrasin', '1 boisson chaude'], price: 12.4, people: 1 },
]
