// src/pages/Careers.jsx
// Route: /careers

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PortableText } from '@portabletext/react'
import {
  ChevronDown, MapPin, Briefcase, Clock, Award,
  Mail, AlertCircle, RefreshCw,
} from 'lucide-react'
import { useCareers } from '../../lib/useCareers'

/* ─── Tokens ─── */
// #0F2557  dark navy
// #153E8A  primary blue
// #C69214  gold
// #EEF6FF  light blue tint

/* ─── Portable text renderer (job description rich text) ─── */
const ptComponents = {
  block: {
    normal:     ({ children }) => <p className="text-sm leading-relaxed mb-3" style={{ color: '#374151' }}>{children}</p>,
    h3:         ({ children }) => <h4 className="text-base font-bold mb-2 mt-4" style={{ color: '#0F2557' }}>{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="pl-4 my-3 text-sm italic" style={{ borderLeft: '2px solid #C69214', color: '#6B7280' }}>
        {children}
      </blockquote>
    ),
  },
}

/* ─── Status badge ─── */
function StatusBadge({ status }) {
  const open = status === 'Open'
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
      style={{
        background: open ? 'rgba(21,62,138,0.08)' : 'rgba(107,114,128,0.1)',
        color:       open ? '#153E8A'              : '#9CA3AF',
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: open ? '#22C55E' : '#9CA3AF' }}
      />
      {status}
    </span>
  )
}

