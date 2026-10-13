// DONNÉES D'EXEMPLE (sample data) : catalogue de démonstration.
// Les NOMS marqués real:true viennent de sources publiques (voir PLAN.md §3) ; les descriptions,
// ingrédients, allergènes et la plupart des prix sont des exemples plausibles à remplacer.
// Prix réels connus : brioche individuelle 1,80 €, grand kouign-amann 17 €.
import type { ArtKind } from '../core/art'

export type Category = 'viennoiserie' | 'cake' | 'biscuit' | 'financier' | 'creation' | 'entremets' | 'glace' | 'partager'
export type Tag = 'saison' | 'sans-gluten' | 'a-partager' | 'voyage' | 'signature' | 'consigne' | 'sarrasin'
export type Unit = 'pièce' | 'la part' | 'entier' | 'le pot'

export interface Product {
  id: string
  name: string
  category: Category
  kind: ArtKind
  seed: number
  place?: string
  description: string
  ingredients: string[]
  allergens: string[]
  tags: Tag[]
  price: number
  unit: Unit
  priceReal: boolean
  real: boolean
  vitrine?: boolean
}

export const categoryLabels: Record<Category, string> = {
  viennoiserie: 'Viennoiseries et brioches',
  cake: 'Cakes de voyage',
  biscuit: 'Cookies et biscuits',
  financier: 'Financiers',
  creation: 'Créations de saison',
  entremets: 'Entremets en bocal',
  glace: 'Glaces maison',
  partager: 'À partager',
}

const G = 'gluten', L = 'lait', O = 'œufs', N = 'fruits à coque'

function p(
  id: string, name: string, category: Category, kind: ArtKind, seed: number, description: string,
  ingredients: string[], allergens: string[], tags: Tag[], price: number, unit: Unit,
  o: { place?: string; priceReal?: boolean; real?: boolean; vitrine?: boolean } = {},
): Product {
  return { id, name, category, kind, seed, description, ingredients, allergens, tags, price, unit,
    place: o.place, priceReal: o.priceReal ?? false, real: o.real ?? false, vitrine: o.vitrine }
}

