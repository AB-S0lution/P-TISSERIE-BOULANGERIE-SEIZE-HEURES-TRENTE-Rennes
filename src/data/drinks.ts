// DONNÉES D'EXEMPLE : boissons du salon de thé. Réel : un pot de thé à 4 € (avis public).

export interface Drink { id: string; name: string; family: 'thé' | 'café' | 'chocolat' | 'frais'; note: string; price: number; priceReal: boolean }

export const drinks: Drink[] = [
  { id: 'the-pot', name: 'Pot de thé', family: 'thé', note: 'Au choix dans la carte du jour, théière à partager.', price: 4, priceReal: true },
  { id: 'the-vert', name: 'Thé vert de Chine', family: 'thé', note: 'Végétal, légèrement toasté.', price: 4, priceReal: false },
  { id: 'the-noir', name: 'Thé noir fumé', family: 'thé', note: 'Pour la brioche et le beurre salé.', price: 4, priceReal: false },
  { id: 'the-earl', name: 'Earl grey à la bergamote', family: 'thé', note: 'Le classique de 16h30.', price: 4, priceReal: false },
  { id: 'infusion', name: 'Infusion menthe fraîche', family: 'thé', note: 'Feuilles de menthe, miel en option.', price: 3.8, priceReal: false },
  { id: 'espresso', name: 'Expresso', family: 'café', note: 'Corsé, torréfaction française.', price: 2.2, priceReal: false },
  { id: 'allonge', name: 'Allongé', family: 'café', note: 'Un expresso, plus d’eau.', price: 2.4, priceReal: false },
  { id: 'noisette', name: 'Noisette', family: 'café', note: 'Expresso, un nuage de lait.', price: 2.5, priceReal: false },
  { id: 'cappuccino', name: 'Cappuccino', family: 'café', note: 'Lait entier mousseux, cacao.', price: 4.2, priceReal: false },
  { id: 'chocolat-chaud', name: 'Chocolat chaud', family: 'chocolat', note: 'Chocolat noir fondu dans du lait.', price: 4.6, priceReal: false },
  { id: 'chocolat-sarrasin', name: 'Chocolat chaud au sarrasin torréfié', family: 'chocolat', note: 'La note de noisette de la maison.', price: 5, priceReal: false },
  { id: 'jus-pomme', name: 'Jus de pomme breton', family: 'frais', note: 'Pressé en Bretagne.', price: 3.4, priceReal: false },
  { id: 'citronnade', name: 'Citronnade maison', family: 'frais', note: 'Citron, sucre de canne, eau gazeuse.', price: 3.8, priceReal: false },
  { id: 'eau', name: 'Carafe d’eau', family: 'frais', note: 'Filtrée, pour limiter les bouteilles.', price: 0, priceReal: false },
]
