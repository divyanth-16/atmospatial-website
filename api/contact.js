// /api/contact.js
//
// Vercel Serverless Function — handles contact form submissions and
// sends an email via Nodemailer to the Atmospatial inbox.
//
// Required environment variables (set in Vercel dashboard, or .env.local for dev):
//   SMTP_HOST       e.g. smtp.gmail.com
//   SMTP_PORT       e.g. 465
//   SMTP_SECURE     "true" for port 465, "false" for port 587
//   SMTP_USER       the sending mailbox address
//   SMTP_PASS       app password / SMTP password (NOT your normal Gmail password)
//   CONTACT_TO      destination inbox, e.g. atmospatialanalyticsofficial@gmail.com
//
// See README in this folder (or the project README) for Gmail App Password setup.

import nodemailer from 'nodemailer'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const VALID_INQUIRY_TYPES = [
  'Product Partnership',
  'Research Collaboration',
  'Government / Institutional Project',
  'Early Access Request',
  'Investment Inquiry',
  'General Inquiry',
]

// Very simple in-memory rate limiter (per serverless instance).
// Not a substitute for a real WAF/rate-limit service, but stops naive
// rapid-fire abuse within a warm function instance.
const submissionLog = new Map()
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5

function isRateLimited(ip) {
  const now = Date.now()
  const entry = submissionLog.get(ip) || { count: 0, windowStart: now }

  if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    entry.count = 0
    entry.windowStart = now
  }

  entry.count += 1
  submissionLog.set(ip, entry)

  return entry.count > RATE_LIMIT_MAX
}

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  // ── Basic rate limiting ──
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    'unknown'

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a minute.' })
  }

  const {
    name,
    email,
    organization = '',
    inquiryType = 'General Inquiry',
    message,
    company_website = '', // honeypot field
  } = req.body || {}

  // ── Honeypot spam check ──
  // Real visitors never see or fill this field. If it's populated, silently
  // pretend success so bots don't learn the form rejected them.
  if (company_website && company_website.trim().length > 0) {
    return res.status(200).json({ success: true })
  }

  // ── Server-side validation ──
  const errors = {}

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.name = 'A valid name is required.'
  }
  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    errors.email = 'A valid email address is required.'
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }
  if (inquiryType && !VALID_INQUIRY_TYPES.includes(inquiryType)) {
    errors.inquiryType = 'Invalid inquiry type.'
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: 'Please check the form for errors.', fields: errors })
  }

  // ── Environment variable check ──
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error('Missing required SMTP environment variables.')
    return res.status(500).json({ error: 'Server is not configured to send email. Please try again later.' })
  }

  // ── Build and send the email ──
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    const safeName = escapeHtml(name.trim())
    const safeEmail = escapeHtml(email.trim())
    const safeOrg = escapeHtml(organization.trim() || '—')
    const safeType = escapeHtml(inquiryType)
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br />')

    const textBody = [
      'Collaboration Request — Atmospatial',
      '',
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Organization: ${organization.trim() || '—'}`,
      `Inquiry Type: ${inquiryType}`,
      '',
      'Message:',
      message.trim(),
    ].join('\n')

    const htmlBody = `
      <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color:#0F2557; max-width:560px;">
        <h2 style="color:#153E8A; margin-bottom: 4px;">NEW INBOUND LEAD</h2>
        <p style="color:#6B7280; margin-top:0;">ATMOSPATIAL ANALYTICS PVT. LTD.</p>
        <table style="width:100%; border-collapse: collapse; margin: 24px 0;">
          <tr><td style="padding:8px 0; color:#000000; width:140px; font-size:16px;">Name</td><td style="padding:8px 0; font-size:16px;"><strong>${safeName}</strong></td></tr>
          <tr><td style="padding:8px 0; color:#000000; font-size:16px;">Email</td><td style="padding:8px 0;font-size:16px;">${safeEmail}</td></tr>
          <tr><td style="padding:8px 0; color:#000000; font-size:16px;">Organization</td><td style="padding:8px 0; font-size:16px;">${safeOrg}</td></tr>
          <tr><td style="padding:8px 0; color:#000000; font-size:16px;">Inquiry Type</td><td style="padding:8px 0; font-size:16px;">${safeType}</td></tr>
        </table>
        <p style="color:#000000; margin-bottom: 6px; font-weight:600; font-size:16px;">Message</p>
        <div style="padding:16px; border:1px solid #E5ECF8; border-radius:8px; line-height:1.6; font-size:20px;">
          ${safeMessage}
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"Atmospatial Website" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email.trim(),
      subject: 'Collaboration Request — Atmospatial',
      text: textBody,
      html: htmlBody,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Failed to send contact email:', err)
    return res.status(500).json({ error: 'Failed to send your message. Please try again or email us directly.' })
  }
}
