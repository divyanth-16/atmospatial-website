// src/lib/imageUrlBuilder.js
//
// Helper to turn a Sanity image reference into an actual URL, with
// optional sizing/quality params. Use this anywhere you render a
// Sanity-hosted image.

import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanityClient'

const builder = imageUrlBuilder(sanityClient)

/**
 * Returns a Sanity image URL builder chain for the given image source.
 * Usage:
 *   urlFor(article.featuredImage).width(800).height(450).url()
 */
export function urlFor(source) {
  return builder.image(source)
}
