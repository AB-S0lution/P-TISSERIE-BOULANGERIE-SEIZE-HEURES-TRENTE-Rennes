import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://ab-s0lution.github.io/P-TISSERIE-BOULANGERIE-SEIZE-HEURES-TRENTE-Rennes/
// Les routes de l'application reçoivent chacune un vrai index.html après le build : scripts/spa-routes.mjs.
export default defineConfig({
  base: '/P-TISSERIE-BOULANGERIE-SEIZE-HEURES-TRENTE-Rennes/',
  plugins: [tailwindcss()],
})
