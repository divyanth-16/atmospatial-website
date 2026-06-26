// src/components/FeaturedArticle.jsx
//
// The Featured Article block shown at the top of the News page.
// Not a fullscreen hero — a contained, professional split layout.

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

export default function FeaturedArticle({ article }) {
  if (!article) return null

  const { slug, title, shortDescription, category, featuredImage, publishDate } = article
  const imageUrl = featuredImage
    ? urlFor(featuredImage).width(960).fit('max').url()
    : null

  return (
    <Link
      to={`/news/${slug?.current}`}
      className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center rounded-2xl overflow-hidden p-2 md:p-3 transition-colors"
      style={{ border: '2px solid #E5ECF8' }}
    >
      {/* Image */}
      <div className="rounded-xl overflow-hidden aspect-[16/10]" style={{ background: '#EEF6FF' }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={featuredImage?.alt || title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xs" style={{ color: '#9CA3AF' }}>No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="py-2 pr-2 md:pr-4">
        <p
          className="text-s font-bold uppercase tracking-[0.2em] mb-4"
          style={{ color: '#C69214' }}
        >
          Featured Article
        </p>

        <div className="flex items-center gap-3 mb-4">
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

        <h2
          className="font-black leading-tight mb-4"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#0F2557' }}
        >
          {title}
        </h2>

        <p className="text-base leading-relaxed mb-6" style={{ color: '#374151' }}>
          {shortDescription}
        </p>

        <span
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-opacity group-hover:opacity-90"
          style={{ background: '#153E8A', color: '#ffffff' }}
        >
          Read Full Article <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  )
}
