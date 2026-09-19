import { useEffect, useRef } from 'react'
import { CloseIcon, DocumentIcon } from '../icons'

// Full-screen viewer for an infographic. Escape and a click on the backdrop
// both close it, and focus returns to whatever opened it (the card) on the
// way out. No form, no gate — the download is a plain link to the file.
function Lightbox({ src, alt, downloadName, caption, onClose }) {
  const closeRef = useRef(null)
  const restoreRef = useRef(null)

  useEffect(() => {
    restoreRef.current = document.activeElement
    closeRef.current?.focus()

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      restoreRef.current?.focus?.()
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onMouseDown={(event) => {
        // Backdrop only — a drag that starts on the panel must not close it.
        if (event.target === event.currentTarget) onClose()
      }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#0A0A0A]/85 p-4 md:p-8"
    >
      <div className="my-auto w-full max-w-3xl">
        <div className="flex items-start justify-between gap-4">
          <p className="text-base font-semibold leading-snug text-[#FBF9F6]">{caption}</p>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#FBF9F6] transition-colors hover:bg-white/20"
          >
            <CloseIcon width={18} height={18} strokeWidth={2} />
          </button>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl bg-[#FBF9F6]">
          <img src={src} alt={alt} className="w-full" />
        </div>

        <div className="mt-4">
          <a
            href={src}
            download={downloadName}
            className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
          >
            <DocumentIcon width={16} height={16} strokeWidth={1.8} />
            Download
          </a>
        </div>
      </div>
    </div>
  )
}

export default Lightbox
