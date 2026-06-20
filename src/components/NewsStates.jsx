// src/components/NewsStates.jsx
//
// Shared loading / error / empty state UI for the News section.
// Kept minimal and consistent with the rest of the site — no spinners
// with heavy animation, no dramatic illustrations.

import { AlertCircle, Newspaper } from 'lucide-react'

export function NewsLoadingGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden animate-pulse"
          style={{ border: '1px solid #E5ECF8' }}
        >
          <div className="w-full aspect-[16/10]" style={{ background: '#EEF6FF' }} />
          <div className="p-6 space-y-3">
            <div className="h-3 w-24 rounded-full" style={{ background: '#EEF6FF' }} />
            <div className="h-4 w-full rounded-full" style={{ background: '#EEF6FF' }} />
            <div className="h-4 w-3/4 rounded-full" style={{ background: '#EEF6FF' }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export function NewsError({ message }) {
  return (
    <div className="flex flex-col items-center text-center py-20 px-6">
      <AlertCircle size={28} style={{ color: '#B45309' }} className="mb-4" />
      <h3 className="text-lg font-bold mb-2" style={{ color: '#0F2557' }}>
        Couldn't load articles
      </h3>
      <p className="text-sm max-w-sm" style={{ color: '#6B7280' }}>
        {message || 'Something went wrong while fetching news. Please refresh the page or try again shortly.'}
      </p>
    </div>
  )
}

export function NewsEmpty({ message = 'No articles have been published yet. Check back soon.' }) {
  return (
    <div className="flex flex-col items-center text-center py-20 px-6">
      <Newspaper size={28} style={{ color: '#9CA3AF' }} className="mb-4" />
      <h3 className="text-lg font-bold mb-2" style={{ color: '#0F2557' }}>
        Nothing here yet
      </h3>
      <p className="text-sm max-w-sm" style={{ color: '#6B7280' }}>
        {message}
      </p>
    </div>
  )
}
