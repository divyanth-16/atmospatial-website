You are a senior award-winning UI/UX designer and staff-level React engineer. Your task is to completely redesign and rebuild my Contact page while preserving the overall design language of the existing AtmoSpatial website.

IMPORTANT CONTEXT:

I have already built the Home page and About page. They follow a premium enterprise technology aesthetic with:

* White background
* Deep blue primary color
* Yellow/gold accent color
* Clean typography
* Scientific and professional appearance
* Enterprise SaaS / Climate Intelligence company feel
* Minimalistic design
* High trust and credibility
* Premium spacing and layout

The Contact page must visually belong to the same design system.

CURRENT PROBLEM:

The current Contact page feels too heavy, too card-based, too startup-template-like, and too busy.

I want a much cleaner and more premium experience.

DESIGN GOALS:

1. White background throughout most of the page.
2. Deep blue (#1326D3 style) as primary brand color.
3. Yellow/gold accent used sparingly.
4. Extremely professional.
5. Enterprise-grade appearance.
6. Similar quality level as modern Stripe, Palantir, Linear, Vercel, Arcadis, Planet Labs, IBM Consulting, or enterprise climate technology companies.
7. Very minimal use of boxes/cards.
8. Very minimal use of shadows.
9. No glassmorphism.
10. No dark theme sections.
11. No flashy gradients everywhere.
12. No startup cliché designs.
13. Keep the page clean and readable.
14. Focus on hierarchy, whitespace, typography, and alignment.

MOTION REQUIREMENTS:

Keep animations extremely minimal.

Allowed:

* Button hover effects
* Input focus states
* Small fade-ins
* Very subtle micro-interactions

Not allowed:

* Floating elements
* Excessive Framer Motion usage
* Large entrance animations
* Scroll-triggered gimmicks
* Orb effects
* Heavy parallax

The page should feel calm and trustworthy.

PAGE STRUCTURE:

SECTION 1 — HERO

Create a simple hero section.

Content:

Small label:
"Contact Us"

Headline:
"Let's Build Better Climate Intelligence"

Subheadline:
"Whether you're a government agency, research institution, enterprise, or investor, we'd be glad to discuss how AtmoSpatial can support your mission."

No huge visual effects.

No large illustrations.

Use typography and spacing.

Add a subtle blue accent line.

SECTION 2 — CONTACT INFORMATION

Show contact information in a clean layout.

Email:
[atmospatialanalyticsofficial@gmail.com](mailto:atmospatialanalyticsofficial@gmail.com)

Location:
Visakhapatnam, Andhra Pradesh, India

Website:
atmospatial.com

Display these elegantly.

Avoid giant cards.

Could use:

* clean rows
* subtle dividers
* icon + content layout

SECTION 3 — CONTACT FORM

This is the primary focus.

Fields:

* Full Name
* Email Address
* Organization
* Inquiry Type
* Message

Inquiry Types:

* Product Partnership
* Research Collaboration
* Government / Institutional Project
* Early Access Request
* Investment Inquiry
* General Inquiry

The form should look premium.

Use:

* clean borders
* generous spacing
* subtle focus states

Avoid:

* thick borders
* excessive backgrounds
* heavy cards

Submit Button Text:

"Send Message"

SECTION 4 — FAQ / EXPECTATIONS

Small section:

"What happens next?"

Example:

1. We review your inquiry.
2. Our team evaluates requirements.
3. We respond within 24–48 business hours.

Simple and professional.

SECTION 5 — FINAL CTA

Very lightweight section.

Headline:

"Interested in collaborating with AtmoSpatial?"

Button:

"Start a Conversation"

VISUAL STYLE:

Prioritize:

* whitespace
* alignment
* typography
* restraint

The page should feel:

* scientific
* credible
* enterprise
* premium
* trustworthy

NOT:

* trendy startup
* crypto website
* marketing landing page

TECHNICAL REQUIREMENTS:

IMPORTANT:

The contact form must actually work.

Do NOT simulate submissions.

Implement a production-ready contact workflow.

Create every file required.

Use:

Frontend:
React + Vite

Backend:
Vercel Serverless Functions

Email:
Nodemailer

Target email:
[atmospatialanalyticsofficial@gmail.com](mailto:atmospatialanalyticsofficial@gmail.com)

Required implementation:

1. Create API endpoint:

/api/contact.js

2. Install and configure Nodemailer.

3. Use environment variables.

4. Create frontend service layer.

5. Create form submission logic.

6. Proper loading states.

7. Proper success state.

8. Proper error state.

9. Validation.

10. Spam protection basics.

11. Clean architecture.

FILES TO CREATE:

Create all necessary files and provide complete code:

* Contact.jsx
* api/contact.js
* any helper/service files
* environment variable examples
* required package installations
* required Vercel configuration if needed

EMAIL CONTENT FORMAT:

Subject:
New Contact Inquiry — AtmoSpatial

Body:

Name:
Email:
Organization:
Inquiry Type:

Message:

The form must send emails to:

[atmospatialanalyticsofficial@gmail.com](mailto:atmospatialanalyticsofficial@gmail.com)

CODE QUALITY:

* Production ready
* Clean
* Modular
* Professional
* Modern React practices
* No unnecessary complexity

IMPORTANT:

Do not partially modify my existing Contact page.

Instead, redesign it from scratch while keeping the overall AtmoSpatial design language consistent with the Home and About pages.

Return complete code for every required file and explain where each file should be placed in the project structure.
