// Illustrations originales en SVG (aucune photo). Toutes décoratives : le texte voisin porte le sens.

export type ArtKind =
  | 'brioche' | 'kouign' | 'cake' | 'cookie' | 'financier' | 'sable' | 'saintho'
  | 'entremets' | 'boule' | 'tresse' | 'couronne' | 'croissant' | 'glace' | 'macaron'
  | 'tasse' | 'bocal' | 'flan' | 'babka'

interface Pal { base: string; dark: string; light: string; accent: string }

// Teintes d'ingrédients (beurre, caramel, cacao, sarrasin, citron, pistache, fruits rouges).
const PALS: Pal[] = [
  { base: '#E6B15A', dark: '#B5762C', light: '#F5D893', accent: '#8A4E28' },
  { base: '#C9803F', dark: '#8A4E28', light: '#E7B27A', accent: '#F6EEE1' },
  { base: '#6B3F2E', dark: '#3E2219', light: '#A06A4E', accent: '#E6B15A' },
  { base: '#EBD35A', dark: '#C6A92E', light: '#F7EAA0', accent: '#2E4A3C' },
  { base: '#8DA27F', dark: '#4F6B58', light: '#C3D1B5', accent: '#F6EEE1' },
  { base: '#C96A7A', dark: '#8F3B4D', light: '#E8A3AE', accent: '#F6EEE1' },
  { base: '#D9C7A3', dark: '#A89570', light: '#EFE3C8', accent: '#6B3F2E' },
]

export function pal(seed: number): Pal {
  return PALS[Math.abs(seed) % PALS.length]
}

const shadow = '<ellipse cx="100" cy="176" rx="64" ry="9" fill="#22191A" opacity=".13"/>'

