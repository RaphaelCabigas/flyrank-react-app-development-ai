import { useState } from 'react'
import Header from '../../components/Header/Header.jsx'
import PaletteGenerator from '../../components/PaletteGenerator/PaletteGenerator.jsx'
import BlobArt from '../../components/BlobArt/BlobArt.jsx'
import Gallery from '../../components/Gallery/Gallery.jsx'
import { generatePalette } from '../../utils/colorUtils.js'
import { generateMoodName } from '../../utils/wordBank.js'
import './home.scss'

function makeEntry() {
  const palette = generatePalette()
  const moodName = generateMoodName(palette.colors[0].h)
  return { palette, moodName }
}

function Home() {
  const [current, setCurrent] = useState(makeEntry)
  const [board, setBoard] = useState([])

  const handleGenerate = () => setCurrent(makeEntry())

  const handleSave = () => {
    setBoard((prev) => [
      { id: crypto.randomUUID(), ...current },
      ...prev,
    ])
  }

  const handleLoad = (entry) => {
    setCurrent({ palette: entry.palette, moodName: entry.moodName })
  }

  const handleRemove = (id) => {
    setBoard((prev) => prev.filter((entry) => entry.id !== id))
  }

  const isSaved = board.some(
    (entry) => entry.moodName === current.moodName,
  )

  return (
    <main className="home">
      <Header />

      <section className="home__stage">
        <BlobArt palette={current.palette} />
        <PaletteGenerator
          palette={current.palette}
          moodName={current.moodName}
          onGenerate={handleGenerate}
          onSave={handleSave}
          saved={isSaved}
        />
      </section>

      <section className="home__board">
        <h3 className="home__board-title">Mood board</h3>
        <Gallery entries={board} onLoad={handleLoad} onRemove={handleRemove} />
      </section>
    </main>
  )
}

export default Home
