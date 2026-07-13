// src/pages/Library.jsx
//
// Route: /library
// Fetches all books and journals from Sanity, then filters client-side
// based on search text, type (all/books/journals) and category.

import { useState, useMemo } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'

import { useBooks }    from '../../lib/useBooks'
import { useJournals } from '../../lib/useJournals'

import LibraryHero     from '../components/LibraryHero'
import LibrarySearch   from '../components/LibrarySearch'
import LibraryFilters  from '../components/LibraryFilters'
import BooksSection    from '../components/BooksSection'
import JournalsSection from '../components/JournalsSection'
import EmptyState      from '../components/EmptyState'
import LoadingSkeleton from '../components/LoadingSkeleton'

/* ─── Helpers ─── */

function normalise(str = '') {
  return str.toLowerCase()
}

function matchesSearch(item, q) {
  if (!q) return true
  const needle = normalise(q)
  return (
    normalise(item.title).includes(needle) ||
    normalise(item.author || item.publisher || '').includes(needle) ||
    normalise(item.category).includes(needle) ||
    normalise(item.description).includes(needle)
  )
}

/* ─── Error banner ─── */

function ErrorBanner({ message, onRetry }) {
  return (
    <div className="flex items-start gap-3 px-4 py-3 rounded-lg mb-6" style={{ background: '#FEF3C7', border: '1px solid #F59E0B' }}>
      <AlertCircle size={16} className="shrink-0 mt-0.5" style={{ color: '#B45309' }} />
      <div className="flex-1">
        <p className="text-sm font-semibold" style={{ color: '#92400E' }}>
          {message}
        </p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-1 text-xs font-semibold shrink-0"
          style={{ color: '#92400E' }}
          aria-label="Retry loading"
        >
          <RefreshCw size={12} /> Retry
        </button>
      )}
    </div>
  )
}

/* ─── Page ─── */

export default function Library() {
  const [search,   setSearch]   = useState('')
  const [type,     setType]     = useState('all')      // 'all' | 'books' | 'journals'

  const { data: books,    loading: booksLoading,    error: booksError,    retry: retryBooks    } = useBooks()
  const { data: journals, loading: journalsLoading, error: journalsError, retry: retryJournals } = useJournals()

  const loading = booksLoading || journalsLoading

  const filteredBooks = useMemo(() => {
    if (type === 'journals') return []
    return books.filter(
      (b) => matchesSearch(b, search)
    )
  }, [books, search, type])

  const filteredJournals = useMemo(() => {
    if (type === 'books') return []
    return journals.filter(
      (j) => matchesSearch(j, search)
    )
  }, [journals, search, type])

  const totalVisible    = filteredBooks.length + filteredJournals.length
  const noResults       = !loading && totalVisible === 0
  const hasSearchActive = search.trim().length > 0 

  return (
    <div style={{ background: '#ffffff', color: '#0F2557' }}>

      {/* Hero */}
      <LibraryHero />

      {/* Controls */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto space-y-4 flex-row">
          <LibrarySearch value={search} onChange={setSearch} />
          <LibraryFilters
            activeType={type}
            onTypeChange={setType}
          />
        </div>
      </section>

   

      {/* Content */}
      <main className="px-6 py-6">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Error banners */}
          {booksError && (
            <ErrorBanner
              message="Couldn't load books. Please try again."
              onRetry={retryBooks}
            />
          )}
          {journalsError && (
            <ErrorBanner
              message="Couldn't load journals. Please try again."
              onRetry={retryJournals}
            />
          )}

          {/* Loading skeletons */}
          {loading && (
            <>
              <div>
                <div className="h-6 w-24 rounded mb-6 animate-pulse" style={{ background: '#EEF6FF' }} />
                <LoadingSkeleton rows={4} />
              </div>
              <div>
                <div className="h-6 w-24 rounded mb-6 animate-pulse" style={{ background: '#EEF6FF' }} />
                <LoadingSkeleton rows={4} />
              </div>
            </>
          )}

          {/* Global empty state (no results after filtering) */}
          {noResults && hasSearchActive && (
            <EmptyState
              title="No resources found."
              message="Try changing your search keywords or clearing the category filter."
            />
          )}

          {/* Global empty state (nothing in Sanity yet) */}
          {noResults && !hasSearchActive && !booksError && !journalsError && (
            <EmptyState
              title="Library is empty."
              message="Resources will appear here once they are added."
            />
          )}

          {/* Journals */}
          {!loading && (type === 'all' || type === 'journals') && filteredJournals.length > 0 && (
            <JournalsSection journals={filteredJournals} />
          )}

          {/* Books */}
          {!loading && (type === 'all' || type === 'books') && filteredBooks.length > 0 && (
            <BooksSection books={filteredBooks} />
          )}

        </div>
      </main>

    </div>
  )
}
