/**
 * Validate API request method
 */
export function validateMethod(method: string | undefined, allowed: string[]): boolean {
  return allowed.includes(method?.toUpperCase() || "")
}

/**
 * Create secure API response
 */
export function createSecureResponse(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Content-Type": "application/json",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
    },
  })
}

/**
 * Create error response
 */
export function createErrorResponse(message: string, status = 400) {
  return Response.json(
    {
      error: message,
      timestamp: new Date().toISOString(),
    },
    {
      status,
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}

/**
 * Validate Content-Type header
 */
export function isValidContentType(contentType: string | null, allowed: string[] = ["application/json"]): boolean {
  if (!contentType) return false
  return allowed.some((type) => contentType.includes(type))
}

/**
 * Get client IP address safely
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const realIp = request.headers.get("x-real-ip")

  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }
  if (realIp) {
    return realIp
  }

  return "unknown"
}

/**
 * Validate JSON payload size
 */
export const MAX_PAYLOAD_SIZE = 1024 * 1024 // 1MB

export async function validatePayloadSize(request: Request): Promise<boolean> {
  const contentLength = request.headers.get("content-length")
  if (!contentLength) return true

  const size = Number.parseInt(contentLength, 10)
  return size <= MAX_PAYLOAD_SIZE
}
