// Mood names are picked from a hue-aware word bank so "Amber Hush" only
// shows up for warm palettes and "Static Bloom" for cooler, sharper ones.

const HUE_BANDS = [
  { max: 20, adjectives: ['Amber', 'Ember', 'Rust', 'Cinder', 'Molten'] },
  { max: 45, adjectives: ['Marigold', 'Honeyed', 'Sunburnt', 'Toasted'] },
  { max: 75, adjectives: ['Citrine', 'Static', 'Acid', 'Sparked'] },
  { max: 160, adjectives: ['Verdant', 'Mossy', 'Fernlit', 'Overgrown'] },
  { max: 200, adjectives: ['Tidal', 'Glacial', 'Frosted', 'Cyan-Bit'] },
  { max: 260, adjectives: ['Velvet', 'Midnight', 'Deepwater', 'Nocturne'] },
  { max: 320, adjectives: ['Orchid', 'Bruised', 'Twilight', 'Violet-Hour'] },
  { max: 361, adjectives: ['Rosewater', 'Blushed', 'Salt-Pink', 'Faded'] },
]

const NOUNS = [
  'Hush', 'Bloom', 'Drift', 'Signal', 'Static', 'Echo', 'Field', 'Dust',
  'Haze', 'Pulse', 'Fold', 'Current', 'Bloomfall', 'Undertow', 'Glare',
]

function bandFor(hue) {
  return HUE_BANDS.find((b) => hue <= b.max) ?? HUE_BANDS[HUE_BANDS.length - 1]
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function generateMoodName(baseHue) {
  const band = bandFor(baseHue)
  return `${pick(band.adjectives)} ${pick(NOUNS)}`
}
