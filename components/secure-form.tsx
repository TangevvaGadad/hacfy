"use client"

import type React from "react"

import { useState } from "react"
import { sanitizeInput, validateEmail, validateLength } from "@/lib/security"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SecureFormProps {
  onSubmit: (data: { name: string; email: string }) => Promise<void>
  isLoading?: boolean
}

export function SecureForm({ onSubmit, isLoading = false }: SecureFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    // Sanitize input on change
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizeInput(value),
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Validate name
    if (!validateLength(formData.name, 2, 100)) {
      newErrors.name = "Name must be between 2 and 100 characters"
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)
    try {
      await onSubmit(formData)
      setFormData({ name: "", email: "" })
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : "An error occurred",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          minLength={2}
          maxLength={100}
          className="w-full"
          disabled={loading || isLoading}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          maxLength={255}
          className="w-full"
          disabled={loading || isLoading}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {errors.submit && <p className="text-red-500 text-sm">{errors.submit}</p>}

      <Button type="submit" disabled={loading || isLoading} className="w-full bg-red-600 hover:bg-red-700">
        {loading || isLoading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  )
}
