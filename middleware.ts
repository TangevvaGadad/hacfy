import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// Rate limiting store (in production, use Redis)
const requestCounts = new Map<string, { count: number; timestamp: number }>()

// Security middleware
export function middleware(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

  const now = Date.now()
  const record = requestCounts.get(ip)

  if (record) {
    // Reset counter after 1 minute
    if (now - record.timestamp > 60000) {
      requestCounts.set(ip, { count: 1, timestamp: now })
    } else {
      record.count++
      // Block if more than 100 requests per minute
      if (record.count > 100) {
        return new NextResponse("Too many requests", { status: 429 })
      }
    }
  } else {
    requestCounts.set(ip, { count: 1, timestamp: now })
  }

  const response = NextResponse.next()

  // Remove server identification
  response.headers.delete("x-powered-by")
  response.headers.set("X-Powered-By", "HacFy Security")

  // Add CORS headers
  response.headers.set("Access-Control-Allow-Credentials", "true")
  response.headers.set("Access-Control-Allow-Origin", process.env.NEXT_PUBLIC_APP_URL || "*")
  response.headers.set("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT")
  response.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  )

  return response
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
}
