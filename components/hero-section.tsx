"use client"

import { useEffect, useState } from "react"
import { ChevronRight, Shield, Lock, Zap, Target } from "lucide-react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const workflowSteps = [
    { label: "Reconnaissance", icon: Target, color: "from-red-600 to-red-500" },
    { label: "Scanning", icon: Zap, color: "from-red-500 to-orange-500" },
    { label: "Exploitation", icon: Lock, color: "from-orange-500 to-yellow-500" },
    { label: "Verification", icon: Shield, color: "from-yellow-500 to-red-600" },
    { label: "Reporting", icon: ChevronRight, color: "from-red-600 to-red-700" },
  ]

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 bg-black">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D60000" stopOpacity="0" />
            <stop offset="50%" stopColor="#D60000" stopOpacity="1" />
            <stop offset="100%" stopColor="#D60000" stopOpacity="0" />
            <animate attributeName="x1" values="0%;100%;0%" dur="3s" repeatCount="indefinite" />
            <animate attributeName="x2" values="100%;200%;100%" dur="3s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
        <line x1="0" y1="150" x2="1200" y2="150" stroke="url(#lineGrad)" strokeWidth="2" />
        <line x1="0" y1="450" x2="1200" y2="450" stroke="url(#lineGrad)" strokeWidth="2" />
        <circle cx="100" cy="150" r="4" fill="#D60000" opacity="0.5" />
        <circle cx="1100" cy="450" r="4" fill="#D60000" opacity="0.5" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side Content */}
          <div className="space-y-8">
            <div>
              <p className="text-red-500 font-mono text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Enterprise VAPT Services
              </p>
              <h1 className="text-6xl md:text-7xl font-black text-white leading-tight mb-4">
                We Hack Your Systems
                <span className="block bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                  Before Hackers Do
                </span>
              </h1>
              <p className="text-gray-400 font-mono text-sm mt-6 leading-relaxed border-l-2 border-red-600 pl-4">
                {"> End-to-end penetration testing for Web, Mobile, Network, Cloud & APIs"}
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Real exploitation, proof-of-concept evidence, and business-impact reporting. We don't just find
              vulnerabilities—we prove their impact and help you fix them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 neon-glow-strong hover:shadow-2xl">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Request VAPT Proposal
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-red-600 text-white font-bold rounded-lg hover:bg-red-600/10 transition duration-300 transform hover:scale-105">
                Get Free Assessment
              </button>
            </div>

            <div className="flex gap-8 pt-6 border-t border-gray-700">
              <div>
                <p className="text-2xl font-bold text-red-600">500+</p>
                <p className="text-sm text-gray-400">Successful Assessments</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">99.9%</p>
                <p className="text-sm text-gray-400">Vulnerability Detection</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">24h</p>
                <p className="text-sm text-gray-400">Initial Report</p>
              </div>
            </div>
          </div>

          <div className="relative h-full hidden lg:flex items-center justify-center">
            {/* Animated Radar */}
            <div className="relative w-80 h-80">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid">
                <defs>
                  <radialGradient id="radarGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D60000" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#D60000" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {[1, 2, 3, 4].map((i) => (
                  <circle
                    key={i}
                    cx="150"
                    cy="150"
                    r={30 * i}
                    fill="none"
                    stroke="#D60000"
                    strokeWidth="1"
                    opacity={0.3}
                  />
                ))}

                <g className="animate-spin" style={{ animation: "spin 6s linear infinite" }}>
                  <line x1="150" y1="150" x2="150" y2="30" stroke="#22C55E" strokeWidth="2" />
                  <circle cx="150" cy="30" r="3" fill="#22C55E" />
                </g>

                {[45, 90, 135, 270].map((angle) => {
                  const rad = (angle * Math.PI) / 180
                  const x = 150 + 100 * Math.cos(rad)
                  const y = 150 + 100 * Math.sin(rad)
                  return (
                    <circle
                      key={angle}
                      cx={x}
                      cy={y}
                      r="5"
                      fill={angle % 180 === 0 ? "#DC2626" : "#22C55E"}
                      className="animate-pulse"
                    />
                  )
                })}
              </svg>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-transparent via-red-600/10 to-transparent h-px mb-8" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon
              const isActive = index === activeStep
              return (
                <div
                  key={index}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    isActive ? "scale-105" : "scale-95"
                  }`}
                >
                  <div
                    className={`p-6 rounded-lg border transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-br from-red-600/30 to-red-700/20 border-red-500 shadow-lg neon-glow"
                        : "bg-gray-900/50 border-gray-700 hover:border-red-600"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 bg-gradient-to-br ${step.color} transition-transform duration-500 ${
                        isActive ? "rotate-12 scale-110" : "rotate-0"
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p
                      className={`font-semibold transition-colors duration-500 ${isActive ? "text-white" : "text-gray-300"}`}
                    >
                      {step.label}
                    </p>
                    {isActive && (
                      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    )}
                  </div>

                  {index < workflowSteps.length - 1 && (
                    <div
                      className={`absolute top-1/2 -right-2 md:-right-4 w-4 h-0.5 transition-all duration-500 ${
                        index < activeStep ? "bg-green-500" : "bg-gray-700"
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-transparent via-red-600/10 to-transparent h-px mt-8" />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
