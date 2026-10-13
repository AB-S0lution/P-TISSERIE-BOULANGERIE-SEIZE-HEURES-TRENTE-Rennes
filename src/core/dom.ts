export const BASE: string = import.meta.env.BASE_URL

export const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel)
export const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel))

export function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/** Lien interne : préfixe le chemin avec le base path (GitHub Pages). */
export function href(path: string): string {
  if (/^(https?:|tel:|mailto:|#)/.test(path)) return path
  return BASE + path.replace(/^\//, '')
}

/**
 * Typographie française dans le texte d'un fragment HTML :
 * fine insécable avant ; ! ?, insécable avant : et dans les guillemets « ».
 * Les balises et attributs ne sont pas touchés.
 */
export function typo(html: string): string {
  const NNBSP = String.fromCharCode(0x202f)
  const NBSP = String.fromCharCode(0xa0)
  return html
    .split(/(<[^>]+>)/)
    .map((part, i) => {
      if (i % 2 === 1) return part
      return part
        .replace(/ ([;!?])/g, NNBSP + '$1')
        .replace(/([^\s&;])([?!])/g, '$1' + NNBSP + '$2')
        .replace(/ :/g, NBSP + ':')
        .replace(/«\s?/g, '«' + NBSP)
        .replace(/\s?»/g, NBSP + '»')
        .replace(/(\d) (€|h\b|km|%|g\b|cl)/g, '$1' + NBSP + '$2')
    })
    .join('')
}

export function eur(n: number): string {
  const s = Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ',')
  return s + String.fromCharCode(0xa0) + '€'
}

export function slugify(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export const reducedMotion = (): boolean => window.matchMedia('(prefers-reduced-motion: reduce)').matches
