import { useState } from 'react'

/**
 * Background photo layer for a hero box. Fills its positioned parent, adds a
 * scrim so overlaid text stays legible, and falls back to fallbackIcon
 * (in the photo's place) if the file is missing. `position` is the CSS
 * object-position for the crop (e.g. 'center 10%').
 */
function PhotoSlot({
  src,
  alt,
  className = '',
  fallbackIcon = null,
  fallbackAlign = 'left',
  scrim = 'bottom',
  position = 'center',
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    if (!fallbackIcon) return null
    return (
      <div
        className={`pointer-events-none absolute inset-0 flex items-end p-8 md:p-12 ${
          fallbackAlign === 'right' ? 'justify-end' : 'justify-start'
        }`}
      >
        {fallbackIcon}
      </div>
    )
  }

  return (
    <>
      <img
        src={`${import.meta.env.BASE_URL}${src}`}
        alt={alt}
        onError={() => setFailed(true)}
        style={{ objectPosition: position }}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
      />
      <div
        aria-hidden="true"
        className={
          scrim === 'left'
            ? 'pointer-events-none absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-black/60 to-transparent'
            : 'pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent'
        }
      />
    </>
  )
}

export default PhotoSlot
