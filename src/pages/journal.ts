import { $, $$, esc, href, typo } from '../core/dom'
import { gsap } from '../core/motion'
import { pageHero } from '../core/ui'
import { photos } from '../data/photos'
import { posts } from '../data/posts'

export const title = 'Journal | 16h30, Seize Heures Trente, Rennes'
export const description = 'Le journal de 16h30 : créations, pains, engagements et coulisses. Articles d’exemple pour ce site de démonstration.'

export const fmtDate = (iso: string): string => new Date(iso + 'T12:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export function render(main: HTMLElement): void {
  const cats = ['Tout', ...Array.from(new Set(posts.map((p) => p.category)))]
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))
  main.innerHTML = typo(`
${pageHero({ title: 'Le journal', kicker: 'Actualités et coulisses', lead: 'Dix articles d’exemple sur les créations, les pains et les engagements de la maison. Rien ici n’a été publié par 16h30.', art: 'cake', seed: 1 })}
<section class="section section--tight">
  <div class="wrap">
    <div class="toolbar" role="group" aria-label="Catégories">${cats.map((c, i) => `<button class="chip" type="button" data-cat="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`).join('')}</div>
    <div class="posts" id="posts">${sorted
      .map(
        (p, i) => `<a class="post" data-link data-cat="${esc(p.category)}" href="${href('journal/' + p.slug)}" data-reveal>
        <figure class="post__photo"><img src="${photos[(i * 3 + 2) % photos.length].src}" alt="${esc(photos[(i * 3 + 2) % photos.length].alt)}" width="${photos[(i * 3 + 2) % photos.length].width}" height="${photos[(i * 3 + 2) % photos.length].height}" loading="lazy" decoding="async" /></figure>
        <div class="post__body"><span class="mono muted">Photo d’illustration · ${fmtDate(p.date)} · ${esc(p.category)} · ${p.minutes} min</span>
        <h3>${esc(p.title)}</h3><p style="margin:0">${esc(p.excerpt)}</p></div></a>`,
      )
      .join('')}</div>
  </div>
</section>`)

  const list = $('#posts', main)!
  $$('[data-cat]', main)
    .filter((b) => b.tagName === 'BUTTON')
    .forEach((b) =>
      b.addEventListener('click', () => {
        const c = b.dataset.cat
        $$('button[data-cat]', main).forEach((x) => x.setAttribute('aria-pressed', String(x === b)))
        $$<HTMLElement>('.post', list).forEach((a) => {
          const show = c === 'Tout' || a.dataset.cat === c
          a.hidden = !show
          if (show) gsap.fromTo(a, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', clearProps: 'transform' })
        })
      }),
    )
}