export const products: Product[] = [
  // Viennoiseries et brioches (10)
  p('croissant', 'Croissant', 'viennoiserie', 'croissant', 0, 'Pur beurre, feuilletage serré, cuit à point pour croquer puis fondre.', ['farine', 'beurre', 'lait', 'levain'], [G, L], [], 1.9, 'pièce', { vitrine: true }),
  p('pain-chocolat', 'Pain au chocolat', 'viennoiserie', 'croissant', 2, 'Deux barres de chocolat noir dans une pâte feuilletée bien dorée. Souvent cité par les clients.', ['farine', 'beurre', 'chocolat noir'], [G, L], ['signature'], 2.1, 'pièce', { real: true, vitrine: true }),
  p('brioche-perdue', 'Brioche perdue caramel', 'viennoiserie', 'brioche', 1, 'La brioche de la veille, trempée, dorée à la poêle et nappée de caramel au beurre salé.', ['brioche', 'œufs', 'caramel', 'beurre salé'], [G, L, O], [], 4.2, 'pièce', { real: true }),
  p('brioche-feuilletee', 'Brioche feuilletée individuelle', 'viennoiserie', 'brioche', 0, 'La signature de la maison depuis l’ouverture : une brioche aux mille feuilles, dorée et légère.', ['farine', 'beurre', 'œufs', 'sucre'], [G, L, O], ['signature'], 1.8, 'pièce', { real: true, priceReal: true, vitrine: true }),
  p('brioche-feuilletee-grande', 'Brioche feuilletée, grand format', 'viennoiserie', 'brioche', 0, 'La même, en grand, pour le petit-déjeuner à plusieurs ou le goûter du dimanche.', ['farine', 'beurre', 'œufs', 'sucre'], [G, L, O], ['signature', 'a-partager'], 9.5, 'entier', { real: true }),
  p('brioche-tressee', 'Brioche tressée', 'viennoiserie', 'tresse', 0, 'Une tresse moelleuse à la mie filante, vendue au fournil du passage Jeanne-Chauveau.', ['farine', 'beurre', 'œufs', 'lait'], [G, L, O], [], 5.8, 'entier', { real: true }),
  p('chausson', 'Chausson aux pommes', 'viennoiserie', 'croissant', 1, 'Compote de pommes peu sucrée, pâte feuilletée croustillante.', ['pommes', 'beurre', 'farine'], [G, L], [], 2.6, 'pièce'),
  p('pain-raisins', 'Pain aux raisins', 'viennoiserie', 'brioche', 3, 'Crème pâtissière à la vanille, raisins macérés dans le thé.', ['crème pâtissière', 'raisins', 'beurre'], [G, L, O], [], 2.6, 'pièce'),
  p('kouign-individuel', 'Kouign-amann individuel', 'viennoiserie', 'kouign', 1, 'Beurre de Pacé, sucre caramélisé, bords craquants. Il part vite le week-end.', ['Beurre de Madame (Pacé)', 'sucre', 'farine'], [G, L], ['signature'], 3.9, 'pièce', { real: true, vitrine: true }),
  p('kouign-grand', 'Kouign-amann, grand format', 'partager', 'kouign', 1, 'Le grand kouign-amann, au beurre de Pacé, à partager (ou pas).', ['Beurre de Madame (Pacé)', 'sucre', 'farine'], [G, L], ['signature', 'a-partager'], 17, 'entier', { real: true, priceReal: true }),

  // Cakes de voyage (10)
  p('buckingham', 'Le Buckingham', 'cake', 'cake', 0, 'Cake de voyage à l’anglaise, citron et épices douces, glaçage fin.', ['farine', 'beurre', 'citron', 'épices'], [G, L, O], ['voyage'], 4.2, 'la part', { real: true, vitrine: true }),
  p('banana-bread', 'Banana bread', 'cake', 'cake', 1, 'Bananes bien mûres, noix et pépites de chocolat. Part généreuse.', ['banane', 'noix', 'chocolat', 'farine'], [G, L, O, N], ['voyage'], 4, 'la part', { real: true }),
  p('madagascar', 'Le Madagascar', 'cake', 'cake', 2, 'Vanille, cacao et poivre de Madagascar dans un cake dense et parfumé.', ['vanille', 'cacao', 'poivre', 'beurre'], [G, L, O], ['voyage'], 4.4, 'la part', { real: true }),
  p('quatre-quarts', 'Quatre-quarts', 'cake', 'cake', 0, 'Le classique beurre, sucre, œufs, farine, à la mie serrée et dorée.', ['beurre', 'sucre', 'œufs', 'farine'], [G, L, O], ['voyage'], 3.6, 'la part', { real: true }),
  p('cake-pamplemousse', 'Cake pamplemousse rose', 'cake', 'cake', 5, 'Pamplemousse rose confit et glaçage acidulé, très frais en fin de repas.', ['pamplemousse rose', 'beurre', 'sucre glace'], [G, L, O], ['voyage', 'saison'], 4.2, 'la part', { real: true }),
  p('cake-citron-pavot', 'Cake citron et pavot', 'cake', 'cake', 3, 'Zeste de citron, graines de pavot, sirop au citron pour la tendreté.', ['citron', 'pavot', 'beurre'], [G, L, O], ['voyage'], 3.9, 'la part'),
  p('cake-marbre', 'Cake marbré chocolat noisette', 'cake', 'cake', 2, 'Un marbré franc de chocolat avec des éclats de noisette torréfiée.', ['chocolat', 'noisettes', 'beurre'], [G, L, O, N], ['voyage'], 4.2, 'la part'),
  p('cake-chataigne', 'Cake châtaigne et poire', 'cake', 'cake', 6, 'Crème de marron, dés de poire, pour les après-midi d’automne.', ['châtaigne', 'poire', 'beurre'], [G, L, O], ['voyage', 'saison'], 4.2, 'la part'),
  p('cake-pistache', 'Cake pistache et framboise', 'cake', 'cake', 4, 'Pâte de pistache, framboises entières, sucre perlé.', ['pistache', 'framboises', 'beurre'], [G, L, O, N], ['voyage', 'saison'], 4.5, 'la part'),
  p('cake-figues', 'Cake figues et noix', 'cake', 'cake', 1, 'Figues séchées, noix concassées, miel de printemps.', ['figues', 'noix', 'miel'], [G, L, O, N], ['voyage'], 4.2, 'la part'),

  // Cookies et biscuits (8)
  p('cookie-noisette', 'Cookie noisette', 'biscuit', 'cookie', 0, 'Noisettes grillées, chocolat au lait, croustillant sur les bords.', ['noisettes', 'chocolat', 'beurre'], [G, L, O, N], ['signature'], 3.2, 'pièce', { real: true, vitrine: true }),
  p('cookie-pecan', 'Cookie pécan', 'biscuit', 'cookie', 1, 'Noix de pécan, cassonade, texture biscuitée plutôt que coulante.', ['noix de pécan', 'cassonade', 'beurre'], [G, L, O, N], ['signature'], 3.2, 'pièce', { real: true }),
  p('cookie-chocolat', 'Cookie chocolat noir et fleur de sel', 'biscuit', 'cookie', 2, 'Gros éclats de chocolat noir, une pincée de fleur de sel.', ['chocolat noir', 'fleur de sel', 'beurre'], [G, L, O], [], 3.2, 'pièce'),
  p('cookie-sarrasin', 'Cookie sarrasin et cacao', 'biscuit', 'cookie', 2, 'Farine de sarrasin, pépites de cacao, goût de noisette sans noisette.', ['sarrasin', 'cacao', 'beurre'], [L, O], ['sarrasin', 'sans-gluten'], 3.4, 'pièce'),
  p('sable-breton', 'Sablé breton', 'biscuit', 'sable', 0, 'Beurre demi-sel, jaune d’œuf, une cuisson longue pour la couleur.', ['beurre demi-sel', 'jaunes', 'farine'], [G, L, O], [], 2.4, 'pièce'),
  p('palet-breton', 'Palet breton', 'biscuit', 'sable', 1, 'Plus épais et plus fondant que le sablé, à croquer avec le thé.', ['beurre', 'sucre', 'farine'], [G, L, O], [], 2.2, 'pièce'),
  p('madeleine', 'Madeleine au miel', 'biscuit', 'financier', 0, 'Cuite à la commande de la fournée, avec sa bosse.', ['miel', 'beurre', 'œufs'], [G, L, O], [], 1.9, 'pièce'),
  p('galette-bretonne', 'Galette bretonne', 'biscuit', 'sable', 3, 'Galette au beurre salé, à emporter dans un sac en papier.', ['beurre salé', 'farine'], [G, L, O], [], 2.8, 'pièce'),

  // Financiers (4)
  p('financier-nature', 'Financier nature', 'financier', 'financier', 0, 'Poudre d’amande, beurre noisette, blancs d’œufs. Rien d’autre.', ['amandes', 'beurre noisette', 'blancs'], [G, L, O, N], [], 2.6, 'pièce'),
  p('financier-sarrasin', 'Financier sarrasin', 'financier', 'financier', 2, 'Version à la farine de sarrasin, plus rustique, plus parfumée.', ['sarrasin', 'beurre noisette', 'amandes'], [L, O, N], ['sarrasin', 'sans-gluten'], 2.8, 'pièce', { real: true, vitrine: true }),
  p('financier-pistache', 'Financier pistache', 'financier', 'financier', 4, 'Pâte de pistache et cœur de framboise.', ['pistache', 'framboise', 'beurre'], [G, L, O, N], ['saison'], 2.9, 'pièce'),
  p('financier-citron', 'Financier citron', 'financier', 'financier', 3, 'Zeste et jus de citron pour une mie très légère.', ['citron', 'amandes', 'beurre'], [G, L, O, N], [], 2.7, 'pièce'),

  // Créations de saison nommées d'après des lieux (14)
  p('menton', 'Menton', 'creation', 'sable', 3, 'Sablé, crème au citron, une fraîcheur de Riviera en plein Rennes.', ['citron', 'sablé breton', 'crème'], [G, L, O], ['saison'], 6.2, 'pièce', { real: true, place: 'Menton', vitrine: true }),
  p('medellin', 'Medellin', 'creation', 'entremets', 1, 'Chantilly au praliné et courge, un dessert chaleureux et inattendu.', ['praliné', 'courge', 'crème'], [G, L, O, N], ['saison'], 6.4, 'pièce', { real: true, place: 'Medellin' }),
  p('tiajin', 'Tiajin', 'creation', 'flan', 1, 'Flan, caramel à la reine-des-prés et beurre salé.', ['reine-des-prés', 'beurre salé', 'œufs'], [G, L, O], ['saison'], 5.8, 'pièce', { real: true, place: 'Tiajin' }),
  p('cambrai', 'Cambrai', 'creation', 'saintho', 0, 'Un saint-honoré revisité, chantilly à la levure torréfiée.', ['pâte à choux', 'levure torréfiée', 'caramel'], [G, L, O], ['saison'], 6.8, 'pièce', { real: true, place: 'Cambrai' }),
  p('brehat', 'Bréhat', 'creation', 'cake', 1, 'Caramel et poire dans un cake moelleux, d’après l’île bretonne.', ['poire', 'caramel', 'beurre'], [G, L, O], ['saison', 'voyage'], 5.6, 'pièce', { real: true, place: 'Bréhat' }),
  p('macaron-yuzu', 'Macaron yuzu et épicéa', 'creation', 'macaron', 3, 'Coque amande, ganache au yuzu, chantilly à l’épicéa.', ['amandes', 'yuzu', 'épicéa'], [L, O, N], ['saison', 'sans-gluten'], 2.8, 'pièce', { real: true }),
  p('babka', 'Babka', 'creation', 'babka', 2, 'Brioche torsadée au chocolat, sirop de sucre en finition.', ['brioche', 'chocolat', 'sirop'], [G, L, O], ['a-partager'], 5.2, 'la part', { real: true }),
  p('ouessant', 'Ouessant', 'creation', 'flan', 2, 'Sarrasin torréfié, caramel salé, croustillant de blé noir.', ['sarrasin', 'caramel', 'beurre salé'], [L, O], ['saison', 'sarrasin', 'sans-gluten'], 6, 'pièce', { place: 'Ouessant' }),
  p('kyoto', 'Kyoto', 'creation', 'entremets', 4, 'Thé matcha, haricot rouge confit, biscuit moelleux.', ['matcha', 'haricot rouge', 'amandes'], [G, L, O, N], ['saison'], 6.4, 'pièce', { place: 'Kyoto' }),
  p('seville', 'Séville', 'creation', 'sable', 0, 'Orange amère, amande, une pointe de fleur d’oranger.', ['orange amère', 'amandes', 'fleur d’oranger'], [G, L, O, N], ['saison'], 6.2, 'pièce', { place: 'Séville' }),
  p('trieste', 'Trieste', 'creation', 'entremets', 2, 'Café serré, mascarpone, biscuit imbibé : le tiramisu de la maison.', ['café', 'mascarpone', 'cacao'], [G, L, O], [], 6, 'pièce', { place: 'Trieste' }),
  p('cassis', 'Cassis', 'creation', 'macaron', 5, 'Cassis, vanille et sablé noisette, très acidulé.', ['cassis', 'vanille', 'noisettes'], [G, L, O, N], ['saison'], 6.2, 'pièce', { place: 'Cassis' }),
  p('oaxaca', 'Oaxaca', 'creation', 'entremets', 2, 'Chocolat noir, piment doux, sablé au cacao.', ['chocolat noir', 'piment doux', 'cacao'], [G, L, O], [], 6.4, 'pièce', { place: 'Oaxaca' }),
  p('bergen', 'Bergen', 'creation', 'babka', 3, 'Pomme et cardamome en feuilleté, d’inspiration scandinave.', ['pomme', 'cardamome', 'beurre'], [G, L, O], ['saison'], 5.8, 'pièce', { place: 'Bergen' }),

  // Entremets en bocal consigné (6)
  p('ent-vanille-framboise', 'Vanille et framboise', 'entremets', 'bocal', 5, 'Crémeux vanille, coulis de framboise, biscuit amande.', ['vanille', 'framboise', 'amandes'], [G, L, O, N], ['consigne'], 5.8, 'le pot'),
  p('ent-chocolat-sarrasin', 'Chocolat et sarrasin', 'entremets', 'bocal', 2, 'Mousse chocolat noir, crumble de sarrasin.', ['chocolat', 'sarrasin', 'beurre'], [L, O], ['consigne', 'sarrasin', 'sans-gluten'], 5.8, 'le pot'),
  p('ent-citron', 'Citron meringué', 'entremets', 'bocal', 3, 'Crème citron, meringue brûlée au chalumeau.', ['citron', 'meringue', 'sablé'], [G, L, O], ['consigne'], 5.6, 'le pot'),
  p('ent-cafe', 'Café noisette', 'entremets', 'bocal', 2, 'Crémeux café, noisettes caramélisées.', ['café', 'noisettes', 'crème'], [L, O, N], ['consigne', 'sans-gluten'], 5.6, 'le pot'),
  p('ent-poire', 'Poire caramel', 'entremets', 'bocal', 1, 'Compotée de poire, crème caramel, éclats de speculoos.', ['poire', 'caramel', 'speculoos'], [G, L, O], ['consigne', 'saison'], 5.8, 'le pot'),
  p('ent-riz', 'Riz au lait caramel beurre salé', 'entremets', 'bocal', 6, 'Riz rond, lait entier, caramel au beurre salé.', ['riz', 'lait', 'caramel'], [L], ['consigne', 'sans-gluten'], 4.8, 'le pot'),

  // Glaces maison (4)
  p('glace-vanille', 'Glace vanille', 'glace', 'glace', 6, 'Crème, lait, vanille en gousses. Pot consigné.', ['lait', 'crème', 'vanille'], [L, O], ['consigne', 'sans-gluten'], 4.6, 'le pot'),
  p('glace-caramel', 'Glace caramel beurre salé', 'glace', 'glace', 1, 'Un caramel poussé, une pointe de sel.', ['caramel', 'beurre salé', 'crème'], [L, O], ['consigne', 'sans-gluten'], 4.8, 'le pot'),
  p('glace-chocolat', 'Glace chocolat noir', 'glace', 'glace', 2, 'Chocolat noir intense, peu sucrée.', ['chocolat', 'lait'], [L], ['consigne', 'sans-gluten'], 4.8, 'le pot'),
  p('sorbet-citron', 'Sorbet citron', 'glace', 'glace', 3, 'Citron pressé, sucre de canne, c’est tout.', ['citron', 'sucre'], [], ['consigne', 'sans-gluten'], 4.4, 'le pot'),

  // À partager (4 en plus du grand kouign-amann)
  p('tarte-pommes', 'Tarte aux pommes à partager', 'partager', 'sable', 1, 'Pommes en lamelles, crème d’amande, pâte sablée au beurre.', ['pommes', 'amandes', 'beurre'], [G, L, O, N], ['a-partager', 'saison'], 14, 'entier'),
  p('tarte-citron', 'Tarte au citron meringuée', 'partager', 'sable', 3, 'Crème citron bien acide, meringue légère, 6 parts.', ['citron', 'œufs', 'beurre'], [G, L, O], ['a-partager'], 16, 'entier'),
  p('cake-pamplemousse-entier', 'Cake pamplemousse rose, entier', 'partager', 'cake', 5, 'Le cake entier pour les goûters à six ou huit.', ['pamplemousse rose', 'beurre'], [G, L, O], ['a-partager', 'voyage'], 15, 'entier'),
  p('saintho-partager', 'Saint-Honoré de Cambrai à partager', 'partager', 'saintho', 0, 'Version entière du saint-honoré revisité, à commander.', ['choux', 'levure torréfiée', 'caramel'], [G, L, O], ['a-partager', 'saison'], 17, 'entier', { real: true }),
]
