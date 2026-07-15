import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail, MapPin, Globe, Send, CheckCircle2, AlertCircle, ChevronRight,
} from 'lucide-react'
import { validateContactForm, submitContactForm } from '../services/contactService'

/* ─── Tokens (matches Home.jsx / About.jsx) ─── */
// Primary Blue:  #153E8A
// Mid Blue:      #1E5BBD
// Gold:          #C69214
// Light bg:      #EEF6FF
// Dark Text:     #0F2557
// Body Text:     #374151

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'atmospatialanalyticsofficial@gmail.com',
    href: 'mailto:atmospatialanalyticsofficial@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Visakhapatnam, Andhra Pradesh, India',
    href: 'https://maps.google.com/?q=Visakhapatnam,+Andhra+Pradesh,+India',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'atmospatial.com',
    href: 'https://atmospatial.com',
  },
]

const inquiryTypes = [
  'Product Partnership',
  'Research Collaboration',
  'Government / Institutional Project',
  'Early Access Request',
  'Investment Inquiry',
  'General Inquiry',
]

const steps = [
  { n: '01', text: 'We review your inquiry.' },
  { n: '02', text: 'Our team evaluates requirements.' },
  { n: '03', text: 'We respond within 24–48 business hours.' },
]

const initialForm = {
  name: '',
  email: '',
  organization: '',
  inquiryType: '',
  message: '',
  company_website: '', // honeypot — kept off-screen, see input below
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [fieldErrors, setFieldErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const errors = validateContactForm(form)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setStatus('error')
      setErrorMessage('Please check the highlighted fields below.')
      return
    }

    setSubmitting(true)
    setStatus(null)
    setErrorMessage('')

    try {
      await submitContactForm(form)
      setStatus('success')
      setForm(initialForm)
      setFieldErrors({})
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div style={{ background: '#ffffff', color: '#0F2557' }}>

      {/* ══════════════════════════════
          1 — HERO
      ══════════════════════════════ */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={fadeIn}>
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-2"
              style={{ color: '#C69214' }}
            >
              Contact Us
            </p>
            <h1
              className="font-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: '#0F2557' }}
            >
              Let's Build Better Climate Intelligence
            </h1>
            <div className="w-14 h-1 rounded-full mb-6" style={{ background: '#153E8A' }} />
            <p className="text-lg leading-relaxed max-w-xl" style={{ color: '#374151' }}>
              Whether you're a government agency, research institution, enterprise, or
              investor, we'd be glad to discuss how Atmospatial can support your mission.
            </p>
          </motion.div>
        </div>
      </section>


     {/* ══════════════════════════════
          3 — CONTACT FORM
      ══════════════════════════════ */}
      <section className="px-6 pb-24" style={{ background: '#EEF6FF' }}>
        <div className="max-w-3xl mx-auto pt-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#0F2557' }}>
              Send Us a Message
            </h2>
            <p className="mb-10" style={{ color: '#6B7280' }}>
              Fields marked with * are required.
            </p>

            {/* Success state */}
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-16 text-center"
              >
                <CheckCircle2 size={36} style={{ color: '#153E8A' }} className="mx-auto mb-5" />
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0F2557' }}>
                  Message sent
                </h3>
                <p className="max-w-md mx-auto" style={{ color: '#6B7280' }}>
                  Thank you for reaching out. Our team will review your message and respond
                  within 24–48 business hours.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="mt-7 text-sm font-semibold underline"
                  style={{ color: '#153E8A' }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>

                {status === 'error' && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mb-6 text-sm"
                    style={{ color: '#B45309' }}
                  >
                    <AlertCircle size={15} />
                    {errorMessage}
                  </motion.div>
                )}

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <Field
                    label="Full Name *"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dr. Jane Smith"
                    error={fieldErrors.name}
                  />
                  <Field
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@organization.in"
                    error={fieldErrors.email}
                  />
                </div>

                <div className="mb-6">
                  <Field
                    label="Organization"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Ministry / Company / University"
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: '#6B7280' }}
                  >
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                    style={{ border: '1px solid #D7E2F3', color: '#0F2557' }}
                    onFocus={(e) => (e.target.style.borderColor = '#153E8A')}
                    onBlur={(e) => (e.target.style.borderColor = '#D7E2F3')}
                  >
                    <option value="">Select inquiry type…</option>
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-2">
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: '#6B7280' }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your use case, project, or question in detail…"
                    className="w-full bg-white rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
                    style={{ border: `1px solid ${fieldErrors.message ? '#DC9A3C' : '#D7E2F3'}`, color: '#0F2557' }}
                    onFocus={(e) => (e.target.style.borderColor = '#153E8A')}
                    onBlur={(e) => (e.target.style.borderColor = fieldErrors.message ? '#DC9A3C' : '#D7E2F3')}
                  />
                  {fieldErrors.message && (
                    <p className="text-xs mt-1.5" style={{ color: '#B45309' }}>{fieldErrors.message}</p>
                  )}
                </div>

                {/* Honeypot — visually hidden, off-screen, not just display:none,
                    so it still reads naturally to most bots while real users never see it. */}
                <div
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
                >
                  <label htmlFor="company_website">Company Website</label>
                  <input
                    id="company_website"
                    type="text"
                    name="company_website"
                    value={form.company_website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                  className="mt-6 w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: '#153E8A', color: '#ffffff' }}
                >
                  {submitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 rounded-full"
                        style={{ borderColor: 'rgba(255,255,255,0.35)', borderTopColor: '#ffffff' }}
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>



      {/* ══════════════════════════════
          2 — CONTACT INFORMATION
          Clean rows, icon + content, subtle dividers
      ══════════════════════════════ */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeIn}
            className="divide-y"
            style={{ borderColor: '#E5ECF8' }}
          >
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-5 py-5 group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                    style={{ background: 'rgba(21,62,138,0.07)' }}
                  >
                    <Icon size={16} style={{ color: '#153E8A' }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#9CA3AF' }}>
                      {info.label}
                    </p>
                    <p className="font-medium" style={{ color: '#0F2557' }}>
                      {info.value}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: '#C69214' }}
                  />
                </a>
              )
            })}
          </motion.div>
        </div>
      </section>

 



      {/* ══════════════════════════════
          4 — WHAT HAPPENS NEXT
      ══════════════════════════════ */}
      {/* <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold mb-10" style={{ color: '#0F2557' }}>
              What happens next?
            </h2>
            <div className="space-y-7">
              {steps.map((step) => (
                <div key={step.n} className="flex items-start gap-5">
                  <span
                    className="text-sm font-bold pt-0.5 shrink-0"
                    style={{ color: '#C69214', width: '28px' }}
                  >
                    {step.n}
                  </span>
                  <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}


      {/* ══════════════════════════════
          5 — FINAL CTA
          Lightweight, no heavy gradient
      ══════════════════════════════ */}
      <section className="px-6 py-20" style={{ borderTop: '1px solid #E5ECF8' }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeIn}
          className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <h2 className="text-2xl font-bold" style={{ color: '#0F2557' }}>
            Interested in collaborating with Atmospatial?
          </h2>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm whitespace-nowrap"
              style={{ background: '#C69214', color: '#0F2557' }}
            >
              Start a Conversation <ChevronRight size={15} />
            </motion.button>
          </a>
        </motion.div>
      </section>

    </div>
  )
}

/* ─── Reusable text input ─── */
function Field({ label, name, value, onChange, placeholder, type = 'text', error }) {
  return (
    <div>
      <label
        className="block text-xs font-semibold uppercase tracking-wider mb-2"
        style={{ color: '#6B7280' }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
        style={{ border: `1px solid ${error ? '#DC9A3C' : '#D7E2F3'}`, color: '#0F2557' }}
        onFocus={(e) => (e.target.style.borderColor = '#153E8A')}
        onBlur={(e) => (e.target.style.borderColor = error ? '#DC9A3C' : '#D7E2F3')}
      />
      {error && <p className="text-xs mt-1.5" style={{ color: '#B45309' }}>{error}</p>}
    </div>
  )
}
