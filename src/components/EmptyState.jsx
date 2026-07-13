// src/components/EmptyState.jsx

import { SearchX } from 'lucide-react'

export default function EmptyState({
  title   = 'No resources found.',
  message = 'Try changing your search keywords or clearing the category filter.',
}) {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6">
      <SearchX size={28} className="mb-4" style={{ color: '#9CA3AF' }} aria-hidden="true" />
      <h3 className="font-bold text-base mb-1" style={{ color: '#0F2557' }}>
        {title}
      </h3>
      <p className="text-sm max-w-xs" style={{ color: '#6B7280' }}>
        {message}
      </p>
    </div>
  )
}
