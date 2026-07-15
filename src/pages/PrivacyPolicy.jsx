// src/pages/PrivacyPolicy.jsx
// Route: /privacy-policy
// Hardcoded — no CMS. Content from the provided PDF.

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function Section({ number, title, children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-30px' }}
      variants={fadeIn}
      aria-labelledby={`pp-${number}`}
      className="mb-10"
    >
      <h2
        id={`pp-${number}`}
        className="text-lg font-bold mb-3"
        style={{ color: '#153E8A' }}
      >
        {number}. {title}
      </h2>
      <div className="text-sm leading-relaxed space-y-3" style={{ color: '#374151' }}>
        {children}
      </div>
    </motion.section>
  )
}

function BulletList({ items }) {
  return (
    <ul className="space-y-1.5 mt-2 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: '#C69214' }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicy() {
  return (
    <div style={{ background: '#ffffff', color: '#0F2557' }}>

      {/* Hero */}
      <section className="pt-28 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={fadeIn}>
            <h1
              className="font-black leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', color: '#0F2557' }}
            >
              Privacy Policy
            </h1>
            <div className="w-14 h-1 rounded-full mb-5" style={{ background: '#153E8A' }} />
          </motion.div>
        </div>
      </section>

      

      {/* Content */}
      <main className="px-6 ">
        <div className="max-w-3xl mx-auto">

          <Section number="1" title="Introduction" >
            <p>
              Welcome to Atmospatial Analytics Pvt. Ltd. ("Atmospatial", "we", "our", or "us").
              We are committed to protecting the privacy of visitors who access and use our website.
            </p>
            <p>
              This Privacy Policy explains what information we collect, how we use it, how we
              protect it, and your rights regarding your personal information when you visit our
              website.
            </p>
            <p>
              By accessing or using our website, you agree to the practices described in this
              Privacy Policy.
            </p>
          </Section>

          <Section number="2" title="Information We Collect">
            <p>
              We collect only the information necessary to provide our services and respond to
              your inquiries.
            </p>
            <p className="font-semibold" style={{ color: '#0F2557' }}>Information You Provide</p>
            <p>When you submit our Contact Form, we may collect:</p>
            <BulletList items={[
              'Full Name',
              'Email Address',
              'Subject',
              'Message Content',
            ]} />
            <p>This information is voluntarily provided by you.</p>

            <p className="font-semibold mt-4" style={{ color: '#0F2557' }}>Automatically Collected Information</p>
            <p>
              When you visit our website, certain technical information may be collected
              automatically by our hosting infrastructure, including:
            </p>
            <BulletList items={[
              'IP Address',
              'Browser Type',
              'Device Information',
              'Operating System',
              'Date and Time of Access',
              'Requested Pages',
            ]} />
            <p>
              This information is used solely for website security, diagnostics, and performance
              monitoring.
            </p>
          </Section>

          <Section number="3" title="How We Use Your Information">
            <p>The information collected may be used for the following purposes:</p>
            <BulletList items={[
              'Responding to enquiries submitted through our Contact Form.',
              'Providing customer support.',
              'Improving the functionality and performance of our website.',
              'Maintaining website security.',
              'Preventing misuse, fraud, or unauthorized activities.',
              'Complying with legal obligations where applicable.',
            ]} />
            <p>We do not sell, rent, or trade your personal information.</p>
          </Section>

          <Section number="4" title="News and Library Content">
            <p>
              Our website provides publicly accessible news articles, research resources, books,
              and journal references for informational and educational purposes.
            </p>
            <p>Users are not required to create an account to access this content.</p>
            <p>The Library section may include:</p>
            <BulletList items={[
              'PDF documents',
              'External book links',
              'External journal references',
            ]} />
            <p>
              External resources remain subject to their respective owners' copyright and terms
              of use.
            </p>
          </Section>

          <Section number="5" title="Cookies">
            <p>
              Our website currently does not intentionally use tracking cookies for advertising
              or behavioral profiling.
            </p>
            <p>
              Certain essential cookies or browser storage mechanisms may be used to ensure
              proper website functionality.
            </p>
            <p>
              If analytics services are introduced in the future, this Privacy Policy will be
              updated accordingly.
            </p>
          </Section>

          <Section number="6" title="Third-Party Services">
            <p>
              To operate our website, we use trusted third-party service providers. These
              services may process limited information necessary to perform their functions.
            </p>
            <p>Our website currently utilizes services including:</p>
            <BulletList items={[
              'Sanity CMS for content management.',
              'Vercel for website hosting and deployment.',
              'Google Workspace / Gmail (via Nodemailer) for processing Contact Form submissions.',
            ]} />
            <p>
              Each service provider maintains its own privacy practices and policies.
            </p>
          </Section>

          <Section number="7" title="Data Storage and Security">
            <p>
              We implement reasonable administrative, technical, and organizational measures to
              protect information against unauthorized access, disclosure, alteration, or
              destruction.
            </p>
            <p>
              Administrative access to our Content Management System (CMS) is restricted to
              authorized personnel only.
            </p>
            <p>
              While we strive to protect your information, no method of internet transmission
              or electronic storage is completely secure. Therefore, we cannot guarantee
              absolute security.
            </p>
          </Section>

          <Section number="8" title="Data Retention">
            <p>
              Information submitted through our Contact Form is retained only for as long as
              necessary to:
            </p>
            <BulletList items={[
              'Respond to your inquiry.',
              'Maintain communication records.',
              'Comply with applicable legal requirements.',
            ]} />
            <p>Information that is no longer required may be securely deleted.</p>
          </Section>

          <Section number="9" title="External Links">
            <p>
              Our website may contain links to third-party websites, journals, publishers, or
              external resources.
            </p>
            <p>
              We are not responsible for the privacy practices, content, or policies of those
              external websites.
            </p>
            <p>
              Users are encouraged to review the privacy policies of any external website they
              visit.
            </p>
          </Section>

          <Section number="10" title="Children's Privacy">
            <p>
              Our website is intended for general audiences and is not directed toward children
              under the age of 13.
            </p>
            <p>We do not knowingly collect personal information from children.</p>
            <p>
              If we become aware that such information has been collected unintentionally,
              appropriate steps will be taken to remove it.
            </p>
          </Section>

          <Section number="11" title="Your Rights">
            <p>
              Subject to applicable laws, you may have the right to:
            </p>
            <BulletList items={[
              'Request access to personal information we hold about you.',
              'Request correction of inaccurate information.',
              'Request deletion of your personal information where appropriate.',
              'Withdraw consent where consent is the legal basis for processing.',
              'Contact us regarding any privacy-related concerns.',
            ]} />
            <p>Requests may be submitted using the contact information provided below.</p>
          </Section>

          <Section number="12" title="Changes to this Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              services, legal obligations, or operational requirements.
            </p>
            <p>
              The updated version will always display the latest revision date at the top of
              this page.
            </p>
            <p>
              Continued use of the website after changes are published constitutes acceptance
              of the updated Privacy Policy.
            </p>
          </Section>

          <Section number="13" title="Contact Us">
            <p>
              If you have any questions regarding this Privacy Policy or how your information
              is handled, please contact us.
            </p>
            <div
              className="mt-4 p-5 rounded-xl"
              style={{ background: '#EEF6FF', border: '1px solid #D7E2F3' }}
            >
              <p className="font-semibold mb-1" style={{ color: '#0F2557' }}>
                Atmospatial Analytics Pvt. Ltd.
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:atmospatialanalyticsofficial@gmail.com"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: '#153E8A' }}
                >
                  atmospatialanalyticsofficial@gmail.com
                </a>
              </p>
              <p>
                Website:{' '}
                <a
                  href="https://atmospatial.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: '#153E8A' }}
                >
                  https://atmospatial.com
                </a>
              </p>
            </div>
          </Section>

          {/* Cross-link to T&C */}
          <div
            className="mt-6 pt-8 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ borderTop: '1px solid #E5ECF8' }}
          >
            <p className="text-sm" style={{ color: '#6B7280' }}>
              Also see our{' '}
              <Link
                to="/terms-and-conditions"
                className="font-semibold transition-opacity hover:opacity-70"
                style={{ color: '#153E8A' }}
              >
                Terms &amp; Conditions
              </Link>
            </p>
            <Link
              to="/contact"
              className="text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: '#153E8A' }}
            >
              Contact Us →
            </Link>
          </div>

        </div>
      </main>
    </div>
  )
}
