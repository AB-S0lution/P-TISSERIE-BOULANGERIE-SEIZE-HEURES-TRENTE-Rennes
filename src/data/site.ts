// Faits publics vérifiés (voir PLAN.md §1). Rien ici n'est de l'exemple, sauf mention « todo ».

export interface Address {
  id: 'hoche' | 'jeanne-chauveau'
  name: string
  street: string
  city: string
  role: string
  phone?: string
  phoneNote?: string
  mapsUrl: string
  geo?: { lat: number; lng: number }
}

export const site = {
  tradeName: '16h30',
  legalName: 'SEIZE HEURES TRENTE',
  listingName: 'Pâtisserie Boulangerie Seize Heures Trente',
  founder: 'Marion Juhel',
  founded: 2018,
  siren: '840 410 518',
  siret: '840 410 518 00012',
  nafCode: '10.71D, Pâtisserie',
  headcount: '10 à 19 personnes (tranche du registre, 2024)',
  instagram: { handle: '@patisserie_16h30', url: 'https://www.instagram.com/patisserie_16h30/' },
  facebook: { url: 'https://www.facebook.com/patisserie16h30' },
  website: null as string | null, // aucun site officiel trouvé
  email: null as string | null, // TODO : adresse non vérifiée, donc pas de mailto:
  jarDeposit: 1,
  ratingCapture: { value: '4,3', count: 312, source: 'Google', date: '13 octobre 2026' },
} as const

export const addresses: Address[] = [
  {
    id: 'hoche',
    name: 'Rue Hoche',
    street: '3 rue Hoche',
    city: '35000 Rennes',
    role: 'Pâtisserie et petit salon de thé',
    phone: '02 99 63 37 65',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=3+rue+Hoche+35000+Rennes',
    geo: { lat: 48.11328, lng: -1.67746 },
  },
  {
    id: 'jeanne-chauveau',
    name: 'Passage Jeanne-Chauveau',
    street: '2 passage Jeanne-Chauveau',
    city: '35000 Rennes, Hôtel-Dieu',
    role: 'Boulangerie et fournil, visible depuis la boutique',
    phone: '02 23 47 20 24',
    phoneNote: 'Numéro relevé sur une seule source : à confirmer.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=2+passage+Jeanne-Chauveau+35000+Rennes',
  },
]
