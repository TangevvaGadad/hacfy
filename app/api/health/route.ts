import { validateMethod, createSecureResponse, createErrorResponse } from "@/lib/api-security"

export async function GET(request: Request) {
  // Validate method
  if (!validateMethod(request.method, ["GET"])) {
    return createErrorResponse("Method not allowed", 405)
  }

  return createSecureResponse({
    status: "healthy",
    timestamp: new Date().toISOString(),
  })
}
