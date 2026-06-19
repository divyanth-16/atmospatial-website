/**
 * Contact form service layer.
 * Handles validation and submission to the /api/contact serverless function.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Validates the contact form payload on the client before sending.
 * Returns a map of field -> error message. Empty object means valid.
 */
export function validateContactForm(form) {
  const errors = {}

  if (!form.name || form.name.trim().length < 2) {
    errors.name = 'Please enter your full name.'
  }

  if (!form.email || !EMAIL_REGEX.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!form.message || form.message.trim().length < 10) {
    errors.message = 'Please add a few more details (at least 10 characters).'
  }

  return errors
}

/**
 * Submits the contact form to the backend API.
 * Throws an Error with a user-friendly message on failure.
 */
export async function submitContactForm(form) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: form.name.trim(),
      email: form.email.trim(),
      organization: form.organization?.trim() || '',
      inquiryType: form.inquiryType || 'General Inquiry',
      message: form.message.trim(),
      // Honeypot field — real users never fill this in.
      // Bots that auto-fill every input will trip it.
      company_website: form.company_website || '',
    }),
  })

  let data = null
  try {
    data = await response.json()
  } catch {
    // Non-JSON response (e.g. network/server error page)
  }

  if (!response.ok) {
    const message = data?.error || 'Something went wrong while sending your message. Please try again.'
    throw new Error(message)
  }

  return data
}
