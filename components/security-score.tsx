"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const riskLevels = ["Low Risk", "Medium Risk", "High Risk"]

export default function SecurityScoreMeter() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [riskLevel, setRiskLevel] = useState<number>(2)

  const handleCheck = () => {
    if (input.trim()) {
      const randomRisk = Math.floor(Math.random() * 3)
      setRiskLevel(randomRisk)
      setResult(input)
    }
  }

  return (
    <section className="w-full py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-red-500 font-mono text-sm mb-4">ASSESS NOW</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Check Your Cyber Risk Level</h2>
          <p className="text-gray-400 text-lg mt-4">FREE security risk assessment in seconds</p>
        </div>

        <div className="p-8 rounded-lg bg-gradient-to-b from-slate-950 to-slate-900 border border-red-900/30 cyber-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="block text-white font-semibold">Website / App Name</label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., myapp.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-red-900/30 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition"
              />
              <button
                onClick={handleCheck}
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 flex items-center justify-center gap-2 hover:neon-glow-strong"
              >
                Check Risk Level <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="relative w-48 h-24">
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#333333" strokeWidth="8" />
                  <path d="M 20 100 A 80 80 0 0 1 80 25" fill="none" stroke="#22C55E" strokeWidth="8" />
                  <path d="M 80 25 A 80 80 0 0 1 140 25" fill="none" stroke="#EAB308" strokeWidth="8" />
                  <path d="M 140 25 A 80 80 0 0 1 180 100" fill="none" stroke="#DC2626" strokeWidth="8" />

                  <g
                    style={{
                      transform: `rotate(${result ? -45 + riskLevel * 45 : -45}deg)`,
                      transformOrigin: "100px 100px",
                      transition: "transform 0.6s ease-out",
                    }}
                  >
                    <line x1="100" y1="100" x2="100" y2="30" stroke="#FFFFFF" strokeWidth="3" />
                    <circle cx="100" cy="100" r="5" fill="#FFFFFF" />
                  </g>
                </svg>
              </div>

              {result && (
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm mb-2">{result}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl font-bold text-white">Your Risk:</span>
                    <span
                      className={`text-2xl font-bold ${
                        riskLevel === 0 ? "text-green-500" : riskLevel === 1 ? "text-yellow-500" : "text-red-500"
                      }`}
                    >
                      {riskLevels[riskLevel]}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
