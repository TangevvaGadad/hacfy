"use client"

import { CheckCircle2 } from "lucide-react"

const steps = [
  "Scope & Planning",
  "Recon & Attack Surface",
  "Vulnerability Analysis",
  "Exploitation (Manual)",
  "Risk Assessment",
  "Reporting & PoC",
  "Re-Testing & Sign-Off",
]

export default function ProcessTimeline() {
  return (
    <section id="process" className="w-full py-20 px-4 bg-black border-y border-red-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 font-mono text-sm mb-4">OUR METHODOLOGY</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">VAPT Process Pipeline</h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-600/20 via-red-500 to-red-600/20 transform -translate-y-1/2">
            <div
              className="h-full bg-red-500 animate-pulse"
              style={{
                width: "33%",
                boxShadow: "0 0 20px rgba(212, 0, 0, 0.8)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-2">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center border-2 border-red-900 hover:neon-glow-strong transition duration-300 group cursor-pointer">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-mono text-red-400">{index + 1}</p>
                  <p className="text-white font-semibold text-sm mt-2 px-2 leading-tight">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
