// Photos d'illustration Unsplash (licence Unsplash), pas des photos du commerce.
// DONNÉES D'EXEMPLE : images libres de droits pour donner de la matière au site de démonstration.

export type PhotoSet = 'Pâtisseries' | 'Pains' | 'Fournil' | 'Goûter'
export interface Photo { slug: string; src: string; alt: string; credit: string; url: string; width: number; height: number; set: PhotoSet }

const B: string = import.meta.env.BASE_URL
const p = (slug: string, id: string, width: number, height: number, alt: string, set: PhotoSet): Photo => ({
  slug, src: B + 'photos/' + slug + '.jpg', alt, credit: 'Unsplash', url: 'https://images.unsplash.com/photo-' + id, width, height, set,
})

export const photos: Photo[] = [
  p('croissants-table', '1623334044303-241021148842', 1200, 800, 'Croissants dorés posés sur une table', 'Pâtisseries'),
  p('croissant-blanc', '1691480162735-9b91238080f6', 1200, 1200, 'Un croissant sur un fond clair', 'Pâtisseries'),
  p('croissant-plateau', '1530610476181-d83430b64dcd', 1200, 1600, 'Croissants empilés sur un plateau en inox, dans une salle de café', 'Pâtisseries'),
  p('deux-croissants', '1555507036-ab1f4038808a', 1200, 960, 'Croissant feuilleté saupoudré de sucre sur une ardoise sombre', 'Pâtisseries'),
  p('croissants-pile', '1700915704616-b455b3679024', 1000, 1000, 'Pile de croissants serrés les uns contre les autres', 'Pâtisseries'),
  p('croissants-plaque', '1693483640461-267d788b6148', 1200, 1800, 'Croissants alignés sur une plaque de cuisson', 'Fournil'),
  p('croissants-four', '1747459707229-7b1b7c8367e0', 1000, 1777, 'Croissants tout juste sortis du four sur leur plaque', 'Fournil'),
  p('viennoiserie-soucoupe', '1501721358449-1505ca840822', 1200, 800, 'Viennoiserie servie sur une soucoupe en céramique', 'Goûter'),
  p('pains-vitrine', '1568254183919-78a4f43a2877', 1200, 801, 'Pains rangés sur les étagères d’une vitrine', 'Pains'),
  p('pain-panier', '1608198093002-ad4e005484ec', 1200, 675, 'Pains variés et épis de blé dans un panier en osier', 'Pains'),
  p('tartes-vitrine', '1583338917451-face2751d8d5', 1200, 1800, 'Tartes aux fruits et gâteaux au chocolat sur des étagères vitrées', 'Pâtisseries'),
  p('petrissage', '1517686469429-8bdb88b9f907', 1200, 800, 'Mains qui travaillent une pâte à côté d’un rouleau en bois', 'Fournil'),
  p('patisseries-comptoir', '1534432182912-63863115e106', 1000, 1500, 'Pâtisseries et gâteau crumble en vitrine', 'Pâtisseries'),
  p('plateau-gourmandises', '1483695028939-5bb13f8648b0', 1200, 800, 'Plateau de petites gourmandises en gros plan', 'Goûter'),
  p('pain-sac-kraft', '1599819055803-717bba43890f', 1200, 800, 'Pain dans un sac en papier kraft', 'Pains'),
  p('biscuits-ble', '1523294587484-bae6cc870010', 1000, 579, 'Petits pains et épis de blé sur une table en bois', 'Fournil'),
  p('pains-graines', '1509440159596-0249088772ff', 1000, 665, 'Trois pains rustiques aux graines et épis de blé', 'Pains'),
  p('pains-tranches', '1534620808146-d33bb39128b2', 1000, 1500, 'Pain complet coupé en tranches sur un fond clair', 'Pains'),
  p('cafe-viennoiseries', '1515823662972-da6a2e4d3002', 1000, 1500, 'Une tasse de café entourée de viennoiseries', 'Goûter'),
  p('tarte-fruits-rouges', '1620980776848-84ac10194945', 1200, 1800, 'Tarte aux fraises et aux myrtilles sur une table en bois', 'Pâtisseries'),
  p('macarons', '1558326567-98ae2405596b', 1200, 1518, 'Macarons posés sur une table', 'Pâtisseries'),
  p('planche-viennoiseries', '1597528662465-55ece5734101', 1200, 900, 'Croissants et pains au chocolat sur une planche, avec rouleau et fouet', 'Fournil'),
  p('desserts-table', '1691052252990-4cd1fdda73dc', 1200, 1800, 'Assortiment de desserts sur une table', 'Goûter'),
  p('pain-planche', '1613396874083-2d5fbe59ae79', 1200, 1664, 'Pain de campagne présenté sur une planche en bois', 'Pains'),
  p('pain-table-bois', '1590301157172-7ba48dd1c2b2', 1200, 1600, 'Miche posée sur une table en bois', 'Pains'),
  p('pain-couteau', '1559811814-e2c57b5e69df', 1000, 1500, 'Pain tranché à côté d’un couteau à pain', 'Pains'),
  p('pain-plateau-rond', '1620921592619-652411a0d01a', 800, 1067, 'Pain sur un plateau rond en bois', 'Pains'),
  p('pain-jute', '1549413468-cd78edb7e75c', 800, 1200, 'Pain cuit posé sur une toile de jute', 'Pains'),
  p('levain-planche', '1597604391235-a7429b4b350c', 1000, 750, 'Pain au levain sur une planche à découper', 'Pains'),
  p('corbeille-pains', '1566698629409-787a68fc5724', 1200, 800, 'Corbeille de pains variés', 'Pains'),
  p('mie-alveolee', '1562099870-a3c3f2f3b44d', 1000, 1500, 'Gros plan sur une mie de pain alvéolée', 'Fournil'),
  p('pains-grille', '1732565729552-994c6af761e3', 1000, 1500, 'Pains qui refroidissent sur une grille', 'Fournil'),
  p('glace-cornet', '1595080623303-c5ae68d73e92', 1200, 800, 'Part de gâteau sur une soucoupe à côté d’une tasse de thé rose', 'Goûter'),
  p('brioche-tressee', '1509365465985-25d11c17e812', 800, 1067, 'Roulés briochés à la cannelle saupoudrés de sucre glace', 'Pâtisseries'),
  p('glace-fraise', '1497034825429-c343d7c6a68f', 1200, 1800, 'Cornet de glace à la fraise tenu à la main sur un fond orangé', 'Goûter'),
  p('cake-tranche', '1514435390218-898a0e01517a', 1200, 1550, 'Tranche de quatre-quarts sur une assiette, sur un plan en marbre', 'Goûter'),
  p('tarte-meringuee', '1519915028121-7d3463d20b13', 1200, 1800, 'Tarte meringuée entamée, posée sur un torchon', 'Pâtisseries'),
  p('tarte-citron', '1543508185-225c92847541', 1200, 800, 'Part de tarte au citron et sa chantilly sur une assiette blanche', 'Pâtisseries'),
  p('chocolat-copeaux', '1582570675095-9b679953577e', 1200, 962, 'Dessert au chocolat couvert de copeaux, sur fond de grains de café', 'Pâtisseries'),
  p('babka-tranche', '1588079930225-91d6b0a7bc52', 1200, 1800, 'Babka marbrée au chocolat tranchée, avec une tasse de café', 'Pâtisseries'),
  p('babka-noisettes', '1614610671146-8572a7c0225b', 1200, 1600, 'Brioche torsadée au chocolat et aux noisettes sur une assiette', 'Pâtisseries'),
  p('cookies', '1634188023615-7e08901193b6', 1200, 1804, 'Cookies aux pépites de chocolat sur un fond crème', 'Goûter'),
  p('theiere-gouter', '1638890723491-c1f94139474f', 1200, 969, 'Théière émaillée verte et couronne briochée sucrée sur une table', 'Goûter'),
  p('gateau-citron-the', '1645516957005-bb18e3ef6408', 1200, 1800, 'Part de gâteau au citron à côté d’une théière', 'Goûter'),
  p('comptoir-vitrines', '1657498023828-1e0181449d9f', 1200, 800, 'Long comptoir de vitrines éclairées garnies de viennoiseries', 'Fournil'),
  p('gateau-chocolat', '1722846047434-07c0fc7b1a71', 1200, 1500, 'Part de gâteau au chocolat nappée de sauce, sur une assiette blanche', 'Pâtisseries'),
  p('bocal-fraise', '1749280446205-93b204271142', 1200, 1801, 'Dessert à la fraise et à la crème dans un bocal en verre', 'Goûter'),
  p('bocal-creme', '1768203634412-bdcf48b83161', 1200, 800, 'Crème dessert dans un petit pot en verre, cuillère sur une assiette', 'Goûter'),
]

