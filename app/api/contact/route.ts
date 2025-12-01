import { sanitizeInput, validateEmail } from "@/lib/security"
import {
  validateMethod,
  createSecureResponse,
  createErrorResponse,
  isValidContentType,
  validatePayloadSize,
} from "@/lib/api-security"

export async function POST(request: Request) {
  // Validate method
  if (!validateMethod(request.method, ["POST"])) {
    return createErrorResponse("Method not allowed", 405)
  }

  // Validate content type
  if (!isValidContentType(request.headers.get("content-type"))) {
    return createErrorResponse("Invalid content type", 400)
  }

  // Validate payload size
  if (!(await validatePayloadSize(request))) {
    return createErrorResponse("Payload too large", 413)
  }

  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email) {
      return createErrorResponse("Missing required fields", 400)
    }

    // Sanitize inputs
    const name = sanitizeInput(body.name)
    const email = sanitizeInput(body.email)
    const message = sanitizeInput(body.message || "")

    // Validate email format
    if (!validateEmail(email)) {
      return createErrorResponse("Invalid email format", 400)
    }

    // Validate lengths
    if (name.length < 2 || name.length > 100) {
      return createErrorResponse("Name must be between 2 and 100 characters", 400)
    }

    if (message.length > 5000) {
      return createErrorResponse("Message is too long", 400)
    }

    // TODO: Save to database or send email
    console.log("[Security] Contact form submission:", { name, email })

    return createSecureResponse({
      success: true,
      message: "Thank you for contacting HacFy. We will get back to you soon.",
    })
  } catch (error) {
    console.error("[Security] Contact form error:", error)
    return createErrorResponse("Internal server error", 500)
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
