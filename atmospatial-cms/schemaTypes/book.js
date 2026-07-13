// atmospatial-cms/schemaTypes/book.js
//
// Schema for books in the Atmospatial Library section.
// Add a book in Sanity Studio → Library → Books.

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'author',
      title: 'Author(s)',
      type: 'string',
      description: 'e.g. "Wallace & Hobbs" or "Roger A. Pielke Sr."',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'pdfFile',
      title: 'PDF File (optional)',
      type: 'file',
      description: 'Upload a PDF if you have the file. If not, use the External Link below.',
      options: { accept: '.pdf' },
    }),

    defineField({
      name: 'externalLink',
      title: 'External Link (optional)',
      type: 'url',
      description: 'Link to an external source, publisher, or Google Books entry.',
    }),

    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. Leave blank to sort alphabetically.',
      initialValue: 100,
    }),
  ],

  preview: {
    select: { title: 'title', subtitle: 'author'},
    prepare({ title, subtitle }) {
      return { title, subtitle: ` ${subtitle || ''}` }
    },
  },

  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
    {
      title: 'Title A–Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
