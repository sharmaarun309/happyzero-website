// Cover art for a resource card. Order of preference:
//   1. item.image, when the resource ships its own artwork
//   2. the infographic SVG itself, so the card is image-first
//   3. a generated cover built from the title in design-system colours
//
// Generated covers alternate between a near-black and a cream base so a
// grid of them reads as a set rather than a repeat.
const covers = {
  blogs: {
    base: 'bg-[#0A0A0A]',
    title: 'text-[#FBF9F6]',
    meta: 'text-white/50',
  },
  brochures: {
    base: 'bg-[#FBF9F6] ring-1 ring-inset ring-black/10',
    title: 'text-[#0A0A0A]',
    meta: 'text-neutral-500',
  },
  'case-studies': {
    base: 'bg-[#0A0A0A]',
    title: 'text-[#FBF9F6]',
    meta: 'text-white/50',
  },
  infographics: {
    base: 'bg-[#FBF9F6] ring-1 ring-inset ring-black/10',
    title: 'text-[#0A0A0A]',
    meta: 'text-neutral-500',
  },
}

function ResourceCover({ item, typeTag, className = '' }) {
  const isInfographic = item.category === 'infographics'
  const src = item.image || (isInfographic ? `${import.meta.env.BASE_URL}${item.fileUrl}` : null)

  if (src) {
    return (
      <div
        className={`overflow-hidden rounded-2xl bg-[#FBF9F6] ring-1 ring-inset ring-black/10 ${className}`}
      >
        <img
          src={src}
          alt={item.title}
          loading="lazy"
          className="aspect-[4/3] w-full object-contain"
        />
      </div>
    )
  }

  const theme = covers[item.category] || covers.blogs

  return (
    <div
      aria-hidden="true"
      className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl p-6 ${theme.base} ${className}`}
    >
      <span className="block h-0.5 w-10 bg-[#FF6A00]" />

      <p
        className={`text-[22px] font-bold leading-[1.15] tracking-[-0.02em] ${theme.title}`}
      >
        {item.title}
      </p>

      <p className={`text-sm font-medium ${theme.meta}`}>
        {typeTag} &middot; {item.date}
      </p>

      <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF6A00]/15" />
    </div>
  )
}

export default ResourceCover
