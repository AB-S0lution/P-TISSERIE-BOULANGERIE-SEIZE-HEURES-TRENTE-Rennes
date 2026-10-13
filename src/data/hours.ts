// Horaires : trois sources se contredisent pour la rue Hoche, aucune pour Jeanne-Chauveau.
// On affiche donc ces horaires comme INDICATIFS, jamais comme certains (voir PLAN.md §1 et §11).

export interface HoursRow { days: string; slots: string }
export interface HoursSet {
  place: 'hoche' | 'jeanne-chauveau'
  verified: boolean
  source: string
  rows: HoursRow[]
  note: string
}

export const hoursHoche: HoursSet = {
  place: 'hoche',
  verified: false,
  source: 'Office de Tourisme de Rennes (relevé du 13 octobre 2026)',
  rows: [
    { days: 'Lundi', slots: 'fermé' },
    { days: 'Mardi au jeudi', slots: '9h-18h30' },
    { days: 'Vendredi et samedi', slots: '9h-19h' },
    { days: 'Dimanche', slots: '9h-13h, 15h-18h30' },
  ],
  note: 'Horaires indicatifs : d’autres sources donnent des heures d’ouverture légèrement différentes. Appelez avant de venir.',
}

export const hoursJeanneChauveau: HoursSet = {
  place: 'jeanne-chauveau',
  verified: false,
  source: 'Aucune source trouvée',
  rows: [],
  note: 'Horaires à confirmer auprès de la maison.',
}

/** Le seul point sur lequel toutes les sources concordent (rue Hoche). */
export const closedMonday = { place: 'hoche', verified: true, text: 'Fermé le lundi à la boutique de la rue Hoche (toutes les sources concordent).' }
