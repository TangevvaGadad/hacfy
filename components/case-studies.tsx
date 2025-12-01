"use client"

import { TrendingUp } from "lucide-react"

const studies = [
  {
    industry: "FinTech",
    metric: "84%",
    description: "Reduced attack surface by 84% — prevented account takeover.",
  },
  {
    industry: "Healthcare",
    metric: "150K+",
    description: "Secured 150K+ patient records from API exposure.",
  },
  {
    industry: "EdTech",
    metric: "28",
    description: "Found 28 critical flaws including RCE and IDOR.",
  },
]

export default function CaseStudies() {
  return (
    <section className="w-full py-20 px-4 bg-black border-y border-red-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 font-mono text-sm mb-4">REAL RESULTS</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Impact-Driven Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((study, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-gradient-to-r from-slate-950 to-slate-900 border-l-4 border-red-600 hover:shadow-2xl hover:neon-glow transition duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-600/10">
                  <TrendingUp className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <p className="text-red-400 font-mono text-sm font-semibold">{study.industry}</p>
                  <p className="text-4xl font-black text-white my-2">{study.metric}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{study.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