function body(kind: ArtKind, c: Pal): string {
  switch (kind) {
    case 'brioche':
      return `<path d="M30 130c0-42 30-78 70-78s70 36 70 78c0 14-22 26-70 26s-70-12-70-26z" fill="${c.base}"/>
      <g fill="none" stroke="${c.dark}" stroke-width="3" stroke-linecap="round" opacity=".55"><path d="M48 118c14-28 38-44 52-44"/><path d="M62 134c20-30 46-46 62-46"/><path d="M84 142c20-24 44-40 64-40"/><path d="M40 100c10-20 26-34 40-40"/></g>
      <path d="M52 92c16-22 40-32 62-28" fill="none" stroke="${c.light}" stroke-width="6" stroke-linecap="round" opacity=".8"/>`
    case 'kouign':
      return `<rect x="38" y="52" width="124" height="112" rx="18" fill="${c.base}" transform="rotate(-4 100 108)"/>
      <g stroke="${c.dark}" stroke-width="4" stroke-linecap="round" opacity=".55" transform="rotate(-4 100 108)"><path d="M54 70l92 80"/><path d="M96 62l60 52"/><path d="M52 112l50 44"/><path d="M146 70l-92 80"/><path d="M104 62l-60 52"/><path d="M148 112l-50 44"/></g>
      <path d="M52 66c30-8 70-8 98 0" stroke="${c.light}" stroke-width="7" stroke-linecap="round" fill="none" opacity=".8" transform="rotate(-4 100 108)"/>
      <circle cx="68" cy="86" r="3.5" fill="${c.accent}" opacity=".8"/><circle cx="132" cy="140" r="3.5" fill="${c.accent}" opacity=".8"/>`
    case 'cake':
      return `<path d="M26 112c0-24 10-34 28-34h92c18 0 28 10 28 34v36c0 8-6 14-14 14H40c-8 0-14-6-14-14z" fill="${c.base}"/>
      <path d="M26 108c8-24 28-34 52-30h44c24-4 44 6 52 30-30-14-62-12-74-4-12-8-44-10-74 4z" fill="${c.dark}" opacity=".5"/>
      <path d="M34 100c16-14 40-12 66-10 28-2 52-4 66 10" stroke="${c.light}" stroke-width="7" fill="none" stroke-linecap="round" opacity=".9"/>
      <g fill="${c.accent}" opacity=".85"><circle cx="70" cy="128" r="3.4"/><circle cx="104" cy="138" r="3.4"/><circle cx="138" cy="126" r="3.4"/><circle cx="88" cy="118" r="2.6"/></g>`
    case 'cookie':
      return `<path d="M100 44c32 0 62 20 62 54 0 36-26 62-62 62S38 134 38 98c0-34 30-54 62-54z" fill="${c.base}"/>
      <path d="M62 70c14-14 40-20 58-12" stroke="${c.light}" stroke-width="7" stroke-linecap="round" fill="none" opacity=".7"/>
      <g fill="${c.dark}"><circle cx="76" cy="92" r="7"/><circle cx="114" cy="78" r="6"/><circle cx="126" cy="116" r="8"/><circle cx="88" cy="128" r="6"/><circle cx="104" cy="104" r="5"/><circle cx="64" cy="114" r="4.5"/></g>
      <g fill="${c.accent}" opacity=".9"><path d="M94 64l8 4-4 8-8-4z"/><path d="M130 94l8 2-2 8-8-2z"/><path d="M70 136l8 2-3 8-7-3z"/></g>`
    case 'financier':
      return `<path d="M36 90l16-26h96l16 26v54c0 8-6 14-14 14H50c-8 0-14-6-14-14z" fill="${c.base}"/>
      <path d="M36 90l16-26h96l16 26z" fill="${c.light}" opacity=".85"/>
      <g stroke="${c.dark}" stroke-width="3" opacity=".4" stroke-linecap="round"><path d="M64 104v44"/><path d="M92 104v44"/><path d="M120 104v44"/><path d="M148 104v44"/></g>
      <path d="M56 78h88" stroke="${c.dark}" stroke-width="3" opacity=".35" stroke-linecap="round"/>`
    case 'sable':
      return `<circle cx="100" cy="124" r="58" fill="${c.base}"/>
      <circle cx="100" cy="124" r="58" fill="none" stroke="${c.dark}" stroke-width="3" opacity=".3" stroke-dasharray="3 7"/>
      <path d="M52 118a48 48 0 0 1 96 0z" fill="${c.light}"/>
      <path d="M64 108c12-26 60-26 72 0" stroke="#fff" stroke-width="5" fill="none" opacity=".45" stroke-linecap="round"/>
      <circle cx="100" cy="64" r="7" fill="${c.accent}"/><path d="M100 57c2-8 8-10 12-8" stroke="${c.dark}" stroke-width="3" fill="none" stroke-linecap="round"/>`
    case 'saintho':
      return `<circle cx="100" cy="112" r="62" fill="${c.base}"/>
      <circle cx="100" cy="112" r="40" fill="${c.light}"/>
      <g fill="${c.dark}"><circle cx="100" cy="52" r="15"/><circle cx="143" cy="70" r="15"/><circle cx="154" cy="116" r="15"/><circle cx="130" cy="156" r="15"/><circle cx="70" cy="156" r="15"/><circle cx="46" cy="116" r="15"/><circle cx="57" cy="70" r="15"/></g>
      <g fill="${c.light}" opacity=".7"><circle cx="96" cy="47" r="4.5"/><circle cx="139" cy="65" r="4.5"/><circle cx="150" cy="111" r="4.5"/></g>
      <path d="M84 112c0-18 32-18 32 0s-32 18-32 0z" fill="${c.base}"/>`
    case 'entremets':
      return `<path d="M56 62h88a10 10 0 0 1 10 10v78a10 10 0 0 1-10 10H56a10 10 0 0 1-10-10V72a10 10 0 0 1 10-10z" fill="${c.base}"/>
      <rect x="46" y="94" width="108" height="14" fill="${c.light}" opacity=".9"/><rect x="46" y="124" width="108" height="14" fill="${c.dark}" opacity=".6"/>
      <path d="M46 72a10 10 0 0 1 10-10h88a10 10 0 0 1 10 10v10c-14 10-22-4-34 4s-24-6-36 2-24-8-38 2z" fill="${c.accent}" opacity=".95"/>
      <circle cx="100" cy="50" r="9" fill="${c.dark}"/><path d="M100 41c2-8 9-9 13-6" stroke="${c.light}" stroke-width="3" fill="none" stroke-linecap="round"/>`
    case 'boule':
      return `<ellipse cx="100" cy="112" rx="70" ry="54" fill="${c.base}"/>
      <ellipse cx="100" cy="104" rx="70" ry="48" fill="${c.light}" opacity=".35"/>
      <g stroke="${c.dark}" stroke-width="5" stroke-linecap="round" fill="none" opacity=".7"><path d="M64 86c14 10 22 28 24 48"/><path d="M96 78c14 10 22 28 24 52"/><path d="M128 84c12 8 20 24 22 40"/></g>
      <g fill="#fff" opacity=".6"><circle cx="58" cy="120" r="2"/><circle cx="144" cy="132" r="2"/><circle cx="108" cy="146" r="2"/><circle cx="82" cy="150" r="2"/></g>`
    case 'tresse':
      return `<g fill="${c.base}"><ellipse cx="100" cy="68" rx="46" ry="19"/><ellipse cx="100" cy="94" rx="52" ry="19"/><ellipse cx="100" cy="120" rx="56" ry="19"/><ellipse cx="100" cy="146" rx="52" ry="19"/></g>
      <g stroke="${c.dark}" stroke-width="4" stroke-linecap="round" fill="none" opacity=".6"><path d="M62 62c24 16 52 20 76 12"/><path d="M58 90c28 14 56 16 84 6"/><path d="M52 118c30 12 62 14 94 4"/><path d="M58 142c28 10 52 12 80 4"/></g>
      <ellipse cx="100" cy="62" rx="26" ry="6" fill="${c.light}" opacity=".7"/>`
    case 'couronne':
      return `<circle cx="100" cy="104" r="64" fill="${c.base}"/>
      <circle cx="100" cy="104" r="26" fill="#F6EEE1" opacity=".92"/>
      <circle cx="100" cy="104" r="26" fill="none" stroke="${c.dark}" stroke-width="3" opacity=".4"/>
      <g stroke="${c.dark}" stroke-width="4" stroke-linecap="round" opacity=".55"><path d="M100 40v22"/><path d="M155 72l-17 13"/><path d="M155 136l-17-13"/><path d="M100 168v-22"/><path d="M45 136l17-13"/><path d="M45 72l17 13"/></g>
      <g fill="${c.accent}" opacity=".8"><circle cx="124" cy="62" r="3"/><circle cx="146" cy="108" r="3"/><circle cx="78" cy="146" r="3"/><circle cx="60" cy="90" r="3"/></g>`
    case 'croissant':
      return `<g fill="${c.base}"><ellipse cx="100" cy="96" rx="32" ry="40"/><ellipse cx="66" cy="104" rx="22" ry="34" transform="rotate(-24 66 104)"/><ellipse cx="134" cy="104" rx="22" ry="34" transform="rotate(24 134 104)"/><ellipse cx="40" cy="126" rx="15" ry="26" transform="rotate(-52 40 126)"/><ellipse cx="160" cy="126" rx="15" ry="26" transform="rotate(52 160 126)"/></g>
      <g fill="none" stroke="${c.dark}" stroke-width="3.5" stroke-linecap="round" opacity=".5"><path d="M82 66c-6 22-6 46 0 64"/><path d="M118 66c6 22 6 46 0 64"/><path d="M52 82c-8 18-8 40-2 56"/><path d="M148 82c8 18 8 40 2 56"/><path d="M28 112c-4 12-2 24 4 34"/><path d="M172 112c4 12 2 24-4 34"/></g>
      <path d="M84 62c10-8 22-8 32 0" stroke="${c.light}" stroke-width="7" stroke-linecap="round" fill="none" opacity=".85"/>`
    case 'glace':
      return `<rect x="58" y="64" width="84" height="100" rx="12" fill="#F6EEE1" opacity=".5" stroke="${c.dark}" stroke-width="3"/>
      <rect x="52" y="52" width="96" height="18" rx="6" fill="${c.dark}"/>
      <path d="M64 100c0-26 72-26 72 0v52c0 8-6 12-14 12H78c-8 0-14-4-14-12z" fill="${c.base}"/>
      <circle cx="100" cy="86" r="22" fill="${c.light}"/><path d="M82 82c6-12 26-14 34-4" stroke="#fff" stroke-width="4" fill="none" opacity=".6" stroke-linecap="round"/>`
    case 'macaron':
      return `<ellipse cx="100" cy="84" rx="56" ry="26" fill="${c.base}"/>
      <rect x="50" y="94" width="100" height="16" rx="8" fill="${c.light}"/>
      <path d="M44 118a56 26 0 0 0 112 0v-6H44z" fill="${c.base}"/>
      <path d="M56 78c14-12 52-14 76-2" stroke="#fff" stroke-width="5" opacity=".4" fill="none" stroke-linecap="round"/>`
    case 'tasse':
      return `<path d="M52 82h84v40a38 38 0 0 1-38 38h-8a38 38 0 0 1-38-38z" fill="#F6EEE1" stroke="${c.dark}" stroke-width="4"/>
      <path d="M136 94h12a14 14 0 0 1 0 28h-16" fill="none" stroke="${c.dark}" stroke-width="5"/>
      <ellipse cx="94" cy="84" rx="42" ry="7" fill="${c.base}"/>
      <ellipse cx="94" cy="170" rx="62" ry="8" fill="${c.dark}" opacity=".35"/>
      <g stroke="${c.dark}" stroke-width="4" stroke-linecap="round" fill="none" opacity=".55"><path d="M76 64c-8-8 8-14 0-22"/><path d="M98 64c-8-8 8-14 0-22"/><path d="M118 64c-8-8 8-14 0-22"/></g>`
    case 'bocal':
      return `<rect x="56" y="52" width="88" height="14" rx="5" fill="${c.dark}"/>
      <path d="M62 68h76v80a18 18 0 0 1-18 18H80a18 18 0 0 1-18-18z" fill="#F6EEE1" opacity=".55" stroke="${c.dark}" stroke-width="3"/>
      <path d="M68 108h64v40a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12z" fill="${c.base}"/>
      <rect x="68" y="108" width="64" height="12" fill="${c.light}" opacity=".9"/>
      <path d="M72 78v44" stroke="#fff" stroke-width="4" opacity=".7" stroke-linecap="round"/>`
    case 'flan':
      return `<path d="M34 108h132l-10 46a12 12 0 0 1-12 10H56a12 12 0 0 1-12-10z" fill="${c.dark}"/>
      <ellipse cx="100" cy="108" rx="66" ry="20" fill="${c.base}"/>
      <ellipse cx="100" cy="104" rx="50" ry="12" fill="${c.light}"/>
      <path d="M72 100c10-6 46-6 56 0" stroke="${c.accent}" stroke-width="4" stroke-linecap="round" fill="none" opacity=".8"/>`
    case 'babka':
      return `<rect x="46" y="48" width="108" height="116" rx="22" fill="${c.base}"/>
      <g fill="none" stroke="${c.dark}" stroke-width="9" stroke-linecap="round" opacity=".65"><path d="M60 68c26 14 54 -10 80 6"/><path d="M60 94c28 16 54-8 80 8"/><path d="M60 120c26 14 54-8 80 8"/><path d="M60 146c24 10 52-6 80 6"/></g>
      <path d="M56 58c24-10 64-10 88 0" stroke="${c.light}" stroke-width="6" stroke-linecap="round" fill="none" opacity=".8"/>`
  }
}

