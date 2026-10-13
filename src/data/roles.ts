// Rôles types de l'équipe, SANS noms (échantillon). Seule Marion Juhel est nommée sur le site.

export interface Role { id: string; title: string; text: string; place: string }

export const roles: Role[] = [
  { id: 'fondatrice', title: 'Pâtissière, fondatrice et gérante', text: 'Marion Juhel a ouvert 16h30 en 2018 et garde la main sur la carte et sur les créations.', place: 'Les deux adresses' },
  { id: 'cheffe', title: 'Cheffe pâtissière', text: 'Elle fait vivre la carte des créations et leurs noms de lieux, saison après saison.', place: 'Fournil' },
  { id: 'boulanger', title: 'Boulanger', text: 'Il pétrit, façonne et enfourne les pains du passage Jeanne-Chauveau.', place: 'Jeanne-Chauveau' },
  { id: 'viennoiserie', title: 'Responsable viennoiserie', text: 'Elle tient les deux fournées quotidiennes de viennoiseries et la brioche feuilletée.', place: 'Fournil' },
  { id: 'vente', title: 'Équipe de vente', text: 'Elle conseille, emballe sans plastique et rend la consigne d’un euro.', place: 'Boutiques' },
  { id: 'salon', title: 'Service au salon de thé', text: 'Il prépare les thés, les cafés et les formules goûter de la rue Hoche.', place: 'Rue Hoche' },
]
