import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, ExternalLinkIcon, SearchScopeIcon } from '../icons'
import Lightbox from './Lightbox'
import ResourceCover from './ResourceCover'

const cardClass =
  'group flex w-full flex-col gap-3 rounded-2xl border border-black/5 bg-white p-4 text-left transition-colors hover:border-black/15'

function CardBody({ item, typeTag, actionLabel, ActionIcon }) {
  return (
    <>
      <span className="text-sm font-medium text-neutral-500">{typeTag}</span>

      <ResourceCover item={item} typeTag={typeTag} />

      <h3 className="text-[20px] font-bold leading-snug tracking-[-0.02em] text-[#0A0A0A]">
        {item.title}
      </h3>

      <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-[#0A0A0A] group-hover:text-[#FF6A00]">
        {actionLabel}
        <ActionIcon width={16} height={16} strokeWidth={2.2} />
      </span>
    </>
  )
}

function ResourceCard({ item, typeTag }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const fileHref = item.fileUrl ? `${import.meta.env.BASE_URL}${item.fileUrl}` : null

  // Brochures open the file itself in a new tab — whole card, cover
  // included, and no form in between.
  if (item.category === 'brochures' && fileHref) {
    return (
      <a href={fileHref} target="_blank" rel="noopener noreferrer" className={cardClass}>
        <CardBody
          item={item}
          typeTag={typeTag}
          actionLabel="Open brochure"
          ActionIcon={ExternalLinkIcon}
        />
      </a>
    )
  }

  // Infographics open in a lightbox, with the download available there.
  if (item.category === 'infographics' && fileHref) {
    return (
      <>
        <button type="button" onClick={() => setLightboxOpen(true)} className={cardClass}>
          <CardBody
            item={item}
            typeTag={typeTag}
            actionLabel="View infographic"
            ActionIcon={SearchScopeIcon}
          />
        </button>

        {lightboxOpen && (
          <Lightbox
            src={fileHref}
            alt={`${item.title} — ${item.description}`}
            downloadName={item.fileUrl.split('/').pop()}
            caption={item.title}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </>
    )
  }

  return (
    <Link to={item.url} className={cardClass}>
      <CardBody item={item} typeTag={typeTag} actionLabel="Read the blog" ActionIcon={ArrowRightIcon} />
    </Link>
  )
}

export default ResourceCard
