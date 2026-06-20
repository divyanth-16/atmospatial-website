// src/pages/Article.jsx
//
// Route: /news/:slug
// Full article view: featured image, metadata, rich text content,
// related articles, and a back-to-news link.

import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PortableText } from '@portabletext/react'
import { ArrowLeft } from 'lucide-react'
import { useArticleBySlug } from '../../lib/useArticles'
import { urlFor } from "../../lib/imageUrlBuilder";
import NewsCard from '../components/NewsCard'
import { NewsError } from '../components/NewsStates'

function formatDate(dateString) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// Custom rendering for rich text blocks/images coming from Sanity's
// Portable Text content field.
const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <img
          src={urlFor(value).width(900).url()}
          alt={value.alt || ''}
          className="w-full rounded-xl my-8"
          loading="lazy"
        />
      )
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#0F2557' }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-8 mb-3" style={{ color: '#0F2557' }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="pl-5 my-6 text-lg italic"
        style={{ borderLeft: '3px solid #C69214', color: '#374151' }}
      >
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-relaxed mb-5" style={{ color: '#374151' }}>
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#153E8A', textDecoration: 'underline' }}
      >
        {children}
      </a>
    ),
  },
}

export default function Article() {
  const { slug } = useParams()
  const { article, related, loading, error } = useArticleBySlug(slug)

  if (loading) {
    return (
      <div className="pt-36 pb-24 px-6 max-w-3xl mx-auto animate-pulse">
        <div className="h-4 w-32 rounded-full mb-6" style={{ background: '#EEF6FF' }} />
        <div className="h-10 w-full rounded-lg mb-3" style={{ background: '#EEF6FF' }} />
        <div className="h-10 w-2/3 rounded-lg mb-8" style={{ background: '#EEF6FF' }} />
        <div className="w-full aspect-[16/9] rounded-xl mb-10" style={{ background: '#EEF6FF' }} />
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 w-full rounded-full" style={{ background: '#EEF6FF' }} />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-36">
        <NewsError message={error.message} />
      </div>
    )
  }

  // Article genuinely doesn't exist — send to the news list rather than
  // showing a dead end.
  if (!article) {
    return <Navigate to="/news" replace />
  }

  const { title, shortDescription, category, featuredImage, author, publishDate, content, seoTitle, seoDescription } = article
  const imageUrl = featuredImage ? urlFor(featuredImage).width(1200).height(675).fit('crop').url() : null

  return (
    <div style={{ background: '#ffffff', color: '#0F2557' }}>
      {/* Lightweight SEO — works without a Helmet dependency.
          If your project already uses react-helmet-async or similar,
          swap this for that instead. */}
      <SeoHead title={seoTitle || title} description={seoDescription || shortDescription} />

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold mb-8 transition-opacity hover:opacity-70"
              style={{ color: '#153E8A' }}
            >
              <ArrowLeft size={15} /> Back to News
            </Link>

            <div className="flex items-center gap-3 mb-5">
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

            <h1
              className="font-black leading-tight mb-5"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', color: '#0F2557' }}
            >
              {title}
            </h1>

            <p className="text-sm mb-8" style={{ color: '#9CA3AF' }}>
              By {author}
            </p>
          </motion.div>

          {imageUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl overflow-hidden mb-10"
            >
              <img
                src={imageUrl}
                alt={featuredImage?.alt || title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {Array.isArray(content) && content.length > 0 ? (
              <PortableText value={content} components={portableTextComponents} />
            ) : (
              <p className="text-base" style={{ color: '#6B7280' }}>
                {shortDescription}
              </p>
            )}
          </motion.div>
        </div>
      </article>

      {/* ── Related articles ── */}
      {related.length > 0 && (
        <section className="px-6 pb-28" style={{ background: '#EEF6FF' }}>
          <div className="max-w-6xl mx-auto pt-20">
            <h2 className="text-2xl font-bold mb-10" style={{ color: '#0F2557' }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((item) => (
                <NewsCard key={item._id} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

/**
 * Minimal SEO head updater — sets document.title and the meta description
 * tag without requiring react-helmet-async. If you already use a head
 * management library elsewhere in the app, prefer that instead and delete
 * this component.
 */
function SeoHead({ title, description }) {
  if (typeof document !== 'undefined') {
    if (title) document.title = `${title} | Atmospatial Analytics`
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }
  return null
}
