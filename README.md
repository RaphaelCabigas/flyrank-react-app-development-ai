# Palette Poet

A small generative-design toy built with React + Vite for the Flyrank Frontend
Capstone. Click "Generate palette" and it produces a harmonious 5-color scheme
(analogous, complementary, triadic, or split-complementary), pairs it with a
hue-aware "mood name" (e.g. *Velvet Hush*, *Citrine Static*), and paints the
colors onto slow-drifting generative blob shapes. Palettes you like can be
pinned to a mood board.

## Tech Stack

- React 19
- Vite 8
- JavaScript (ES6+)
- SCSS (Sass)

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build
npm run lint      # eslint
npm run preview   # preview the production build
```

## Project Structure

```
src/
├── components/
│   ├── Header/            # page title + intro copy
│   ├── PaletteGenerator/  # mood name, swatch row, action buttons
│   ├── ColorSwatch/       # single hex chip, click to copy
│   ├── BlobArt/           # SVG generative art driven by the palette
│   └── Gallery/           # saved-palette mood board
├── pages/
│   └── Home/              # composes the above, owns app state
├── utils/
│   ├── colorUtils.js      # HSL-based harmonious palette generator
│   └── wordBank.js        # hue-aware mood name generator
└── styles/
    ├── _variables.scss    # design tokens (color, type)
    └── main.scss          # global reset + base styles
```

## Design Notes

- One dark, quiet UI chrome (`#14121b` canvas, single emerald accent
  `#2ee6a8`) so the *generated* palette — not the interface — is always the
  most saturated thing on screen.
- Mood names are chosen from a hue-banded word list so warm palettes read as
  "Amber"/"Ember" and cool ones read as "Velvet"/"Glacial", tying the copy to
  the actual color math instead of being random flavor text.
- Palettes and the mood board live in component state only (no backend/
  localStorage) — refreshing clears the board, which was an intentional
  scope cut for a capstone-sized project.

See `PROMPTS.md` and `AI-ASSISTANCE.md` for how AI was used during
development, and what was changed by hand afterward.
