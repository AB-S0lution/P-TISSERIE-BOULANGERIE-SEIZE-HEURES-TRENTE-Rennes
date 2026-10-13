import { pastry } from '../core/art'
import { esc, href, typo } from '../core/dom'
import { btn, tile } from '../core/ui'
import { posts } from '../data/posts'
import { fmtDate } from './journal'

export const title = 'Article | 16h30, Seize Heures Trente, Rennes'
export const description = 'Article d’exemple du journal de 16h30.'

export function meta(params: Record<string, string>): { title: string; description: string } {
  const post = posts.find((p) => p.slug === params.slug)
  return post
    ? { title: `${post.title} | 16h30, Seize Heures Trente`, description: post.excerpt }
    : { title: 'Article introuvable | 16h30', description }
}

export function render(main: HTMLElement, params: Record<string, string>): void {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) {
    main.innerHTML = typo(`<section class="nf"><div><h1 class="h-xl">Article introuvable.</h1><p class="lead" style="margin:1rem auto 1.6rem">Cet article n’existe pas dans le journal d’exemple.</p>${btn('Retour au journal', 'journal', 'btn--amber')}</div></section>`)
    return
  }
  const next = posts[(posts.indexOf(post) + 1) % posts.length]
  main.innerHTML = typo(`
<article>
  <header class="phero">
    <div class="wrap phero__grid">
      <div>
        <p class="mono muted"><a href="${href('journal')}" data-link>&larr; Journal</a></p>
        <h1 class="h-lg" style="margin-top:1rem" data-split>${esc(post.title)}</h1>
        <p class="mono muted" style="margin-top:1rem">${fmtDate(post.date)} · ${esc(post.category)} · ${post.minutes} min <span class="sample-flag">article d’exemple</span></p>
      </div>
      <div class="phero__art" data-reveal style="background:${tile(post.seed + 3)};border-radius:18px;padding:1.2rem">${pastry(post.kind, post.seed)}</div>
    </div>
  </header>
  <section class="section section--tight"><div class="wrap prose">
    <p class="lead">${esc(post.excerpt)}</p>
    ${post.body.map((b) => `<p data-reveal>${esc(b)}</p>`).join('')}
  </div></section>
  <section class="section section--tight"><div class="wrap"><hr class="divider" /><div class="cta-row" style="margin-top:2rem;justify-content:space-between"><a class="btn btn--ghost" href="${href('journal')}" data-link>Tous les articles</a><a class="btn btn--amber" href="${href('journal/' + next.slug)}" data-link>Suivant : ${esc(next.title.slice(0, 40))}${next.title.length > 40 ? '…' : ''}</a></div></div></section>
</article>`)
}
