// atmospatial-cms/schemaTypes/index.js
//
// Registers all schema types for the Sanity Studio.
// If you already have other schema types in this project (e.g. for the
// Home/About/Contact page content), keep them in this array alongside
// `article`. Do not remove existing entries — only add `article` to them.

import article from './article'
import book from './book'
import journal from './journal'

export const schemaTypes = [article, book, journal]