export function pastry(kind: ArtKind, seed = 0): string {
  const c = pal(seed)
  return `<svg class="art" viewBox="0 0 200 200" aria-hidden="true" focusable="false">${shadow}${body(kind, c)}</svg>`
}

/**
 * Même dessin, servi en <img> (data URI) : une image est peinte depuis un bitmap en cache,
 * alors que des dizaines de SVG en ligne étaient repeints à chaque image au défilement (cartes produit au téléphone).
 */
export function pastryImg(kind: ArtKind, seed = 0): string {
  const c = pal(seed)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">${shadow}${body(kind, c)}</svg>`
  return `<img class="art" src="data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, ' '))}" alt="" width="200" height="200" decoding="async" />`
}

/** Four-panel postcard sky for the atlas : dégradé déterministe par graine. */
export function postcardSky(seed: number): string {
  const skies = [
    'linear-gradient(160deg,#F5D893,#E39A3B)',
    'linear-gradient(160deg,#C3D1B5,#4F6B58)',
    'linear-gradient(160deg,#EFE3C8,#C9803F)',
    'linear-gradient(160deg,#F7EAA0,#B5762C)',
    'linear-gradient(160deg,#E8A3AE,#8F3B4D)',
    'linear-gradient(160deg,#A9B4BD,#5B6670)',
  ]
  return skies[Math.abs(seed) % skies.length]
}

