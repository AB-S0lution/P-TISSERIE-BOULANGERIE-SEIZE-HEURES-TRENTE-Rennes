// Chiffres : « real » = vérifié ; sinon EXEMPLE de démonstration (affiché avec un repère).

export interface Stat { id: string; label: string; value: number; suffix?: string; real: boolean; format?: 'year' | 'plain' }

export const stats: Stat[] = [
  { id: 'since', label: 'année d’ouverture, rue Hoche', value: 2018, real: true, format: 'year' },
  { id: 'sites', label: 'adresses à Rennes', value: 2, real: true },
  { id: 'trophies', label: 'distinctions en 2020', value: 2, real: true },
  { id: 'team', label: 'personnes dans l’équipe (de 10 à 19)', value: 13, real: false },
  { id: 'jars', label: 'bocaux rapportés cette saison', value: 1284, real: false },
  { id: 'organic', label: 'des matières premières bio, objectif visé', value: 70, suffix: ' %', real: false },
  { id: 'km', label: 'km en moyenne entre la ferme et le fournil', value: 85, real: false },
  { id: 'twice', label: 'fournées de viennoiseries par jour', value: 2, real: true },
]
