// DONNÉES D'EXEMPLE : réponses rédigées pour la démonstration, à valider avec la maison.
// Les faits (adresses, consigne de 1 €, fermeture le lundi rue Hoche) sont tirés du PLAN.md ;
// toutes les autres précisions sont à confirmer en boutique.

export interface Faq { id: string; group: 'Boutiques' | 'Produits' | 'Consigne et engagements' | 'Commandes'; q: string; a: string }

export const faq: Faq[] = [
  { id: 'q1', group: 'Boutiques', q: 'Où se trouvent vos deux boutiques ?', a: 'Au 3 rue Hoche (pâtisserie et petit salon de thé) et au 2 passage Jeanne-Chauveau, dans le quartier de l’Hôtel-Dieu (boulangerie et fournil), à Rennes.' },
  { id: 'q2', group: 'Boutiques', q: 'Quels sont vos horaires ?', a: 'Les sources se contredisent légèrement et les horaires du passage Jeanne-Chauveau ne sont pas confirmés. Le mieux est d’appeler le 02 99 63 37 65 (rue Hoche). La boutique de la rue Hoche est fermée le lundi.' },
  { id: 'q3', group: 'Boutiques', q: 'Peut-on s’installer pour goûter sur place ?', a: 'Oui, rue Hoche, dans un petit salon de thé. La salle est petite : il peut y avoir de l’attente. Un supplément de 0,50 € pour consommer sur place a été signalé par un client, à confirmer.' },
  { id: 'q4', group: 'Boutiques', q: 'Le salon est-il accessible en fauteuil roulant ?', a: 'Une source indique que la boutique de la rue Hoche est accessible. Information à confirmer en appelant.' },
  { id: 'q5', group: 'Produits', q: 'Pourquoi n’y a-t-il pas de baguette ?', a: 'C’est un choix : la maison cherche à limiter le gaspillage. Cette explication est rapportée par un client et reste à valider avec la maison.' },
  { id: 'q6', group: 'Produits', q: 'Avez-vous des options sans gluten ?', a: 'Certaines pâtisseries individuelles sont sans gluten, et la farine de sarrasin permet des financiers sans gluten. Pas de garantie d’absence de traces : demandez en boutique.' },
  { id: 'q7', group: 'Produits', q: 'Y a-t-il des produits végétaliens ?', a: 'Pas à notre connaissance : la carte repose sur le beurre, les œufs et le lait. Demandez en boutique.' },
  { id: 'q8', group: 'Produits', q: 'Quelle est la spécialité de la maison ?', a: 'La brioche feuilletée, signature depuis l’ouverture, et le kouign-amann au beurre de Pacé. Les cakes de voyage et les cookies sont aussi très cités.' },
  { id: 'q9', group: 'Produits', q: 'Que signifient les noms de lieux sur les créations ?', a: 'Chaque création de saison reprend le nom d’un lieu : Menton, Medellin, Bréhat, Cambrai. C’est l’atlas des créations.' },
  { id: 'q10', group: 'Consigne et engagements', q: 'Comment fonctionne la consigne ?', a: 'Les entremets, glaces et certains gâteaux sont servis dans un bocal en verre avec couvercle, consigné 1 €. Rapportez-le, on vous rend l’euro.' },
  { id: 'q11', group: 'Consigne et engagements', q: 'La carte de fidélité est-elle valable sur tout ?', a: 'Elle n’est valable que sur les produits achetés sans emballage, selon un avis public. À confirmer en boutique.' },
  { id: 'q12', group: 'Consigne et engagements', q: 'Utilisez-vous des produits bio et locaux ?', a: 'La maison met en avant des matières premières majoritairement bio et bretonnes, et du fait maison de A à Z. Les fournisseurs cités publiquement sont le Beurre de Madame (Pacé) et le Froment du Léon.' },
  { id: 'q13', group: 'Commandes', q: 'Peut-on commander en ligne ou se faire livrer ?', a: 'Non : ce site est une démonstration et la maison ne propose pas de commande en ligne à notre connaissance. Contactez la boutique par téléphone.' },
  { id: 'q14', group: 'Commandes', q: 'Comment commander un entremets pour un anniversaire ?', a: 'Utilisez le formulaire de la page Commandes : il prépare un message à envoyer ou à lire au téléphone. Aucun envoi n’est fait par le site.' },
]
