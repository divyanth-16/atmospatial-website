// src/components/BookRow.jsx
//
// A single book displayed as a clean horizontal row, library-catalogue style.
// No card shadows, no oversized buttons — just well-spaced, readable text.

import { motion } from 'framer-motion'
import { FileText, Download, ExternalLink } from 'lucide-react'

export default function BookRow({ book }) {
  const { title, author, category, description, pdfUrl, externalLink, publishedAt } = book

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

          {/* Title */}
          <h3
            className="font-bold text-base leading-snug mb-0.5 transition-colors group-hover:opacity-90"
            style={{ color: '#0F2557' }}
          >
            {title} - <span className="text-sm font-medium" style={{ color: '#6B7280' }}>{author}</span>
          </h3>
        </div>

        {/* Right: action buttons */}
        <div className="flex flex-row sm:flex-row gap-2 shrink-0 sm:min-w-[120px] sm:items-end">
          {pdfUrl && (
            <>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View PDF of ${title}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                style={{ border: '1px solid #153E8A', color: '#153E8A', background: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#153E8A'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#153E8A' }}
              >
                <FileText size={12} aria-hidden="true" /> View PDF
              </a>
              
            </>
          )}

          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`External link for ${title}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              style={{ border: '1px solid #D7E2F3', color: '#374151', background: 'transparent' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#153E8A'; e.currentTarget.style.color = '#153E8A' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#D7E2F3'; e.currentTarget.style.color = '#374151' }}
            >
              <ExternalLink size={12} aria-hidden="true" /> Read More
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
