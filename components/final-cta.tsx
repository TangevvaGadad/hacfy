"use client"

import { Shield } from "lucide-react"

export default function FinalCtaSection() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 cyber-grid" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-lg bg-white/10 backdrop-blur">
            <Shield className="w-12 h-12 text-white" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-balance">
          Ready to Strengthen Your Security Posture?
        </h2>

        <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join enterprise companies that trust HacFy for comprehensive penetration testing and vulnerability assessment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Book a 30-Minute VAPT Discussion
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300 transform hover:scale-105">
            Get Your VAPT Quotation
          </button>
        </div>

        <p className="text-white/70 text-sm mt-8">
          Response within 24 hours • No commitment required • 100% Confidential
        </p>
      </div>
    </section>
  )
}