/** Le bocal consigné du 1 €, plus grand, avec couvercle. */
export function jarBig(): string {
  return `<svg class="art art--jar" viewBox="0 0 200 240" aria-hidden="true" focusable="false">
  <ellipse cx="100" cy="226" rx="62" ry="8" fill="#22191A" opacity=".16"/>
  <rect x="52" y="22" width="96" height="22" rx="7" fill="#2E4A3C"/>
  <rect x="58" y="30" width="84" height="4" rx="2" fill="#F6EEE1" opacity=".35"/>
  <path d="M58 46h84v138a30 30 0 0 1-30 30H88a30 30 0 0 1-30-30z" fill="#F6EEE1" fill-opacity=".55" stroke="#2E4A3C" stroke-width="4"/>
  <path d="M64 120h72v66a22 22 0 0 1-22 22H86a22 22 0 0 1-22-22z" fill="#E6B15A"/>
  <path d="M64 120h72v14H64z" fill="#F5D893"/>
  <circle cx="100" cy="112" r="14" fill="#8A4E28"/><path d="M100 100c3-10 12-12 18-8" stroke="#2E4A3C" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M70 62v100" stroke="#fff" stroke-width="5" opacity=".65" stroke-linecap="round"/>
</svg>`
}

/** Le comptoir (zone de dépôt). */
export function counterArt(): string {
  return `<svg class="art art--counter" viewBox="0 0 320 160" aria-hidden="true" focusable="false">
  <rect x="0" y="92" width="320" height="68" rx="6" fill="#2E4A3C"/>
  <rect x="0" y="84" width="320" height="14" rx="5" fill="#A8643A"/>
  <rect x="14" y="108" width="292" height="3" fill="#F6EEE1" opacity=".2"/>
  <g opacity=".95"><rect x="236" y="38" width="46" height="46" rx="8" fill="#F6EEE1" opacity=".18" stroke="#F6EEE1" stroke-opacity=".45" stroke-width="2"/><circle cx="259" cy="56" r="9" fill="#E39A3B"/></g>
  <g fill="#F6EEE1" opacity=".5"><rect x="26" y="44" width="52" height="40" rx="6"/><rect x="88" y="58" width="40" height="26" rx="6"/></g>
</svg>`
}

