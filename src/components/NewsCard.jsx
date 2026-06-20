// src/components/NewsCard.jsx
//
// A single article card for the News grid. White background, thin border,
// soft shadow, subtle hover lift — matches the Contact page's restrained
// visual language. No heavy gradients, no dramatic motion.

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { urlFor } from '../../lib/imageUrlBuilder'

function formatDate(dateString) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function NewsCard({ article }) {
  const { slug, title, shortDescription, category, featuredImage, publishDate } = article

  const imageUrl = featuredImage
    ? urlFor(featuredImage).width(640).height(380).fit('crop').url()
    : null

  return (
    <Link
      to={`/news/${slug?.current}`}
      className="group flex flex-col rounded-xl overflow-hidden bg-white transition-all duration-300"
      style={{
        border: '1px solid #E5ECF8',
        boxShadow: '0 1px 3px rgba(15,37,87,0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(15,37,87,0.10)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(15,37,87,0.06)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Image */}
      <div className="w-full aspect-[16/10] overflow-hidden" style={{ background: '#EEF6FF' }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={featuredImage?.alt || title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xs" style={{ color: '#9CA3AF' }}>No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(21,62,138,0.08)', color: '#153E8A' }}
          >
            {category}
          </span>
          <span className="text-xs" style={{ color: '#9CA3AF' }}>
            {formatDate(publishDate)}
          </span>
        </div>

        <h3
          className="text-lg font-bold leading-snug mb-2.5"
          style={{ color: '#0F2557' }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-5 flex-1"
          style={{ color: '#6B7280' }}
        >
          {shortDescription}
        </p>

        <span
          className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto"
          style={{ color: '#153E8A' }}
        >
          Read More
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}
