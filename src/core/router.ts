import { $, BASE, reducedMotion } from './dom'
import { ScrollTrigger, enhance, leavePage, scrollToEl, scrollToTop } from './motion'
import { setActiveNav } from './layout'

export interface PageModule {
  title: string
  description: string
  render: (main: HTMLElement, params: Record<string, string>) => void | Promise<void>
  meta?: (params: Record<string, string>) => { title: string; description: string }
}

type Loader = () => Promise<PageModule>

const routes: Array<{ re: RegExp; keys: string[]; load: Loader }> = []

export function route(pattern: string, load: Loader): void {
  const keys: string[] = []
  const re = new RegExp(
    '^' +
      pattern.replace(/:([a-z]+)/g, (_m, k: string) => {
        keys.push(k)
        return '([^/]+)'
      }) +
      '/?$',
  )
  routes.push({ re, keys, load })
}

let notFound: Loader
export const setNotFound = (l: Loader) => (notFound = l)

const currentPath = (): string => location.pathname.replace(BASE, '').replace(/^\/|\/$/g, '')

function setMeta(title: string, description: string, path: string): void {
  document.title = title
  $<HTMLMetaElement>('meta[name=description]')?.setAttribute('content', description)
  $<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', title)
  $<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description)
  $<HTMLLinkElement>('link[rel=canonical]')?.setAttribute(
    'href',
    'https://ab-s0lution.github.io/P-TISSERIE-BOULANGERIE-SEIZE-HEURES-TRENTE-Rennes/' + (path ? path + '/' : ''),
  )
}

async function swap(path: string, hash: string, first: boolean): Promise<void> {
  let mod: PageModule
  let params: Record<string, string> = {}
  const hit = routes.find((r) => r.re.test(path))
  if (hit) {
    const m = path.match(hit.re)!
    hit.keys.forEach((k, i) => (params[k] = decodeURIComponent(m[i + 1])))
    mod = await hit.load()
  } else {
    mod = await notFound()
    params = {}
  }
  leavePage()
  const main = $('#main')!
  main.innerHTML = ''
  await mod.render(main, params)
  const meta = mod.meta?.(params) ?? { title: mod.title, description: mod.description }
  setMeta(meta.title, meta.description, hit ? path : '')
  setActiveNav(path)
  if (!first) scrollToTop()
  enhance(main)
  requestAnimationFrame(() => {
    ScrollTrigger.refresh()
    if (hash) {
      const t = $(hash)
      if (t) scrollToEl(t)
    }
  })
  if (!first) main.focus({ preventScroll: true })
}

export async function navigate(url: string, push = true): Promise<void> {
  const u = new URL(url, location.origin)
  const path = u.pathname.replace(BASE, '').replace(/^\/|\/$/g, '')
  if (push) history.pushState(null, '', u.pathname + u.hash)
  const doc = document as Document & { startViewTransition?: (cb: () => Promise<void>) => { finished: Promise<void> } }
  if (doc.startViewTransition && !reducedMotion()) {
    doc.startViewTransition(() => swap(path, u.hash, false))
  } else {
    await swap(path, u.hash, false)
  }
}

export function initRouter(): void {
  document.addEventListener('click', (e) => {
    const el = e.target as HTMLElement
    const top = el.closest<HTMLAnchorElement>('a[data-top]')
    if (top) {
      e.preventDefault()
      scrollToTop()
      return
    }
    const a = el.closest<HTMLAnchorElement>('a[data-link]')
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return
    const u = new URL(a.href)
    if (u.origin !== location.origin) return
    e.preventDefault()
    if (u.pathname === location.pathname && u.hash) {
      const t = $(u.hash)
      if (t) scrollToEl(t)
      return
    }
    void navigate(a.href)
  })
  window.addEventListener('popstate', () => void navigate(location.href, false))
  void swap(currentPath(), location.hash, true)
}
