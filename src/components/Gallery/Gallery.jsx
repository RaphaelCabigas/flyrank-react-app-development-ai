import './gallery.scss'

function Gallery({ entries, onLoad, onRemove }) {
  if (entries.length === 0) {
    return (
      <div className="gallery gallery--empty">
        <p>Your mood board is empty. Generate a palette and save it here.</p>
      </div>
    )
  }

  return (
    <div className="gallery">
      {entries.map((entry) => (
        <div key={entry.id} className="gallery__card">
          <button
            type="button"
            className="gallery__strip"
            onClick={() => onLoad(entry)}
            aria-label={`Load ${entry.moodName} palette`}
          >
            {entry.palette.colors.map((color, i) => (
              <span
                key={i}
                className="gallery__chip"
                style={{ background: color.hex }}
              />
            ))}
          </button>
          <div className="gallery__meta">
            <span className="gallery__name">{entry.moodName}</span>
            <button
              type="button"
              className="gallery__remove"
              onClick={() => onRemove(entry.id)}
              aria-label={`Remove ${entry.moodName}`}
            >
              &times;
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery
