function ChipRow({ label, items = [] }) {
  return (
    <section className="px-5 py-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        {label && <p className="text-sm font-medium text-neutral-500">{label}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-sm font-medium text-neutral-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChipRow
