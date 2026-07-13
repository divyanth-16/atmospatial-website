// atmospatial-cms/schemaTypes/journal.js
//
// Schema for academic journals in the Atmospatial Library section.
// Add a journal in Sanity Studio → Library → Journals.

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'journal',
  title: 'Journal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Journal Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'publisher',
      title: 'Publisher',
      type: 'string',
      description: 'e.g. "American Meteorological Society" or "Elsevier"',
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
      name: 'websiteLink',
      title: 'Journal Website',
      type: 'url',
      description: 'Link to the journal homepage or listing page.',
      validation: (Rule) => Rule.required(),
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
    select: { title: 'title', subtitle: 'publisher'},
    prepare({ title, subtitle}) {
      return { title, subtitle: `${subtitle || ''}` }
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
