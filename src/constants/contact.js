/** Shared mailto for Let's Connect + footer — opens default mail app with To / Subject / Body filled (same idea as tel: opening the phone handler). */
export const CONTACT_EMAIL = 'shahnavazpatni@gmail.com'

const DEFAULT_SUBJECT = 'Contact from portfolio website'
const DEFAULT_BODY = 'Hi Shahnavaz,\n\n'

export const MAILTO_COMPOSE_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  DEFAULT_SUBJECT
)}&body=${encodeURIComponent(DEFAULT_BODY)}`

export const PHONE_DISPLAY = '+91 78789 27062'
export const PHONE_TEL_HREF = 'tel:+917878927062'
