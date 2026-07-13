// lib/useBooks.js

import { useState, useEffect, useCallback } from 'react'
import { sanityClient } from './sanityClient'
import { ALL_BOOKS_QUERY } from './queries'

export function useBooks() {
  const [data, setData]       = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  const fetch = useCallback(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    sanityClient
      .fetch(ALL_BOOKS_QUERY)
      .then((result) => { if (!cancelled) setData(result || []) })
      .catch((err)   => { if (!cancelled) setError(err) })
      .finally(()    => { if (!cancelled) setLoading(false) })

    return () => { cancelled = true }
  }, [])

  useEffect(fetch, [fetch])

  return { data, loading, error, retry: fetch }
}
