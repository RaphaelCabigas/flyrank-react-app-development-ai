import ColorSwatch from '../ColorSwatch/ColorSwatch.jsx'
import './palette-generator.scss'

function PaletteGenerator({ palette, moodName, onGenerate, onSave, saved }) {
  return (
    <div className="palette-generator">
      <p className="palette-generator__scheme">{palette.scheme}</p>
      <h2 className="palette-generator__mood">{moodName}</h2>

      <div className="palette-generator__swatches">
        {palette.colors.map((color, i) => (
          <ColorSwatch key={i} color={color} />
        ))}
      </div>

      <div className="palette-generator__actions">
        <button type="button" className="btn btn--primary" onClick={onGenerate}>
          Generate palette
        </button>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={onSave}
          disabled={saved}
        >
          {saved ? 'Saved to board' : 'Save to board'}
        </button>
      </div>
    </div>
  )
}

export default PaletteGenerator
