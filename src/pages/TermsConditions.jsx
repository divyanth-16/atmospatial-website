// src/pages/TermsConditions.jsx
// Route: /terms-and-conditions
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
      aria-labelledby={`tc-${number}`}
      className="mb-10"
    >
      <h2
        id={`tc-${number}`}
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

export default function TermsConditions() {
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
              Terms &amp; Conditions
            </h1>
            <div className="w-14 h-1 rounded-full mb-5" style={{ background: '#153E8A' }} />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main className="px-6">
        <div className="max-w-3xl mx-auto">

          <Section number="1" title="Acceptance of Terms">
            <p>
              Welcome to Atmospatial Analytics Pvt. Ltd. ("Atmospatial", "we", "our", or "us").
              These Terms &amp; Conditions govern your access to and use of the Atmospatial
              website. By accessing or using this website, you agree to comply with these
              Terms &amp; Conditions. If you do not agree with any part of these Terms, please
              discontinue use of the website.
            </p>
          </Section>

          <Section number="2" title="About Our Website">
            <p>
              The Atmospatial website provides information regarding our company, products,
              atmospheric research, weather forecasting, climate intelligence, geospatial
              analytics, remote sensing, research resources, news, and related services.
            </p>
            <p>
              The information available on this website is intended for informational and
              educational purposes unless otherwise stated.
            </p>
          </Section>

          <Section number="3" title="Use of the Website">
            <p>You agree to use this website responsibly and only for lawful purposes.</p>
            <p>You must not:</p>
            <BulletList items={[
              'Use the website in violation of any applicable law or regulation.',
              'Attempt to gain unauthorized access to our systems, servers, or databases.',
              'Upload or distribute malicious software, viruses, or harmful code.',
              'Interfere with the normal operation or security of the website.',
              'Use automated tools to scrape, copy, or harvest website content without written permission.',
            ]} />
            <p>
              Any misuse of the website may result in restricted access and legal action where
              appropriate.
            </p>
          </Section>

          <Section number="4" title="Intellectual Property">
            <p>
              Unless otherwise stated, all content available on this website, including but
              not limited to:
            </p>
            <BulletList items={[
              'Company logo',
              'Graphics',
              'Icons',
              'Website design',
              'Articles',
              'Research summaries',
              'Images',
              'Documents',
              'Text',
              'Source content created by Atmospatial',
            ]} />
            <p>
              is the intellectual property of Atmospatial Analytics Pvt. Ltd. and is protected
              under applicable copyright and intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, republish, or commercially exploit
              any content without prior written permission.
            </p>
          </Section>

          <Section number="5" title="News Content">
            <p>
              News articles published on this website are intended to provide information
              related to atmospheric sciences, weather forecasting, climate intelligence, and
              related topics.
            </p>
            <p>
              While every effort is made to ensure accuracy, we do not guarantee that all
              information is complete, current, or error-free.
            </p>
            <p>
              Information may be updated, modified, or removed without prior notice.
            </p>
          </Section>

          <Section number="6" title="Library Resources">
            <p>The Library section may contain:</p>
            <BulletList items={[
              'Books',
              'PDF documents',
              'Research publications',
              'External journal links',
              'Educational resources',
            ]} />
            <p>
              These resources are provided solely for educational, informational, and research
              purposes. Users are responsible for ensuring that their use of any downloaded or
              externally linked material complies with applicable copyright laws and licensing
              requirements.
            </p>
            <p>
              Where resources link to third-party websites, ownership and copyright remain with
              the respective publishers or authors.
            </p>
          </Section>

          <Section number="7" title="External Links">
            <p>
              Our website may contain links to third-party websites or external resources.
              These links are provided for convenience only.
            </p>
            <p>
              We do not control or endorse the content, policies, availability, or security of
              third-party websites and accept no responsibility for any information or services
              provided by them.
            </p>
            <p>
              Users access external websites at their own discretion and risk.
            </p>
          </Section>

          <Section number="8" title="Forecasts and Research Disclaimer">
            <p>
              Weather forecasts, climate analyses, atmospheric insights, maps, datasets, and
              research published on this website are intended to support awareness and informed
              decision-making.
            </p>
            <p>
              Although reasonable efforts are made to ensure accuracy, forecasts and scientific
              analyses are inherently subject to uncertainty.
            </p>
            <p>
              Atmospatial Analytics Pvt. Ltd. shall not be liable for any loss, damage, or
              consequences arising from reliance on forecasts, research outputs, or analytical
              information provided on this website.
            </p>
            <p>
              Users should exercise independent judgment and consult appropriate professional
              sources before making operational, financial, or safety-critical decisions.
            </p>
          </Section>

          <Section number="9" title="Contact Form">
            <p>
              The Contact Form is provided solely for legitimate business inquiries and
              communication. Users agree not to:
            </p>
            <BulletList items={[
              'Submit false information.',
              'Send spam or unsolicited promotional material.',
              'Attempt to misuse the contact system.',
              'Transmit unlawful, offensive, or harmful content.',
            ]} />
            <p>We reserve the right to ignore or remove inappropriate submissions.</p>
          </Section>

          <Section number="10" title="Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, Atmospatial Analytics Pvt.
              Ltd., its directors, employees, affiliates, and partners shall not be liable for
              any direct, indirect, incidental, consequential, or special damages arising from:
            </p>
            <BulletList items={[
              'Use or inability to use the website.',
              'Errors or omissions in website content.',
              'Temporary interruptions or downtime.',
              'Third-party services or external websites.',
              'Downloading files or resources made available through the website.',
            ]} />
            <p>Your use of the website is entirely at your own risk.</p>
          </Section>

          <Section number="11" title="Website Availability">
            <p>
              We strive to keep our website available and functioning at all times. However,
              we do not guarantee uninterrupted availability and reserve the right to:
            </p>
            <BulletList items={[
              'Modify website content.',
              'Update services.',
              'Perform maintenance.',
              'Suspend or discontinue portions of the website without prior notice.',
            ]} />
          </Section>

          <Section number="12" title="Privacy">
            <p>
              Your use of this website is also governed by our{' '}
              <Link
                to="/privacy-policy"
                className="font-semibold transition-opacity hover:opacity-70"
                style={{ color: '#153E8A' }}
              >
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect your personal information.
            </p>
            <p>
              By using this website, you also agree to the terms described in our Privacy
              Policy.
            </p>
          </Section>

          <Section number="13" title="Changes to These Terms">
            <p>
              We may revise these Terms &amp; Conditions at any time without prior notice. Any
              updates will become effective immediately upon publication on this page.
            </p>
            <p>
              Your continued use of the website after changes have been published constitutes
              acceptance of the updated Terms &amp; Conditions.
            </p>
          </Section>

          <Section number="14" title="Governing Law">
            <p>
              These Terms &amp; Conditions shall be governed by and interpreted in accordance
              with the laws of the Republic of India.
            </p>
            <p>
              Any disputes arising in connection with these Terms or the use of this website
              shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </Section>

          <Section number="15" title="Contact Information">
            <p>
              If you have any questions regarding these Terms &amp; Conditions, please contact
              us.
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

          {/* Cross-link */}
          <div
            className="mt-6 pt-8 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ borderTop: '1px solid #E5ECF8' }}
          >
            <p className="text-sm" style={{ color: '#6B7280' }}>
              Also see our{' '}
              <Link
                to="/privacy-policy"
                className="font-semibold transition-opacity hover:opacity-70"
                style={{ color: '#153E8A' }}
              >
                Privacy Policy
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
