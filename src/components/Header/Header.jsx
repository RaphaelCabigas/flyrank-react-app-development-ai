import './header.scss'

function Header() {
  return (
    <header className="site-header">
      <span className="site-header__eyebrow">a generative color companion</span>
      <h1 className="site-header__title">Palette Poet</h1>
      <p className="site-header__subtitle">
        Every click pairs a harmonious color scheme with a mood, then paints it
        onto drifting generative shapes. Save the ones worth keeping.
      </p>
    </header>
  )
}

export default Header
