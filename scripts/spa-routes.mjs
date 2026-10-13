// GitHub Pages ne connaît pas les routes de l'application monopage : sans fichier réel,
// /patisserie renvoie un HTTP 404 (servi par 404.html). Après `vite build`, on copie donc
// dist/index.html dans dist/<route>/index.html pour chaque route statique de src/main.ts
// et chaque article du journal (src/data/posts.ts). 404.html reste en place.
import { readFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const index = resolve(dist, 'index.html')
if (!existsSync(index)) throw new Error('dist/index.html introuvable : lancer vite build avant.')

const main = readFileSync(resolve(root, 'src/main.ts'), 'utf8')
const routes = [...main.matchAll(/route\('([^']+)'/g)].map((m) => m[1]).filter((r) => r && !r.includes(':'))
const posts = readFileSync(resolve(root, 'src/data/posts.ts'), 'utf8')
const articles = [...posts.matchAll(/slug: '([^']+)'/g)].map((m) => 'journal/' + m[1])

for (const r of [...routes, ...articles]) {
  const dir = resolve(dist, r)
  mkdirSync(dir, { recursive: true })
  copyFileSync(index, resolve(dir, 'index.html'))
}
console.log(`spa-routes : ${routes.length + articles.length} pages copiées dans dist/`)
