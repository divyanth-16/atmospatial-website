// atmospatial-cms/schemaTypes/article.js
//
// Article schema for the Atmospatial Analytics News section.
// This is the only content type your father needs to fill in: open Sanity
// Studio, click "Article", fill the fields below, click Publish.

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated URL-friendly version of the title. Click "Generate" after typing the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'A 1–2 sentence summary shown on the news card and featured section.',
      rows: 3,
      validation: (Rule) => Rule.required().max(220),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Weather Forecasting', value: 'Weather Forecasting' },
          { title: 'Climate Intelligence', value: 'Climate Intelligence' },
          { title: 'Remote Sensing', value: 'Remote Sensing' },
          { title: 'Disaster Analytics', value: 'Disaster Analytics' },
          { title: 'Atmospheric Science', value: 'Atmospheric Science' },
          { title: 'Agriculture Intelligence', value: 'Agriculture Intelligence' },
          { title: 'Insurance Risk Analytics', value: 'Insurance Risk Analytics' },
          { title: 'Flood Monitoring', value: 'Flood Monitoring' },
          { title: 'Cyclone Tracking', value: 'Cyclone Tracking' },
          { title: 'Geospatial Intelligence', value: 'Geospatial Intelligence' },
          { title: 'Company News', value: 'Company News' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image shown on the news card, featured section, and article page.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Short description of the image, for accessibility and SEO.',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Atmospatial Analytics',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Turn this ON to show the article at the top of the News page. Only the most recent featured article is displayed there.',
      initialValue: false,
    }),

    defineField({
      name: 'content',
      title: 'Article Content',
      type: 'array',
      description: 'The full article body.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt Text' },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Used for search engines and browser tab title. Leave blank to use the article title.',
      validation: (Rule) => Rule.max(70),
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Used for search engine result snippets. Leave blank to use the short description.',
      rows: 2,
      validation: (Rule) => Rule.max(160),
    }),
  ],

  // What shows up in the Studio's document list
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'featuredImage',
      date: 'publishDate',
      featured: 'featured',
    },
    prepare({ title, category, media, date, featured }) {
      const formattedDate = date ? new Date(date).toLocaleDateString('en-IN') : 'No date'
      return {
        title: featured ? `★ ${title}` : title,
        subtitle: `${category || 'Uncategorized'} · ${formattedDate}`,
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Publish Date, New to Old',
      name: 'publishDateDesc',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
  ],
})