export const photo = (slug: string): Photo => photos.find((x) => x.slug === slug) ?? photos[0]

/** Photo d'illustration associée à un type de dessin (cartes produit, articles). */
const BY_KIND: Record<string, string[]> = {
  brioche: ['brioche-tressee', 'babka-noisettes'],
  kouign: ['planche-viennoiseries', 'deux-croissants'],
  cake: ['cake-tranche', 'gateau-citron-the'],
  cookie: ['cookies'],
  financier: ['plateau-gourmandises', 'cake-tranche'],
  sable: ['tarte-citron', 'tarte-meringuee', 'tarte-fruits-rouges'],
  saintho: ['patisseries-comptoir', 'tartes-vitrine'],
  entremets: ['gateau-chocolat', 'chocolat-copeaux', 'desserts-table'],
  boule: ['pains-graines', 'pain-planche', 'pain-table-bois', 'levain-planche', 'pain-jute', 'corbeille-pains'],
  tresse: ['brioche-tressee', 'babka-noisettes'],
  couronne: ['pain-plateau-rond', 'theiere-gouter'],
  croissant: ['croissants-table', 'croissant-plateau', 'croissants-four'],
  glace: ['glace-fraise'],
  macaron: ['macarons'],
  tasse: ['theiere-gouter', 'cafe-viennoiseries'],
  bocal: ['bocal-fraise', 'bocal-creme'],
  flan: ['bocal-creme', 'tarte-meringuee'],
  babka: ['babka-tranche', 'babka-noisettes'],
}
export const kindPhoto = (kind: string, seed = 0): Photo => {
  const l = BY_KIND[kind] ?? ['croissants-table']
  return photo(l[Math.abs(seed) % l.length])
}
