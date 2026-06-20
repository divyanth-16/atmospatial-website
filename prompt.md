You are a senior React architect, Sanity CMS expert, UX designer, and enterprise frontend engineer.

I am building the official website for:

ATMOSPATIAL ANALYTICS PVT. LTD.

The website already has:

* Home Page
* About Page
* Contact Page

Design language already established across the website:

* White background
* Deep professional blue as primary color
* Subtle yellow/gold accent color
* Enterprise-grade appearance
* Scientific and professional
* Clean typography
* Premium spacing
* Minimal animations
* Minimal visual clutter
* Highly readable
* Trustworthy and corporate
* Similar visual quality to climate intelligence, geospatial analytics, atmospheric science, remote sensing, and research organizations

IMPORTANT:

Do NOT create a flashy news website.

Do NOT create a media-company style design.

Do NOT create heavy animations.

Do NOT create large gradients everywhere.

Do NOT create card overload.

Do NOT create a modern startup-looking UI.

The final design should feel like:

* Scientific
* Professional
* Corporate
* Research-oriented
* Clean
* Premium
* Easy to read

The Contact page style should be used as the primary design reference.

====================================================
EXISTING SANITY PROJECT
=======================

A Sanity CMS project already exists.

Project ID:

1o1de3ss

Dataset:

production

CMS folder already exists:

atmospatial-cms/

DO NOT create a new Sanity project.

DO NOT regenerate Sanity setup from scratch.

Only generate the files required to connect my existing React website with my existing Sanity CMS.

====================================================
MAIN GOAL
=========

My father will update news daily.

He does not know coding.

He should never need:

* VS Code
* GitHub
* React
* Deployments

He should only:

1. Open Sanity Studio
2. Create article
3. Upload image
4. Write article
5. Click Publish

The website should automatically display the article.

====================================================
NEWS PAGE
=========

Route:

/news

Design Requirements:

White background.

Professional layout.

Clean spacing.

No dark sections.

No excessive effects.

Use subtle blue accents.

Use subtle yellow highlights only where appropriate.

Keep the design minimal.

News cards should feel premium and trustworthy.

====================================================
NEWS GRID
=========

Display:

3 articles per row on desktop.

2 on tablet.

1 on mobile.

Each card contains:

* Featured image
* Category
* Publish date
* Title
* Short description
* Read More button

Card Design:

* White cards
* Thin borders
* Soft shadow
* Rounded corners
* Professional appearance

Hover Effect:

Only subtle:

* Slight lift
* Slight shadow increase
* Smooth transition

Nothing dramatic.

====================================================
LOAD MORE FUNCTIONALITY
=======================

Initially show:

9 articles

Below the grid show:

View More

When clicked:

Load 9 more articles.

Example:

9 articles
↓
18 articles
↓
27 articles
↓
36 articles

Continue until all articles are visible.

If all articles are loaded:

Hide the button.

====================================================
FEATURED ARTICLE
================

At the top of the News page create:

Featured Article Section

Only display articles marked:

Featured = true

Show the newest featured article.

Layout:

Large image

Title

Short summary

Read Full Article button

Professional design.

No huge hero banners.

No fullscreen sections.

====================================================
ARTICLE PAGE
============

Route:

/news/:slug

When a user clicks an article:

Open dedicated article page.

Layout:

Featured Image

Category

Publish Date

Article Title

Article Content

Related Articles section

Back to News button

Professional typography.

Readable content width.

Clean spacing.

====================================================
SANITY CMS SCHEMA
=================

Create complete article schema with:

Title

Slug

Short Description

Category

Featured Image

Author

Publish Date

Featured Toggle

Article Content (Rich Text)

SEO Title

SEO Description

====================================================
DUMMY DATA
==========

Create 10 sample articles.

Topics should match company domain:

* Weather Forecasting
* Climate Intelligence
* Remote Sensing
* Disaster Analytics
* Atmospheric Science
* Agriculture Intelligence
* Insurance Risk Analytics
* Flood Monitoring
* Cyclone Tracking
* Geospatial Intelligence

Use realistic dummy content.

For images:

Use placeholder image references with clear comments.

====================================================
REACT INTEGRATION
=================

Generate all required React files.

Generate:

* Sanity Client
* GROQ Queries
* Data Fetching Logic
* News Page
* Article Page
* News Card Component
* Load More Functionality
* Image URL Builder
* Error Handling
* Loading States
* Empty States

====================================================
PROJECT STRUCTURE
=================

Show the complete final folder structure.

Generate every required file.

Show exactly where every file should be placed.

====================================================
SANITY FILES
============

Generate:

schemaTypes/article.js

schemaTypes/index.js

Any required updates to:

sanity.config.js

====================================================
IMPORTANT
=========

Generate production-ready code.

Generate complete code.

Do not generate partial snippets.

Do not provide explanations first.

Output all files in proper order.

The final result must work with my existing Sanity CMS project and existing React website.
