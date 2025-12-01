"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const assessments = [
  {
    text: "HacFy's thorough VAPT assessment uncovered 47 critical vulnerabilities we never knew existed. Their detailed remediation guidance saved us months of work.",
    author: "Alex Rivera",
    role: "CTO, FinTech Solutions",
    company: "FinTech Solutions",
    rating: 5,
  },
  {
    text: "The penetration testing was comprehensive and professional. Real exploitation proof-of-concepts made it clear why security matters. Highly recommend HacFy.",
    author: "Emily Chen",
    role: "Security Manager, CloudTech Inc",
    company: "CloudTech Inc",
    rating: 5,
  },
  {
    text: "After HacFy's assessment, we reduced our attack surface by 84%. Their findings were accurate, actionable, and business-impact focused.",
    author: "James Mitchell",
    role: "VP Engineering, DataSecure",
    company: "DataSecure",
    rating: 5,
  },
  {
    text: "Best VAPT experience we've had. Fast turnaround, clear reporting, and excellent re-testing support. True partners in security.",
    author: "Sophia Chen",
    role: "Head of Security, MediCorp",
    company: "MediCorp",
    rating: 5,
  },
]

export default function AssessmentsTestimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % assessments.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % assessments.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + assessments.length) % assessments.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-black to-slate-950 border-y border-red-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 font-mono text-sm mb-4">ASSESSMENT RESULTS</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">What Our Clients Say About VAPT Assessments</h2>
          <p className="text-gray-400 mt-4">
            Real feedback from companies that improved their security posture with HacFy
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-black border-2 border-red-600/30 p-8 md:p-12 min-h-96 flex items-center shadow-2xl">
            {assessments.map((assessment, index) => (
              <div
                key={index}
                className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-center transition-all duration-700 ${
                  index === current ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(assessment.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="flex gap-4 mb-6">
                  <Quote className="w-10 h-10 text-red-500 flex-shrink-0" />
                </div>

                <p className="text-xl md:text-2xl text-white font-semibold mb-8 leading-relaxed">"{assessment.text}"</p>

                <div>
                  <p className="text-white font-bold text-lg">{assessment.author}</p>
                  <p className="text-red-400 text-sm">{assessment.role}</p>
                  <p className="text-gray-500 text-xs mt-1">{assessment.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {assessments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setIsAutoPlay(false)
                  }}
                  className={`h-3 rounded-full transition duration-300 ${
                    index === current ? "bg-red-600 w-8" : "bg-red-900/40 w-3 hover:bg-red-900/70"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
