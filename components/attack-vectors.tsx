"use client"

import { AlertCircle } from "lucide-react"

const vectors = [
  {
    title: "Authentication Flaws",
    description: "Session and credential vulnerabilities",
  },
  {
    title: "Access Control Issues",
    description: "IDOR & Broken Access Control",
  },
  {
    title: "API Misconfigurations",
    description: "Insecure API endpoints & logic",
  },
  {
    title: "Cloud IAM Risks",
    description: "Policy and permission flaws",
  },
  {
    title: "Server Misconfigurations",
    description: "Weak server settings & defaults",
  },
  {
    title: "OWASP & SANS Issues",
    description: "Top 10 & SANS 25 vulnerabilities",
  },
  {
    title: "Payment Security",
    description: "Financial data & transaction risks",
  },
  {
    title: "Data Exposure",
    description: "Encryption & information leaks",
  },
]

export default function AttackVectorsGrid() {
  return (
    <section id="vectors" className="w-full py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 font-mono text-sm mb-4">ATTACK SURFACE</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">What We Secure</h2>
          <p className="text-gray-400 text-lg mt-4">Comprehensive coverage across all critical vulnerability areas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {vectors.map((vector, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-slate-950 border border-red-900/30 hover:border-red-500 hover:bg-slate-900/50 transition duration-300 hover:scale-105 transform cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-red-500 rounded-tl-lg opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-red-500 rounded-br-lg opacity-0 group-hover:opacity-100 transition" />

              <div className="mb-4">
                <AlertCircle className="w-6 h-6 text-red-500 group-hover:text-red-400" />
              </div>
              <h3 className="text-white font-bold mb-2">{vector.title}</h3>
              <p className="text-gray-400 text-sm">{vector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
