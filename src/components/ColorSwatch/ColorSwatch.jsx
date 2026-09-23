import { useState } from 'react'
import './color-swatch.scss'

function ColorSwatch({ color }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color.hex)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      // Clipboard access can fail in restricted contexts; fail silently.
    }
  }

  return (
    <button
      type="button"
      className="color-swatch"
      style={{ '--swatch-color': color.hex }}
      onClick={handleCopy}
      aria-label={`Copy ${color.hex} to clipboard`}
    >
      <span className="color-swatch__chip" />
      <span className="color-swatch__hex">{copied ? 'Copied' : color.hex}</span>
    </button>
  )
}

export default ColorSwatch
