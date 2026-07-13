// src/components/BooksSection.jsx

import { motion } from 'framer-motion'
import BookRow from './BookRow'
import EmptyState from './EmptyState'

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function BooksSection({ books }) {
  return (
    <section aria-labelledby="books-heading">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        variants={fadeIn}
        className="mb-0"
      >
        <h2
          id="books-heading"
          className="text-2xl font-bold"
          style={{ color: '#0F2557' }}
        >
          Books
        </h2>
        {/* <p className="text-sm" style={{ color: '#6B7280' }}>
          Reference books on atmospheric science, remote sensing, and related disciplines.
        </p> */}
      </motion.div>

      {books.length === 0 ? (
        <EmptyState />
      ) : (
        <div>
          {books.map((book) => (
            <BookRow key={book._id} book={book} />
          ))}
        </div>
      )}
    </section>
  )
}
