"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    text: "HacFy helped us discover vulnerabilities that three auditors missed. Their exploitation skills were impressive.",
    author: "Sarah Chen",
    role: "CISO, TechCorp Finance",
  },
  {
    text: "Professional, fast, and business-friendly reporting. They explained every finding in terms our team could understand and act on.",
    author: "Marcus Johnson",
    role: "Security Lead, CloudScale",
  },
  {
    text: "Excellent exploitation skills and clean remediation guidance. HacFy went above and beyond with follow-up support.",
    author: "Priya Patel",
    role: "VP Security, DataVault Health",
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  return (
    <section id="testimonials" className="w-full py-20 px-4 bg-black border-y border-red-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-red-500 font-mono text-sm mb-4">CLIENT TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Trusted by Leading Organizations</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg bg-gradient-to-br from-slate-950 to-slate-900 border border-red-900/30 p-8 md:p-12 min-h-96 flex items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-center transition-opacity duration-500 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex gap-4 mb-6">
                  <Quote className="w-8 h-8 text-red-500 flex-shrink-0" />
                </div>
                <p className="text-xl md:text-2xl text-white font-semibold mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-white font-bold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="p-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setIsAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition duration-300 ${
                    index === current ? "bg-red-600 w-6" : "bg-red-900/30 w-2"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
