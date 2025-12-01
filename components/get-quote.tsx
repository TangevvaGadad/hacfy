"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"

export default function GetQuoteSection() {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    assessmentType: "web",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ company: "", email: "", assessmentType: "web", message: "" })
    }, 3000)
  }

  return (
    <section className="w-full py-20 px-4 bg-black border-y border-red-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-red-500 font-mono text-sm mb-4">QUICK QUOTE</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Get Your VAPT Quote Today</h2>
          <p className="text-gray-400 mt-4">
            Tell us about your assessment needs and we'll provide a customized quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold mb-2">Customized Assessment</h3>
                  <p className="text-gray-400 text-sm">
                    Tailored VAPT scope based on your applications and infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold mb-2">24-Hour Turnaround</h3>
                  <p className="text-gray-400 text-sm">
                    Quick quote generation with detailed breakdown of deliverables.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold mb-2">No Hidden Costs</h3>
                  <p className="text-gray-400 text-sm">
                    Transparent pricing with all assessment components clearly defined.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold mb-2">Expert Support</h3>
                  <p className="text-gray-400 text-sm">Dedicated account manager for your entire VAPT engagement.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-slate-900 to-black border border-red-900/30 rounded-lg p-8 space-y-6"
            >
              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black border border-red-900/30 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@company.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black border border-red-900/30 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition duration-300"
                />
              </div>

              <div>
                <label htmlFor="assessmentType" className="block text-white font-semibold mb-2">
                  Assessment Type
                </label>
                <select
                  id="assessmentType"
                  name="assessmentType"
                  value={formData.assessmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black border border-red-900/30 text-white focus:outline-none focus:border-red-600 transition duration-300"
                >
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile Application</option>
                  <option value="network">Network Infrastructure</option>
                  <option value="cloud">Cloud Environment</option>
                  <option value="api">API Security</option>
                  <option value="all">Complete VAPT</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your assessment needs..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-black border border-red-900/30 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition duration-300 resize-none"
                />
              </div>

              {submitted ? (
                <div className="w-full py-3 bg-green-600 rounded-lg text-white font-semibold text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Quote request submitted! We'll contact you soon.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Get Quote Now
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
