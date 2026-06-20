// src/lib/sanityClient.js
//
// Sanity client for the React frontend. Talks to your EXISTING Sanity
// project (1o1de3ss / production) in read-only mode — the website only
// ever reads published articles, it never writes to Sanity.

import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '1o1de3ss',
  dataset: 'production',
  apiVersion: '2024-01-01', // pin to a fixed API version for stability
  useCdn: true, // fast, cached reads — fine for a public news page
})
