// src/components/LibrarySearch.jsx

import { Search } from 'lucide-react'

export default function LibrarySearch({ value, onChange }) {
  return (
    <div className="relative max-w-xl">
      <Search
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: '#9CA3AF' }}
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search books or journals..."
        aria-label="Search library resources"
        className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm outline-none transition-colors bg-white"
        style={{ border: '1px solid #D7E2F3', color: '#0F2557' }}
        onFocus={(e)  => (e.target.style.borderColor = '#153E8A')}
        onBlur={(e)   => (e.target.style.borderColor = '#D7E2F3')}
      />
    </div>
  )
}
