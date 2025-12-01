"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-white">H</div>
          <span className="text-xl font-bold text-white">HacFy</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#process" className="text-gray-300 hover:text-red-500 transition">
            Process
          </a>
          <a href="#vectors" className="text-gray-300 hover:text-red-500 transition">
            Services
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-red-500 transition">
            Testimonials
          </a>
          <button className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition font-medium">
            Get Quote
          </button>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  )
}
