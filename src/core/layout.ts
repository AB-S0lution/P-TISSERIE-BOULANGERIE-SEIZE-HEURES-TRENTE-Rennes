import { $, $$, href, typo } from './dom'
import { lenis } from './motion'

export interface NavItem { path: string; label: string; hint: string }

// Toutes les pages du plan du site (§9).
export const NAV: NavItem[] = [
  { path: '', label: 'Accueil', hint: 'La vitrine de 16h30' },
  { path: 'maison', label: 'La maison', hint: 'Histoire, valeurs, équipe' },
  { path: 'patisserie', label: 'La pâtisserie', hint: 'Atlas des créations' },
  { path: 'boulangerie', label: 'La boulangerie', hint: 'Les pains de Jeanne-Chauveau' },
  { path: 'salon-de-the', label: 'Le salon de thé', hint: 'Rue Hoche' },
  { path: 'engagements', label: 'Engagements', hint: 'La consigne à 1 €' },
  { path: 'commandes', label: 'Commandes et occasions', hint: 'Entremets, gâteaux de fête' },
  { path: 'journal', label: 'Journal', hint: 'Actualités de la maison' },
  { path: 'galerie', label: 'Galerie', hint: 'Illustrations' },
  { path: 'faq', label: 'Questions fréquentes', hint: 'FAQ' },
  { path: 'contact', label: 'Nos deux adresses', hint: 'Contact et accès' },
]

const SHORT: Record<string, string> = { patisserie: 'Pâtisserie', boulangerie: 'Boulangerie', 'salon-de-the': 'Salon de thé', contact: 'Nos adresses' }
const MAIN_NAV = ['patisserie', 'boulangerie', 'salon-de-the', 'engagements', 'journal', 'contact']

export const wordmark = (cls = ''): string => `
<svg class="wordmark ${cls}" viewBox="0 0 150 44" role="img" aria-label="16h30">
  <text x="0" y="36" font-family="'Instrument Serif', serif" font-size="46" letter-spacing="-1" fill="currentColor">16<tspan font-style="italic" fill="var(--amber)">h</tspan>30</text>
</svg>`

export function renderShell(app: HTMLElement): void {
  const links = MAIN_NAV.map((p) => {
    const n = NAV.find((x) => x.path === p)!
    const short = SHORT[p] ?? n.label
    return `<a href="${href(n.path)}" data-link data-path="${n.path}">${short}</a>`
  }).join('')

  const menuItems = NAV.map(
    (n) => `<li><a href="${href(n.path)}" data-link data-path="${n.path}"><span class="menu__label">${n.label}</span><span class="menu__hint">${n.hint}</span></a></li>`,
  ).join('')

  app.innerHTML = typo(`
<div class="progress" aria-hidden="true"></div>
<header class="site-header" id="top">
  <a class="brand" href="${href('')}" data-link data-path="" aria-label="16h30, accueil">${wordmark()}</a>
  <nav class="main-nav" aria-label="Navigation principale">${links}</nav>
  <div class="header-actions">
    <a class="btn btn--amber btn--sm" href="${href('commandes')}" data-link data-path="commandes" data-magnetic>Commander pour 16h30</a>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu"><span class="menu-btn__bars" aria-hidden="true"></span><span class="menu-btn__txt">Menu</span></button>
  </div>
</header>
<div class="menu" id="menu" role="dialog" aria-modal="true" aria-label="Menu du site" hidden>
  <div class="menu__inner">
    <ul class="menu__list">${menuItems}</ul>
    <p class="menu__foot">3 rue Hoche et 2 passage Jeanne-Chauveau, Rennes<br /><a href="tel:+33299633765">02 99 63 37 65</a></p>
  </div>
</div>
<main id="main" tabindex="-1"></main>
${footer()}
`)
}

function footer(): string {
  return `
<footer class="site-footer">
  <div class="wrap footer__grid">
    <div class="footer__brand">
      ${wordmark('wordmark--xl')}
      <p>Pâtisserie et boulangerie rennaises, faites maison de A à Z. Fondées en 2018 par Marion Juhel.</p>
      <p class="demo-note">Site de démonstration : textes, prix et données d'exemple signalés comme tels. Pas de commande en ligne.</p>
    </div>
    <div>
      <h2 class="footer__h">Rue Hoche</h2>
      <address>3 rue Hoche<br />35000 Rennes<br /><a href="tel:+33299633765">02 99 63 37 65</a></address>
      <p class="footer__small">Pâtisserie et salon de thé</p>
    </div>
    <div>
      <h2 class="footer__h">Passage Jeanne-Chauveau</h2>
      <address>2 passage Jeanne-Chauveau<br />35000 Rennes, Hôtel-Dieu</address>
      <p class="footer__small">Boulangerie et fournil</p>
    </div>
    <div>
      <h2 class="footer__h">La maison</h2>
      <ul class="footer__links">
        <li><a href="${href('maison')}" data-link data-path="maison">Notre histoire</a></li>
        <li><a href="${href('engagements')}" data-link data-path="engagements">Engagements</a></li>
        <li><a href="${href('journal')}" data-link data-path="journal">Journal</a></li>
        <li><a href="${href('galerie')}" data-link data-path="galerie">Galerie</a></li>
        <li><a href="${href('faq')}" data-link data-path="faq">FAQ</a></li>
      </ul>
    </div>
    <div>
      <h2 class="footer__h">Suivre</h2>
      <ul class="footer__links">
        <li><a href="https://www.instagram.com/patisserie_16h30/" target="_blank" rel="noopener">Instagram @patisserie_16h30</a></li>
        <li><a href="https://www.facebook.com/patisserie16h30" target="_blank" rel="noopener">Facebook</a></li>
        <li><a href="${href('mentions-legales')}" data-link data-path="mentions-legales">Mentions légales</a></li>
        <li><a href="${href('confidentialite')}" data-link data-path="confidentialite">Confidentialité</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer__bottom"><span>Illustrations originales en SVG. Aucune photo ni logo de la maison. Palette proposée, non officielle.</span><a href="#top" data-top>Haut de page</a></div>
</footer>`
}

export function setActiveNav(path: string): void {
  $$('a[data-path]').forEach((a) => {
    const on = a.dataset.path === path || (path.startsWith('journal/') && a.dataset.path === 'journal')
    if (on) a.setAttribute('aria-current', 'page')
    else a.removeAttribute('aria-current')
  })
}

export function initMenu(): void {
  const btn = $<HTMLButtonElement>('.menu-btn')!
  const menu = $('#menu')!
  const main = $('#main')!
  const footer = $('.site-footer')!
  const set = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open))
    document.documentElement.classList.toggle('menu-open', open)
    if (open) {
      menu.hidden = false
      requestAnimationFrame(() => menu.classList.add('is-open'))
      lenis?.stop()
      main.setAttribute('inert', '')
      footer.setAttribute('inert', '')
      $<HTMLElement>('.menu__list a', menu)?.focus()
    } else {
      menu.classList.remove('is-open')
      window.setTimeout(() => (menu.hidden = true), 380)
      lenis?.start()
      main.removeAttribute('inert')
      footer.removeAttribute('inert')
      btn.focus()
    }
  }
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'))
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') set(false)
  })
  menu.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) set(false)
  })
}