/* ─── Bullet list ─── */
function BulletList({ items, label }) {
  if (!items || items.length === 0) return null
  return (
    <div className="mt-5">
      <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#153E8A' }}>
        {label}
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#374151' }}>
            <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: '#C69214' }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─── Individual job row ─── */
function JobRow({ job }) {
  const [open, setOpen] = useState(false)

  const metaItems = [
    job.department    && { icon: Briefcase, label: job.department    },
    job.location      && { icon: MapPin,    label: job.location      },
    job.employmentType&& { icon: Clock,     label: job.employmentType},
    job.experience    && { icon: Award,     label: job.experience    },
  ].filter(Boolean)

  return (
    <div
      className="rounded-xl overflow-hidden transition-shadow"
      style={{ border: '1px solid #E5ECF8', background: '#ffffff' }}
    >
      {/* Header row — always visible */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex flex-col sm:flex-row sm:items-center gap-4 text-left px-6 py-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        style={{ background: open ? '#EEF6FF' : 'transparent' }}
        onMouseEnter={(e) => { if (!open) e.currentTarget.style.background = '#F7FAFF' }}
        onMouseLeave={(e) => { if (!open) e.currentTarget.style.background = 'transparent' }}
      >
        {/* Title + meta */}
        <div className="flex-1 min-w-0">
          <p
            className="font-bold text-base mb-2 leading-snug"
            style={{ color: '#0F2557' }}
          >
            {job.title}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {metaItems.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1 text-xs" style={{ color: '#6B7280' }}>
                <Icon size={11} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Badge + chevron */}
        <div className="flex items-center gap-3 shrink-0">
          <StatusBadge status={job.status} />
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown size={16} style={{ color: '#9CA3AF' }} aria-hidden="true" />
          </motion.div>
        </div>
      </button>

      {/* Expandable detail panel */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="px-6 pb-8 pt-4"
              style={{ borderTop: '1px solid #E5ECF8' }}
            >
              {/* Description */}
              {Array.isArray(job.jobDescription) && job.jobDescription.length > 0 && (
                <div className="mb-2">
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#153E8A' }}>
                    About the Role
                  </p>
                  <PortableText value={job.jobDescription} components={ptComponents} />
                </div>
              )}

              {/* Structured lists */}
              <div className="grid sm:grid-cols-2 gap-x-10">
                <div>
                  <BulletList items={job.responsibilities} label="Key Responsibilities" />
                  <BulletList items={job.niceToHave}       label="Nice to Have"         />
                </div>
                <div>
                  <BulletList items={job.requirements}     label="Requirements"          />
                </div>
              </div>

              {/* Apply CTA */}
              {job.status === 'Open' && job.applyEmail && (
                <div
                  className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4 pt-6"
                  style={{ borderTop: '1px solid #E5ECF8' }}
                >
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Interested? Send your CV and cover letter to:
                  </p>
                  <a
                    href={`mailto:${job.applyEmail}?subject=Application: ${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    style={{ background: '#153E8A', color: '#ffffff' }}
                  >
                    <Mail size={14} aria-hidden="true" />
                    Apply Now
                  </a>
                </div>
              )}

              {job.status === 'Closed' && (
                <p className="mt-6 text-xs" style={{ color: '#9CA3AF' }}>
                  This position is currently closed. Please check back later.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Skeleton loader ─── */
function SkeletonRow() {
  return (
    <div
      className="rounded-xl px-6 py-5 animate-pulse"
      style={{ border: '1px solid #E5ECF8' }}
    >
      <div className="h-4 w-1/3 rounded-full mb-3" style={{ background: '#EEF6FF' }} />
      <div className="flex gap-4">
        <div className="h-3 w-24 rounded-full" style={{ background: '#EEF6FF' }} />
        <div className="h-3 w-24 rounded-full" style={{ background: '#EEF6FF' }} />
        <div className="h-3 w-20 rounded-full" style={{ background: '#EEF6FF' }} />
      </div>
    </div>
  )
}

/* ─── Page ─── */
const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Careers() {
  const { data: jobs, loading, error, retry } = useCareers()

  const openJobs   = jobs.filter((j) => j.status === 'Open')
  const closedJobs = jobs.filter((j) => j.status === 'Closed')

  return (
    <div style={{ background: '#ffffff', color: '#0F2557' }}>

      {/* Hero */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={fadeIn}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-2" style={{ color: '#C69214' }}>
              Join Our Team
            </p>
            <h1
              className="font-black leading-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', color: '#0F2557' }}
            >
              Careers at Atmospatial
            </h1>
            <div className="w-14 h-1 rounded-full mb-6" style={{ background: '#153E8A' }} />
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#374151' }}>
              We are a small, research-driven team working on climate intelligence, atmospheric
              science, and geospatial analytics. If you're passionate about making weather
              and climate data actionable, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job listings */}
      <main className="px-6 pb-28">
        <div className="max-w-4xl mx-auto">

          {/* Error */}
          {error && (
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-lg mb-8"
              style={{ background: '#FEF3C7', border: '1px solid #F59E0B' }}
            >
              <AlertCircle size={16} style={{ color: '#B45309' }} className="shrink-0" />
              <p className="flex-1 text-sm font-semibold" style={{ color: '#92400E' }}>
                Couldn't load job openings. Please try again.
              </p>
              <button
                onClick={retry}
                className="inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: '#92400E' }}
              >
                <RefreshCw size={12} /> Retry
              </button>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="space-y-4">
              {[1, 2, 3].map((n) => <SkeletonRow key={n} />)}
            </div>
          )}

          {/* No jobs at all */}
          {!loading && !error && jobs.length === 0 && (
            <motion.div
              initial="hidden" animate="show" variants={fadeIn}
              className="text-center py-20"
            >
              <p className="text-lg font-semibold mb-2" style={{ color: '#0F2557' }}>
                No current openings.
              </p>
              <p style={{ color: '#6B7280' }}>Please check back later.</p>
            </motion.div>
          )}

          {/* Open positions */}
          {!loading && openJobs.length > 0 && (
            <section aria-labelledby="open-heading" className="mb-16">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-30px' }} variants={fadeIn}>
                <h2 id="open-heading" className="text-xl font-bold mb-1" style={{ color: '#0F2557' }}>
                  Open Positions
                </h2>
                <p className="text-sm mb-8" style={{ color: '#6B7280' }}>
                  {openJobs.length} opening{openJobs.length !== 1 ? 's' : ''} available
                </p>
                <div className="space-y-4">
                  {openJobs.map((job) => <JobRow key={job._id} job={job} />)}
                </div>
              </motion.div>
            </section>
          )}

          {/* Closed positions (collapsed, shown for transparency) */}
          {!loading && closedJobs.length > 0 && (
            <section aria-labelledby="closed-heading">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-30px' }} variants={fadeIn}>
                <h2 id="closed-heading" className="text-base font-semibold mb-6" style={{ color: '#9CA3AF' }}>
                  Closed Positions
                </h2>
                <div className="space-y-3">
                  {closedJobs.map((job) => <JobRow key={job._id} job={job} />)}
                </div>
              </motion.div>
            </section>
          )}

          {/* General applications prompt */}
          {!loading && !error && (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeIn}
              className="mt-16 p-8 rounded-2xl"
              style={{ background: '#EEF6FF', border: '1px solid #D7E2F3' }}
            >
              <h3 className="font-bold text-lg mb-2" style={{ color: '#0F2557' }}>
                Don't see a role that fits?
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#374151' }}>
                We're always looking to connect with talented researchers, engineers, and
                data scientists passionate about climate and atmospheric intelligence.
                Send us a general application and we'll keep it on file.
              </p>
              <a
                href="mailto:atmospatialanalyticsofficial@gmail.com?subject=General Application — Atmospatial Analytics"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-85"
                style={{ background: '#153E8A', color: '#ffffff' }}
              >
                <Mail size={14} aria-hidden="true" />
                Send a General Application
              </a>
            </motion.div>
          )}

        </div>
      </main>
    </div>
  )
}
