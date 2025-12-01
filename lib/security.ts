import DOMPurify from "isomorphic-dompurify"

/**
 * Sanitize HTML content to prevent XSS attacks
 */
export function sanitizeHtml(dirty: string): string {
  if (typeof window !== "undefined") {
    return DOMPurify.sanitize(dirty)
  }
  return dirty
}

/**
 * Validate and sanitize user input
 */
export function sanitizeInput(input: string): string {
  if (!input) return ""

  return input.trim().replace(/[<>"']/g, (char) => {
    const map: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
    }
    return map[char] || char
  })
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate URL format
 */
export function validateUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Generate CSRF token
 */
export function generateCSRFToken(): string {
  const array = new Uint8Array(32)
  if (typeof window !== "undefined" && window.crypto) {
    window.crypto.getRandomValues(array)
  }
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("")
}

/**
 * Create secure headers object
 */
export function getSecureHeaders() {
  return {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'",
  }
}

/**
 * Validate input length
 */
export function validateLength(input: string, min: number, max: number): boolean {
  return input.length >= min && input.length <= max
}

/**
 * Check for SQL injection patterns
 */
export function hasSQLInjectionPatterns(input: string): boolean {
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION)\b)/gi,
    /(-{2}|\/\*|\*\/|;)/g,
    /('|"|`)/g,
  ]

  return sqlPatterns.some((pattern) => pattern.test(input))
}

/**
 * Rate limit check (use with Redis in production)
 */
export function createRateLimiter(maxRequests = 100, windowMs = 60000) {
  const requests = new Map<string, number[]>()

  return function isLimited(identifier: string): boolean {
    const now = Date.now()
    const userRequests = requests.get(identifier) || []

    // Remove old requests outside window
    const recentRequests = userRequests.filter((time) => now - time < windowMs)

    if (recentRequests.length >= maxRequests) {
      return true
    }

    recentRequests.push(now)
    requests.set(identifier, recentRequests)

    return false
  }
}
