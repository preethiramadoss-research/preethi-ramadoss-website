export const BAD_WORDS = [
  'spam', 'scam', 'fraud', 'cheap', 'free money', 'click here',
  'urgent', 'winner', 'prize', 'lottery', 'casino', 'gambling',
  'viagra', 'cialis', 'pharmacy', 'pills', 'weight loss',
  'make money', 'work from home', 'earn $', 'bitcoin', 'crypto',
  'nigerian', 'prince', 'inheritance', 'wire transfer',
  'seo', 'backlink', 'pbn', 'link exchange', 'guest post'
]

export function containsBadWords(text: string): boolean {
  const lower = text.toLowerCase()
  return BAD_WORDS.some(word => lower.includes(word))
}

export function isSpamPattern(text: string): boolean {
  const lower = text.toLowerCase()
  const spamIndicators = [
    /https?:\/\//i,
    /www\./i,
    /\.com/i,
    /\d{10,}/,
    /(.)\1{4,}/,
    /buy now/i,
    /order now/i,
    /limited time/i,
    /act now/i,
    /congratulations/i,
    /you have been selected/i,
    /click (the )?link/i,
    /visit (our )?website/i,
    /call (us )?now/i,
    /text (us )?now/i,
    /message (us )?now/i,
    /dm (us )?now/i,
    /contact (us )?now/i,
    /email (us )?now/i,
    /reach (out )?now/i,
    /check (out )?now/i,
    /follow (us )?now/i,
    /like (and )?share/i,
    /subscribe/i,
    /notification/i,
    /turn on/i,
    /bell icon/i,
  ]
  return spamIndicators.some(pattern => pattern.test(lower))
}

export function sanitizeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const DISPOSABLE_DOMAINS = [
  'mailinator.com', 'guerrillamail.com', 'tempmail.com', 'throwaway.email',
  'yopmail.com', '10minutemail.com', 'fakeinbox.com', 'temp-mail.org'
]

export function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase()
  return domain ? DISPOSABLE_DOMAINS.includes(domain) : false
}

const RATE_LIMIT_WINDOW = 60_000
const RATE_LIMIT_MAX = 3
const rateLimitStore = new Map<string, { count: number; firstAttempt: number }>()

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now - record.firstAttempt > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, firstAttempt: now })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 }
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 }
  }

  record.count += 1
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count }
}
