// DONNÉES D'EXEMPLE : articles de journal inventés pour la démonstration. Aucun n'a été publié par la maison.
import type { ArtKind } from '../core/art'

export interface Post {
  id: string
  slug: string
  title: string
  date: string // ISO
  category: 'Créations' | 'Engagements' | 'Pains' | 'Coulisses' | 'Saison'
  kind: ArtKind
  seed: number
  excerpt: string
  body: string[]
  minutes: number
  /** Photo d'illustration (slug de src/data/photos.ts). */
  photo: string
}

export const posts: Post[] = [
  {
    id: 'p1', photo: 'tarte-meringuee', slug: 'une-creation-un-lieu', title: 'Une création, un lieu : comment naissent Menton, Bréhat et les autres', date: '2026-09-18', category: 'Créations', kind: 'sable', seed: 3,
    excerpt: 'À 16h30, chaque pâtisserie de saison porte le nom d’un endroit. Voici pourquoi cet atlas a du sens.',
    body: ['Menton pour le citron, Bréhat pour le caramel et la poire, Medellin pour la courge et le praliné : les créations de la maison portent des noms de lieux. L’idée est simple, un dessert doit donner envie de partir un peu.', 'Un nom de lieu fixe un goût de départ : la fraîcheur d’un citron, la douceur d’une île bretonne. Le reste est affaire de texture et de saison.', 'Cet article est un exemple de journal. La carte réelle change au fil des mois : le mieux est de regarder la vitrine.'], minutes: 3,
  },
  {
    id: 'p2', photo: 'bocal-fraise', slug: 'la-consigne-a-un-euro', title: 'La consigne à 1 € : un bocal, deux fois plus de goûters', date: '2026-08-30', category: 'Engagements', kind: 'bocal', seed: 4,
    excerpt: 'Entremets, glaces, gâteaux : le bocal à couvercle est consigné. Mode d’emploi.',
    body: ['Sur les entremets, les glaces et certains gâteaux, la maison propose un bocal en verre avec couvercle, consigné 1 €. On le rapporte, on récupère son euro.', 'Cette habitude évite du plastique à usage unique et s’inscrit dans la démarche récompensée par le prix coup de cœur Éco-Défis en 2020.', 'Sur la page Engagements, vous pouvez rapporter un bocal virtuel : c’est une démonstration, mais le principe est bien réel.'], minutes: 2,
  },
  {
    id: 'p3', photo: 'pains-graines', slug: 'pourquoi-pas-de-baguette', title: 'Pourquoi pas de baguette ?', date: '2026-08-12', category: 'Pains', kind: 'boule', seed: 0,
    excerpt: 'Au fournil, on fait des boules, des couronnes et des tresses. La baguette est absente, et c’est voulu.',
    body: ['Au passage Jeanne-Chauveau, le pain prend des formes rondes : le Ty Fauve, le pain de Lodève, le petit Marcel. Pas de baguette.', 'La raison avancée est celle du gaspillage : une baguette dure peu et on en perd beaucoup de morceaux. Cette explication est à valider avec la maison.', 'Venez avec votre sac à pain : tout est bon, comme le dit un client sur une plateforme d’avis.'], minutes: 2,
  },
  {
    id: 'p4', photo: 'planche-viennoiseries', slug: 'beurre-de-madame', title: 'Le Beurre de Madame, de Pacé au kouign-amann', date: '2026-07-24', category: 'Coulisses', kind: 'kouign', seed: 1,
    excerpt: 'Le kouign-amann de la maison est fait avec un beurre de Pacé, aux portes de Rennes.',
    body: ['Le kouign-amann est une pâte, du beurre et du sucre. Autant dire que le beurre est tout. La maison cite le Beurre de Madame, produit à Pacé avec du lait de Froment du Léon.', 'Un bon beurre se sent dès la première bouchée : crémeux, légèrement salé, qui caramélise sans brûler.', 'Le grand kouign-amann se vend 17 € ; il part souvent vite le week-end. Texte d’exemple pour le reste.'], minutes: 3,
  },
  {
    id: 'p5', photo: 'croissants-four', slug: 'deux-fournees-par-jour', title: 'Deux fournées de viennoiseries par jour', date: '2026-06-28', category: 'Coulisses', kind: 'croissant', seed: 0,
    excerpt: 'Une fournée le matin, une autre plus tard : les viennoiseries sont proposées deux fois par jour.',
    body: ['L’Office de Tourisme de Rennes le note : les viennoiseries sont proposées deux fois par jour. Pain au chocolat, croissant, brioche perdue au caramel.', 'Deux fournées veulent dire moins de stock, des produits plus frais, et un deuxième moment de croquant dans l’après-midi.', 'Les heures exactes ne sont pas publiées sur ce site de démonstration : appelez la boutique.'], minutes: 2,
  },
  {
    id: 'p6', photo: 'cake-tranche', slug: 'cakes-de-voyage', title: 'Cakes de voyage : le Buckingham, le Madagascar et les autres', date: '2026-06-02', category: 'Créations', kind: 'cake', seed: 0,
    excerpt: 'Un cake de voyage se garde, se partage, se transporte. Tour d’horizon des recettes de la maison.',
    body: ['Le Buckingham, le banana bread, le Madagascar, le quatre-quarts, le cake au pamplemousse rose : la maison décline les gourmandises du cake, comme le dit l’Office de Tourisme.', 'Un cake de voyage tient plusieurs jours dans un sac. C’est le goûter du train, du pique-nique, du bureau.', 'Les recettes détaillées sont des exemples ; l’inspiration est la carte réelle.'], minutes: 3,
  },
  {
    id: 'p7', photo: 'pain-plateau-rond', slug: 'sarrasin-partout', title: 'Le sarrasin partout : pain, financier, cookie', date: '2026-05-14', category: 'Pains', kind: 'couronne', seed: 2,
    excerpt: 'Une farine bretonne qui parfume le pain, les financiers et les cookies.',
    body: ['Le sarrasin n’est pas une céréale : c’est une graine, naturellement sans gluten. Il a un goût de noisette grillée.', 'À 16h30, on le retrouve dans les couronnes au sarrasin, le pain au sarrasin et le financier sarrasin.', 'Les avis disent de ce pain qu’il est incroyable : à goûter avec du beurre demi-sel.'], minutes: 2,
  },
  {
    id: 'p8', photo: 'comptoir-vitrines', slug: 'bienvenue-a-hotel-dieu', title: 'Bienvenue à l’Hôtel-Dieu : la boutique du passage Jeanne-Chauveau', date: '2026-04-20', category: 'Coulisses', kind: 'boule', seed: 6,
    excerpt: 'Depuis juillet 2023, 16h30 a une seconde adresse dans le quartier de l’Hôtel-Dieu.',
    body: ['La rue Hoche était devenue trop petite : en 2023, la production et une partie de l’équipe ont déménagé dans la nouvelle boutique du passage Jeanne-Chauveau.', 'On y vend du pain, et on peut voir le fournil travailler depuis la boutique.', 'La rue Hoche reste la pâtisserie et le petit salon de thé.'], minutes: 2,
  },
  {
    id: 'p9', photo: 'theiere-gouter', slug: 'le-gouter-parfait', title: 'Le goûter parfait, en trois gestes', date: '2026-03-22', category: 'Saison', kind: 'tasse', seed: 1,
    excerpt: 'Quelle part, quelle boisson, quelle heure ? Un petit mode d’emploi tout à fait subjectif.',
    body: ['1. Choisir une part qui se tient : cake, cookie, brioche feuilletée. 2. Choisir une boisson qui répond : un thé noir fumé avec un cake au citron. 3. Prendre le temps.', 'Le goûter est un rituel français : 16h30, c’est l’heure que la maison a choisie pour s’appeler.', 'Texte d’exemple, sans engagement.'], minutes: 2,
  },
  {
    id: 'p10', photo: 'pain-sac-kraft', slug: 'pas-de-plastique', title: 'Emballer sans plastique : les gestes de la boutique', date: '2026-02-10', category: 'Engagements', kind: 'bocal', seed: 3,
    excerpt: 'Sacs en papier, bocaux consignés, carte de fidélité valable sans emballage.',
    body: ['La maison limite les emballages à usage unique. La carte de fidélité n’est valable que sur les produits achetés sans emballage, selon un avis public.', 'Apportez votre sac à pain, votre boîte, vos bocaux : c’est ce que les clients sont invités à faire.', 'Cet article est un exemple de contenu éditorial.'], minutes: 2,
  },
]
