# 16h30 (Seize Heures Trente), Rennes (démo)

- **Concept** : « L'heure du goûter », un cadran qui avance jusqu'à 16:30 (GSAP ScrollTrigger épinglé, `src/pages/home.ts`). Autres signatures : la consigne à 1 € glissable (`engagements.ts`), l'atlas horizontal à cartes postales (`patisserie.ts`).
- **Palette PROPOSÉE (pas la marque)** : papier #F6EEE1, encre #22191A, ambre #E39A3B, citron #EBD35A (décor seulement), épicéa #2E4A3C, noisette #A8643A (texte : #8A4E28), ardoise #5B6670. Polices : Instrument Serif, Hanken Grotesk, Martian Mono (auto-hébergées).
- **Source de vérité** : `PLAN.md`. Nommer seulement Marion Juhel. Ne pas afficher Le Fooding, Écotable, France Inter, Pur Beurre 2024 ni « ancienne ingénieure ». Pas d'horaires présentés comme certains (3 versions pour la rue Hoche, aucune pour Jeanne-Chauveau) ; pas d'e-mail, de site ni de commande en ligne.
- **Routage** : SPA History API (`src/core/router.ts`), routes dans `src/main.ts`, pages en import dynamique `src/pages/*.ts` qui exportent `title`, `description`, `render` (et `meta` pour l'article). `public/404.html` redirige vers `?p=`, restauré dans `index.html`.
- **Mouvement** : classe `motion-on` sur `<html>` (script inline) active les états initiaux ; absente en `prefers-reduced-motion`. Nettoyage à la sortie de page : `onLeave`, `withContext`, `leavePage` (`src/core/motion.ts`). Pas de `transition: all`, pas de tiret cadratin dans les textes.
- **Typographie FR** : passer le HTML injecté par `typo()` (`src/core/dom.ts`) pour les espaces insécables. Attention : un heredoc shell peut convertir les `\u....` en vrais caractères.
- **Art** : SVG original (`src/core/art.ts`) ; aucune photo ni logo de la boutique.
- **Données** : `src/data/*.ts`, toujours marquées « exemple » sauf faits sourcés (`real`, `priceReal`, `verified`).
- **Lancer / vérifier** : `npm run dev` ; `npm run typecheck && npm run build` ; `npx vite preview --port 4182 --strictPort` (base `/P-TISSERIE-BOULANGERIE-SEIZE-HEURES-TRENTE-Rennes/`).
- **Git** : ne jamais committer ni pousser sans demande.
