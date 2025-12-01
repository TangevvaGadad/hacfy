"use client"

import { Shield, CheckCircle, BarChart3, Zap, Lock, Eye } from "lucide-react"

const trustItems = [
  {
    icon: Shield,
    title: "Certified Experts",
    description: "CEH, OSCP, CNSP certified professionals",
  },
  {
    icon: Zap,
    title: "Manual + Automated",
    description: "Deep technical security testing",
  },
  {
    icon: BarChart3,
    title: "Business-Impact Based",
    description: "Prioritized by criticality",
  },
  {
    icon: CheckCircle,
    title: "Real-World PoC",
    description: "Screenshots, videos, payloads",
  },
  {
    icon: Lock,
    title: "Remediation Support",
    description: "End-to-end vulnerability closure",
  },
  {
    icon: Eye,
    title: "100% Confidential",
    description: "Enterprise-grade NDA secured",
  },
]

export default function TrustCardsSection() {
  return (
    <section className="w-full py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 font-mono text-sm mb-4">WHY COMPANIES TRUST US</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Enterprise-Grade Security Testing</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our approach combines certified expertise with cutting-edge methodology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-lg bg-slate-950 border border-red-900/20 hover:border-red-500/50 hover:bg-slate-900 transition duration-300 hover:neon-glow cursor-pointer"
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="p-3 rounded-lg bg-red-600/10 group-hover:bg-red-600/20 transition">
                    <Icon className="w-6 h-6 text-red-500 group-hover:text-red-400" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">{item.title}</h3>
                <p className="text-gray-400 text-center text-sm">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
