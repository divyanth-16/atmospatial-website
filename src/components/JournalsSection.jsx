// src/components/JournalsSection.jsx

import { motion } from 'framer-motion'
import JournalRow from './JournalRow'
import EmptyState from './EmptyState'

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function JournalsSection({ journals }) {
  return (
    <section aria-labelledby="journals-heading">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        variants={fadeIn}
        className="mb-0"
      >
        <h2
          id="journals-heading"
          className="text-2xl font-bold mb-1"
          style={{ color: '#0F2557' }}
        >
          Journals
        </h2>
        {/* <p className="text-sm" style={{ color: '#6B7280' }}>
          Peer-reviewed journals covering meteorology, climatology, GIS, and earth observation.
        </p> */}
      </motion.div>

      {journals.length === 0 ? (
        <EmptyState />
      ) : (
        <div>
          {journals.map((journal) => (
            <JournalRow key={journal._id} journal={journal} />
          ))}
        </div>
      )}
    </section>
  )
}
