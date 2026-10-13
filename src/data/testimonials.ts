// Citations : les 'real' sont des extraits publics (Mapstr et Régal), attribués à la plateforme,
// jamais à une personne. Les autres sont des témoignages GÉNÉRIQUES d'exemple (« Client·e fidèle »).

export interface Testimonial { id: string; text: string; source: string; real: boolean; url?: string; critical?: boolean }

export const testimonials: Testimonial[] = [
  { id: 't1', text: 'Best pain au chocolat de Rennes', source: 'Avis sur Mapstr', real: true, url: 'https://mapstr.com/place/wnfDaZ6pfOg/patisserie-16h30-rennes-' },
  { id: 't2', text: 'Font des gâteaux à tomber', source: 'Avis sur Mapstr', real: true, url: 'https://mapstr.com/place/wnfDaZ6pfOg/patisserie-16h30-rennes-' },
  { id: 't3', text: 'Part de cakes bien généreuses !', source: 'Avis sur Mapstr', real: true, url: 'https://mapstr.com/place/wnfDaZ6pfOg/patisserie-16h30-rennes-' },
  { id: 't4', text: 'Tout est bon. Prévoir son sac à pain.', source: 'Avis sur Mapstr', real: true, url: 'https://mapstr.com/place/wnfDaZ6pfOg/patisserie-16h30-rennes-' },
  { id: 't5', text: 'Pain sarrasin incroyable et brioche tressée pas mal du tout', source: 'Avis sur Mapstr, passage Jeanne-Chauveau', real: true, url: 'https://mapstr.com/place/456eiQJJyl' },
  { id: 't6', text: 'Petit par la taille mais grand par le talent', source: 'Régal, n° 112 (2023), cité sur Mapstr', real: true },
  { id: 't7', text: 'Vitrine très alléchante, pourtant nous avons trouvé les viennoiseries assez quelconques', source: 'Avis nuancé sur Mapstr', real: true, critical: true, url: 'https://mapstr.com/place/456eiQJJyl' },
  { id: 't8', text: 'Ferme à 18h30 donc un peu tôt mais sinon top', source: 'Avis nuancé sur Mapstr', real: true, critical: true, url: 'https://mapstr.com/place/wnfDaZ6pfOg/patisserie-16h30-rennes-' },
  { id: 't9', text: 'Le goûter du mercredi est devenu un rituel à la maison.', source: 'Client·e fidèle (exemple)', real: false },
  { id: 't10', text: 'On apporte nos bocaux, on repart avec le sourire.', source: 'Client·e fidèle (exemple)', real: false },
]
