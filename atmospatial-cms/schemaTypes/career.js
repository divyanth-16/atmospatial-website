// atmospatial-cms/schemaTypes/career.js
//
// Schema for job openings on the Careers page.
// Add a job in Sanity Studio → Career → + New

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  groups: [
    { name: 'basics',  title: 'Job Basics',       default: true },
    { name: 'details', title: 'Job Details'                      },
    { name: 'meta',    title: 'Metadata'                         },
  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      group: 'basics',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      group: 'basics',
      options: {
        list: [
          { title: 'Research & Development',         value: 'Research & Development'         },
          { title: 'Atmospheric Science',            value: 'Atmospheric Science'            },
          { title: 'Geospatial Intelligence',        value: 'Geospatial Intelligence'        },
          { title: 'AI & Machine Learning',          value: 'AI & Machine Learning'          },
          { title: 'Remote Sensing',                 value: 'Remote Sensing'                 },
          { title: 'Software Engineering',           value: 'Software Engineering'           },
          { title: 'Data Science',                   value: 'Data Science'                   },
          { title: 'Business Development',           value: 'Business Development'           },
          { title: 'Operations',                     value: 'Operations'                     },
          { title: 'Administration',                 value: 'Administration'                 },
        ],
        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      group: 'basics',
      options: {
        list: [
          { title: 'Full Time',  value: 'Full Time'  },
          { title: 'Part Time',  value: 'Part Time'  },
          { title: 'Internship', value: 'Internship' },
          { title: 'Contract',   value: 'Contract'   },
        ],
        layout: 'radio',
      },
      initialValue: 'Full Time',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'basics',
      description: 'e.g. "Visakhapatnam, India" or "Remote"',
      initialValue: 'Visakhapatnam, Andhra Pradesh, India',
    }),

    defineField({
      name: 'experience',
      title: 'Experience Required',
      type: 'string',
      group: 'basics',
      description: 'e.g. "2–4 years" or "Fresher / 0–1 year"',
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'basics',
      options: {
        list: [
          { title: 'Open',   value: 'Open'   },
          { title: 'Closed', value: 'Closed' },
        ],
        layout: 'radio',
      },
      initialValue: 'Open',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'applyEmail',
      title: 'Apply Email',
      type: 'string',
      group: 'basics',
      description: 'Candidates will be directed to email this address.',
      initialValue: 'atmospatialanalyticsofficial@gmail.com',
    }),

    defineField({
      name: 'jobDescription',
      title: 'Job Description',
      type: 'array',
      group: 'details',
      description: 'Overview of the role — 2 to 4 paragraphs.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal',    value: 'normal'     },
            { title: 'H3',        value: 'h3'         },
            { title: 'Blockquote',value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold',   value: 'strong' },
              { title: 'Italic', value: 'em'     },
            ],
          },
        },
      ],
    }),

    defineField({
      name: 'responsibilities',
      title: 'Key Responsibilities',
      type: 'array',
      group: 'details',
      description: 'Bullet list — add one item per entry.',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      group: 'details',
      description: 'Must-have qualifications — one per entry.',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'niceToHave',
      title: 'Nice to Have',
      type: 'array',
      group: 'details',
      description: 'Preferred but not mandatory qualifications.',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      group: 'meta',
      description: 'Lower numbers appear first.',
      initialValue: 100,
    }),
  ],

  preview: {
    select: {
      title:  'title',
      dept:   'department',
      type:   'employmentType',
      status: 'status',
    },
    prepare({ title, dept, type, status }) {
      const badge = status === 'Open' ? '🟢' : '🔴'
      return {
        title,
        subtitle: `${badge} ${status}  ·  ${dept || '—'}  ·  ${type || '—'}`,
      }
    },
  },

  orderings: [
    {
      title:  'Display Order',
      name:   'displayOrder',
      by:     [{ field: 'displayOrder', direction: 'asc' }],
    },
    {
      title: 'Publish Date, Newest First',
      name:  'publishDateDesc',
      by:    [{ field: 'publishDate', direction: 'desc' }],
    },
  ],
})
