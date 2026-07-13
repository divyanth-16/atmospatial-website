// src/components/LibraryFilters.jsx

const TYPE_FILTERS = [
  { label: 'All',      value: 'all'      },
  { label: 'Books',    value: 'books'    },
  { label: 'Journals', value: 'journals' },
]


export default function LibraryFilters({
  activeType,
  onTypeChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Type tabs */}
      <div
        className="inline-flex rounded-lg overflow-hidden"
        style={{ border: '1px solid #D7E2F3' }}
        role="group"
        aria-label="Filter by type"
      >
        {TYPE_FILTERS.map((f) => {
          const active = activeType === f.value
          return (
            <button
              key={f.value}
              onClick={() => onTypeChange(f.value)}
              aria-pressed={active}
              className="px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              style={{
                background: active ? '#153E8A' : '#ffffff',
                color:      active ? '#ffffff' : '#374151',
              }}
            >
              {f.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