/** Le fournil vu de la boutique (rue/passage Jeanne-Chauveau) : illustration du lieu, pas une photo. */
export function bakeryArt(): string {
  return `<svg class="art art--bakery" viewBox="0 0 520 340" aria-hidden="true" focusable="false">
  <rect width="520" height="340" fill="#F1E3C9"/>
  <rect x="24" y="24" width="472" height="292" rx="20" fill="#2E4A3C"/>
  <rect x="44" y="44" width="432" height="252" rx="12" fill="#22191A"/>
  <path d="M96 296v-120a70 70 0 0 1 140 0v120z" fill="#6B3F2E"/>
  <path d="M116 296v-114a50 50 0 0 1 100 0v114z" fill="#E39A3B"/>
  <path d="M130 296v-100a36 36 0 0 1 72 0v100z" fill="#F5D893" opacity=".85"/>
  <g fill="#22191A"><rect x="140" y="236" width="52" height="8" rx="4"/><rect x="146" y="262" width="40" height="8" rx="4"/></g>
  <g><rect x="270" y="86" width="190" height="8" rx="3" fill="#A8643A"/><rect x="270" y="146" width="190" height="8" rx="3" fill="#A8643A"/><rect x="270" y="206" width="190" height="8" rx="3" fill="#A8643A"/></g>
  <g fill="#E6B15A"><ellipse cx="300" cy="78" rx="22" ry="12"/><ellipse cx="350" cy="78" rx="22" ry="12"/><ellipse cx="400" cy="78" rx="22" ry="12"/><ellipse cx="440" cy="78" rx="14" ry="10"/></g>
  <g fill="#B5762C"><ellipse cx="302" cy="138" rx="26" ry="12"/><ellipse cx="358" cy="138" rx="26" ry="12"/><ellipse cx="414" cy="138" rx="26" ry="12"/></g>
  <g fill="#D9C7A3"><rect x="282" y="176" width="40" height="30" rx="14"/><rect x="332" y="176" width="40" height="30" rx="14"/><rect x="382" y="176" width="40" height="30" rx="14"/><rect x="432" y="176" width="22" height="30" rx="10"/></g>
  <g stroke="#F6EEE1" stroke-opacity=".35" stroke-width="3"><path d="M270 236h190"/><path d="M270 262h190"/><path d="M270 286h190"/></g>
  <path d="M60 60h400" stroke="#F6EEE1" stroke-opacity=".12" stroke-width="2"/>
  <rect x="24" y="24" width="472" height="292" rx="20" fill="none" stroke="#F6EEE1" stroke-opacity=".25" stroke-width="3"/>
</svg>`
}
