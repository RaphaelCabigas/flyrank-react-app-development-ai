# Prompts used during development

This file logs the prompts given to Claude (Anthropic) while building Palette
Poet, in the order they were used.

1. **Initial assignment context** — supplied the existing Vite + React
   scaffold (default `create-vite` template files, `CLAUDE.md` conventions,
   `README.md`) and the capstone assignment brief: *"Build a similar React
   application independently using AI as a development assistant."*

2. **Clarifying the brief**
   > "Build a similar React application... You can use any technology you
   > feel comfortable with."

   Claude asked one clarifying question rather than guessing: what *kind* of
   app to build (portfolio / dashboard / content site / other).

3. **Direction**
   > "something creative"

   Claude picked a concrete concept on its own rather than asking again:
   a generative color-palette + mood-board tool ("Palette Poet"), matched to
   the project's existing purple/dark-mode aesthetic, and stated the plan
   before building.

4. **Build execution** (internal working prompts Claude used against itself
   while implementing, listed for transparency):
   - "Design a token system (color, type) for a dark, single-accent UI where
     the *generated* palette is the visual content, not the chrome."
   - "Write an HSL-based palette generator supporting analogous,
     complementary, triadic, and split-complementary color schemes."
   - "Generate a hue-aware 'mood name' word bank so warm hues read as
     amber/ember and cool hues read as velvet/glacial."
   - "Break the UI into Header / PaletteGenerator / ColorSwatch / BlobArt /
     Gallery components, following the project's existing PascalCase
     component / kebab-case class-name conventions from CLAUDE.md."
   - "Run `npm install`, `npm run lint`, and `npm run build` to verify the
     generated code actually compiles and lints clean before handing it
     off."

5. **Continuation**
   > "can you continue it?"

   Sent after a container reset wiped the in-progress files; Claude noticed
   the files were gone via `ls`/`find`, explained why, and rebuilt the full
   project from scratch in the same session.
