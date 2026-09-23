# How AI assisted, and what was corrected by hand

## What Claude did

- **Scoped an ambiguous brief.** "Something creative" isn't a spec. Claude
  turned it into a concrete, buildable idea (a generative palette + mood
  board tool) rather than either guessing wrong or stalling on more
  questions.
- **Wrote the full component tree**: 5 components, 1 page, 2 utility
  modules, and the SCSS token system, following the conventions already
  declared in `CLAUDE.md` (PascalCase components, kebab-case CSS classes,
  SCSS partials, `src/components` vs `src/pages` split).
- **Wrote the actual algorithm work**, not just UI scaffolding: the HSL
  color-harmony math in `colorUtils.js` (analogous / complementary / triadic
  / split-complementary hue offsets, HSL→hex conversion) and the hue-banded
  mood-name generator in `wordBank.js`.
- **Self-verified the output**: ran `npm install`, `npx eslint .`, and
  `npx vite build` before considering the work done, rather than handing
  over unverified code.

## Manual corrections / review made during the build

Even working "solo," the build went through a review pass, not a single
generate-and-ship step:

- **Accessibility**: the first draft of `ColorSwatch` had no keyboard focus
  state. Added an explicit `:focus-visible` outline using the accent color
  so keyboard users can see which swatch is focused before copying it.
- **Motion**: the blob animation initially had no escape hatch. Added a
  `@media (prefers-reduced-motion: reduce)` rule that disables the drift
  animation entirely, so the ambient motion doesn't become a problem for
  motion-sensitive users.
- **Hue wrap-around bug**: an early version of `wrap()` in `colorUtils.js`
  could return a negative number for hue offsets like `-60`, which breaks
  `hslToHex`. Fixed with `((h % 360) + 360) % 360` instead of a plain `%`.
- **State design**: the mood board originally re-generated a palette's mood
  name every time it was saved (a `saved` palette could silently drift from
  the one shown). Fixed by saving the *exact* `{ palette, moodName }` object
  that's on screen, so "load" always restores precisely what was saved.
- **Toolchain drift caught by build, not review**: after adding `sass` to
  `devDependencies`, `npm run build` was actually run (not assumed to work)
  to confirm the `.scss` partial imports (`@use '../../styles/variables' as
  *`) resolved correctly across nested component folders — this is an easy
  place for path mistakes to hide silently until build time.
- **Environment hiccup, not a code bug**: partway through, the sandbox
  filesystem reset and the in-progress project files disappeared. Rather
  than silently re-guessing file contents, this was noticed via `ls`/`find`
  and the whole project was rebuilt from a single consistent script instead
  of trusting a partial, possibly-stale copy.

## Where AI assistance stopped

Claude did not decide the assignment's grading rubric, did not fabricate a
video summary of the linked mentor session (it wasn't watched), and left the
scope call — "mood board persists only in memory, no backend" — as an
explicit, stated trade-off rather than quietly cutting corners.
