// Core color math + palette generation.
// Palettes are built in HSL so we can reason about harmony (analogous,
// complementary, triadic, split-complementary) instead of picking raw hexes.

const SCHEMES = ['analogous', 'complementary', 'triadic', 'split-complementary']

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function hslToHex(h, s, l) {
  s /= 100
  l /= 100
  const k = (n) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  const toHex = (x) =>
    Math.round(255 * x)
      .toString(16)
      .padStart(2, '0')
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`
}

function offsets(scheme) {
  switch (scheme) {
    case 'complementary':
      return [0, 180, 15, 195, -15]
    case 'triadic':
      return [0, 120, 240, 10, -10]
    case 'split-complementary':
      return [0, 150, 210, 20, -20]
    case 'analogous':
    default:
      return [0, 30, 60, -30, -60]
  }
}

function wrap(h) {
  return ((h % 360) + 360) % 360
}

export function generatePalette() {
  const scheme = SCHEMES[randomInt(0, SCHEMES.length - 1)]
  const baseHue = randomInt(0, 359)
  const baseSat = randomInt(55, 85)
  const baseLight = randomInt(45, 62)

  return {
    scheme,
    colors: offsets(scheme).map((offset, i) => {
      const h = wrap(baseHue + offset)
      const s = Math.max(30, Math.min(95, baseSat + randomInt(-8, 8)))
      const l = Math.max(20, Math.min(80, baseLight + i * randomInt(-6, 6)))
      return { hex: hslToHex(h, s, l), h, s, l }
    }),
  }
}
