// src/pages/News.jsx
//
// Route: /news
// Lists all published articles. Featured article (if any) shown at top.
// Grid starts at 9 articles, "View More" loads 9 more at a time.

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAllArticles, useFeaturedArticle } from '../../lib/useArticles'
import NewsCard from '../components/NewsCard'
import FeaturedArticle from '../components/FeaturedArticle'
import { NewsLoadingGrid, NewsError, NewsEmpty } from '../components/NewsStates'

const PAGE_SIZE = 9

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function News() {
  const { data: articles, loading, error } = useAllArticles()
  const { data: featured, loading: featuredLoading } = useFeaturedArticle()
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const visibleArticles = articles.slice(0, visibleCount)
  const hasMore = visibleCount < articles.length

  console.log({
  totalArticles: articles.length,
  visibleCount,
  visibleArticles: visibleArticles.length,
  hasMore,
})

  return (
    <div style={{ background: '#ffffff', color: '#0F2557' }}>

      {/* ── Page header ── */}
      <section className="pt-36 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={fadeIn}>
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
              style={{ color: '#C69214' }}
            >
              Insights & Updates
            </p>
            <h1
              className="font-black leading-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', color: '#0F2557' }}
            >
              News
            </h1>
            <div className="w-14 h-1 rounded-full" style={{ background: '#153E8A' }} />
          </motion.div>
        </div>
      </section>

      {/* ── Featured article ── */}
      {!featuredLoading && featured && (
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeIn}
            >
              <FeaturedArticle article={featured} />
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Article grid ── */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto">

          {loading && <NewsLoadingGrid count={9} />}

          {!loading && error && <NewsError message={error.message} />}

          {!loading && !error && articles.length === 0 && <NewsEmpty />}

          {!loading && !error && articles.length > 0 && (
            <>
              <motion.div
                initial="hidden"
                animate="show"
                // viewport={{ once: true, margin: '-40px' }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {visibleArticles.map((article) => (
                  <motion.div key={article._id} variants={fadeIn} initial="hidden" animate="show">
                    <NewsCard article={article} />
                  </motion.div>
                ))}
              </motion.div>

              {hasMore && (
                <div className="flex justify-center mt-14">
                  <button
                    onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    className="px-8 py-3.5 rounded-full font-bold text-sm transition-colors"
                    style={{ border: '1px solid #153E8A', color: '#153E8A', background: 'transparent' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#153E8A'
                      e.currentTarget.style.color = '#ffffff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#153E8A'
                    }}
                  >
                    View More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
