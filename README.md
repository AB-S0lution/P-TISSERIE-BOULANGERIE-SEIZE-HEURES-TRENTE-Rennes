# 16h30, Pâtisserie Boulangerie Seize Heures Trente (Rennes)

Site de **démonstration** (non officiel) pour la pâtisserie-boulangerie **16h30**, fondée en 2018 par Marion Juhel, avec deux adresses à Rennes : 3 rue Hoche et 2 passage Jeanne-Chauveau (Hôtel-Dieu).

Concept : **« L'heure du goûter »**. Un cadran d'horloge qui avance en scrollant jusqu'à 16:30, quand la vitrine s'ouvre.

- Site statique (aucun back-end), français, déployé sur GitHub Pages : <https://ab-s0lution.github.io/P-TISSERIE-BOULANGERIE-SEIZE-HEURES-TRENTE-Rennes/>
- Source de vérité des faits : [`PLAN.md`](./PLAN.md). Les faits sont réels ; le catalogue, les prix (sauf deux), les articles, la FAQ, les événements et les statistiques sont des **données d'exemple**, marquées comme telles.
- Pas de photos ni de logo de la maison : toutes les images sont des illustrations SVG originales (`src/core/art.ts`). La palette est une **proposition**, pas l'identité officielle.

## Pages (14 routes)

| Route | Contenu |
|---|---|
| `/` | Cadran épinglé (7h à 16:30), vitrine qui s'ouvre, compte à rebours local, distinctions, signatures, marquee des pains, vitrine du jour (exemple), aperçu de l'atlas, citations |
| `/maison` | Histoire 2018, 2020, 2023, valeurs, équipe par métiers, chiffres |
| `/patisserie` | Atlas horizontal des 16 créations (cartes postales qui se retournent) + carte de 60 références filtrable |
| `/boulangerie` | 12 pains, fournil (illustration), « pourquoi pas de baguette » |
| `/salon-de-the` | Horaires indicatifs, 6 formules goûter, 14 boissons |
| `/engagements` | **La consigne** : glisser le bocal sur le comptoir (pièce de 1 €, compteur), engagements, schéma d'approvisionnement |
| `/commandes` | Occasions, formulaire qui compose un message (aucun envoi), calendrier |
| `/journal`, `/journal/:slug` | 10 articles d'exemple, filtre par catégorie |
| `/galerie` | 20 illustrations, filtre, lightbox |
| `/faq` | 14 questions |
| `/contact` | Deux adresses, horaires à confirmer, horloge locale |
| `/mentions-legales`, `/confidentialite`, 404 | Pages légales et page « Il est 16h31, ce gâteau est parti » |

## Stack et bibliothèques

Vite 8 + TypeScript + Tailwind v4 (jetons et réinitialisation), CSS maison.
- **GSAP** (ScrollTrigger pour le cadran épinglé et l'atlas, SplitText pour les révélations par ligne, `quickTo` pour les boutons magnétiques). Les plugins sont gratuits.
- **Lenis** : défilement fluide, piloté par le ticker GSAP, coupé en mouvement réduit.
- **View Transitions API** : changement de page avec un balayage conique « aiguille d'horloge » (repli sans animation si non supporté).
- Polices **auto-hébergées** via Fontsource : Instrument Serif, Hanken Grotesk, Martian Mono.

Mouvement réduit (`prefers-reduced-motion`) : cadran fixé à 16:30 sans épinglage, atlas en grille, cartes qui se retournent par fondu, bocal rendu par un bouton, pas de Lenis ni de View Transitions.

## Routage et GitHub Pages

Routeur maison (History API) sous le base path `/P-TISSERIE-BOULANGERIE-SEIZE-HEURES-TRENTE-Rennes/`. `public/404.html` renvoie les liens profonds vers l'accueil avec `?p=/chemin`, qui est restauré avant le routeur (`index.html`).

## Lancer et vérifier

```bash
npm install
npm run dev          # développement
npm run typecheck    # tsc --noEmit
npm run build        # typecheck + build dans dist/
npx vite preview --port 4182 --strictPort
```

CI (`.github/workflows/ci.yml`) : typecheck, build, présence de `404.html` et `.nojekyll`, aucune URL absolue sans le base path.

## Données d'exemple (`src/data/`)

`products` (60), `creations` (16), `breads` (12), `drinks` (14), `gouter-formulas` (6), `posts` (10), `faq` (14), `gallery` (20), `events` (8), `roles` (6), `testimonials` (10), plus `site`, `hours` (avec drapeau `verified`) et `stats`. Chaque fichier commence par une note « données d'exemple ».

## À valider avec la maison

Horaires (rue Hoche : trois versions ; Jeanne-Chauveau : inconnus), téléphone de Jeanne-Chauveau (une seule source), adresse e-mail (aucune vérifiée), logo et couleurs, photos, carte et prix actuels, explication de l'absence de baguette, site web officiel, métro le plus proche.
