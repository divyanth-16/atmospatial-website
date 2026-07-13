// lib/useArticles.js
//
// Small data-fetching hooks wrapping the Sanity client + GROQ queries.
// Each hook exposes { data, loading, error } so components can render
// loading / error / empty states consistently.

import { useEffect, useState } from 'react'
import { sanityClient } from './sanityClient'
import {
  ALL_ARTICLES_QUERY,
  FEATURED_ARTICLE_QUERY,
  ARTICLE_BY_SLUG_QUERY,
  RELATED_ARTICLES_QUERY,
} from './queries'

/**
 * Fetches all published articles, newest first.
 */
export function useAllArticles() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    setLoading(true)
    setError(null)

    sanityClient
      .fetch(ALL_ARTICLES_QUERY)
      .then((result) => {
        if (!cancelled) setData(result || [])
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { data, loading, error }
}

/**
 * Fetches the most recent featured article, if any.
 */
export function useFeaturedArticle() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    setLoading(true)
    setError(null)

    sanityClient
      .fetch(FEATURED_ARTICLE_QUERY)
      .then((result) => {
        if (!cancelled) setData(result || null)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { data, loading, error }
}

/**
 * Fetches a single article by slug, plus its related articles
 * (same category, excluding itself).
 */
export function useArticleBySlug(slug) {
  const [article, setArticle] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return
    let cancelled = false

    setLoading(true)
    setError(null)
    setArticle(null)
    setRelated([])

    sanityClient
      .fetch(ARTICLE_BY_SLUG_QUERY, { slug })
      .then((result) => {
        if (cancelled) return
        setArticle(result || null)
        if (result?.category) {
          return sanityClient.fetch(RELATED_ARTICLES_QUERY, {
            category: result.category,
            slug,
          })
        }
        return []
      })
      .then((relatedResult) => {
        if (!cancelled && relatedResult) setRelated(relatedResult)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  return { article, related, loading, error }
}
