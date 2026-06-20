// src/lib/queries.js
//
// All GROQ queries used by the News section live here, in one place,
// so they're easy to find and adjust later.

// Shared projection — the fields every article listing needs.
// (Article page fetches additional fields separately, see ARTICLE_BY_SLUG_QUERY.)
const ARTICLE_CARD_FIELDS = `
  _id,
  title,
  slug,
  shortDescription,
  category,
  featuredImage,
  author,
  publishDate,
  featured
`

/**
 * All published articles, newest first.
 * Used to drive the main news grid (with client-side pagination via Load More).
 */
export const ALL_ARTICLES_QUERY = `
  *[_type == "article"] | order(publishDate desc) {
    ${ARTICLE_CARD_FIELDS}
  }
`

/**
 * The single newest article marked featured = true.
 * Used for the Featured Article section at the top of the News page.
 */
export const FEATURED_ARTICLE_QUERY = `
  *[_type == "article" && featured == true] | order(publishDate desc)[0] {
    ${ARTICLE_CARD_FIELDS}
  }
`

/**
 * One full article by slug, including rich text content and SEO fields.
 * Used by the Article page.
 */
export const ARTICLE_BY_SLUG_QUERY = `
  *[_type == "article" && slug.current == $slug][0] {
    ${ARTICLE_CARD_FIELDS},
    content,
    seoTitle,
    seoDescription
  }
`

/**
 * Up to 3 other articles in the same category, excluding the current one.
 * Used for the Related Articles section on the Article page.
 */
export const RELATED_ARTICLES_QUERY = `
  *[_type == "article" && category == $category && slug.current != $slug]
    | order(publishDate desc)[0...3] {
    ${ARTICLE_CARD_FIELDS}
  }
`
