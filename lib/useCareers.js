// src/lib/useCareers.js

import { useState, useEffect, useCallback } from 'react'
import { sanityClient } from './sanityClient'
import { ALL_CAREERS_QUERY } from './queries'

export function useCareers() {
  const [data,    setData]    = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  const fetch = useCallback(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    sanityClient
      .fetch(ALL_CAREERS_QUERY)
      .then((result) => { if (!cancelled) setData(result || []) })
      .catch((err)   => { if (!cancelled) setError(err) })
      .finally(()    => { if (!cancelled) setLoading(false) })

    return () => { cancelled = true }
  }, [])

  useEffect(fetch, [fetch])

  return { data, loading, error, retry: fetch }
}
