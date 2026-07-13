// src/components/JournalRow.jsx
//
// A single journal row in the library list.

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function JournalRow({ journal }) {
  const { title, publisher, category, description, websiteLink } = journal

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div
        className="flex flex-col sm:flex-row sm:items-start gap-4 py-5 px-4 rounded-lg cursor-default transition-colors duration-200 group"
        style={{ borderBottom: '1px solid #E5ECF8' }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#EEF6FF')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        {/* Left: text block */}
        <div className="flex-1 min-w-0">
          {/* Category badge */}
          {/* <div className="mb-1.5">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(21,62,138,0.08)', color: '#153E8A' }}
            >
              {category}
            </span>
          </div> */}

          {/* Journal name */}
          <h3
            className="font-bold text-base leading-snug mb-0.5 transition-colors group-hover:text-blue-800"
            style={{ color: '#0F2557' }}
          >
            {title} - <span className="text-sm font-medium" style={{ color: '#6B7280' }}>{publisher}</span>
          </h3>

          {/* Publisher */}
          {/* <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
            {publisher}
          </p> */}

          {/* Description */}
          {/* <p
            className="text-sm leading-relaxed line-clamp-2"
            style={{ color: '#374151' }}
          >
            {description}
          </p> */}
        </div>

        {/* Right: action */}
        <div className="shrink-0 sm:min-w-[120px] sm:flex sm:justify-end sm:items-start">
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title} journal website`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              style={{ border: '1px solid #153E8A', color: '#153E8A', background: 'transparent' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#153E8A'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#153E8A' }}
            >
              <ExternalLink size={12} aria-hidden="true" /> Visit Journal
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
