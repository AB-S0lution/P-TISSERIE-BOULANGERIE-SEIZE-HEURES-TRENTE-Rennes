import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource-variable/hanken-grotesk'
import '@fontsource-variable/martian-mono'
import './style.css'
import { $ } from './core/dom'
import { initMenu, renderShell } from './core/layout'
import { initScroll } from './core/motion'
import { initRouter, route, setNotFound } from './core/router'

renderShell($('#app')!)
initScroll()
initMenu()

route('', () => import('./pages/home'))
route('maison', () => import('./pages/maison'))
route('patisserie', () => import('./pages/patisserie'))
route('boulangerie', () => import('./pages/boulangerie'))
route('salon-de-the', () => import('./pages/salon'))
route('engagements', () => import('./pages/engagements'))
route('commandes', () => import('./pages/commandes'))
route('journal', () => import('./pages/journal'))
route('journal/:slug', () => import('./pages/article'))
route('galerie', () => import('./pages/galerie'))
route('faq', () => import('./pages/faq'))
route('contact', () => import('./pages/contact'))
route('mentions-legales', () => import('./pages/legal'))
route('confidentialite', () => import('./pages/confidentialite'))
setNotFound(() => import('./pages/notfound'))

initRouter()
