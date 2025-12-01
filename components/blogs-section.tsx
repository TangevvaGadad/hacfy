"use client"

import { Calendar, ArrowRight, BookOpen } from "lucide-react"

const blogs = [
  {
    id: 1,
    title: "Latest Web Application Vulnerabilities in 2024",
    excerpt:
      "Discover the most critical web app vulnerabilities threatening enterprises. Real-world exploitation techniques and mitigation strategies.",
    date: "Dec 20, 2024",
    category: "Web Security",
    readTime: "8 min read",
    gradient: "from-red-600/20 to-red-900/20",
  },
  {
    id: 2,
    title: "Cloud Misconfiguration: The #1 Attack Vector",
    excerpt:
      "AWS, Azure, GCP - Learn how misconfigurations expose millions of records. VAPT insights from 100+ cloud assessments.",
    date: "Dec 18, 2024",
    category: "Cloud Security",
    readTime: "12 min read",
    gradient: "from-red-500/20 to-red-800/20",
  },
  {
    id: 3,
    title: "API Security: Common Exploitation Patterns",
    excerpt:
      "APIs are the new attack surface. Understand broken access control, injection flaws, and how to secure your APIs.",
    date: "Dec 15, 2024",
    category: "API Security",
    readTime: "10 min read",
    gradient: "from-red-700/20 to-red-900/20",
  },
  {
    id: 4,
    title: "Mobile App Pentesting: Advanced Techniques",
    excerpt:
      "Beyond standard mobile testing. Deep dive into iOS/Android exploitation, bypass techniques, and secure coding practices.",
    date: "Dec 12, 2024",
    category: "Mobile Security",
    readTime: "9 min read",
    gradient: "from-red-600/20 to-red-800/20",
  },
]

export default function BlogsSection() {
  return (
    <section className="w-full py-20 px-4 bg-black border-y border-red-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-red-500" />
            <p className="text-red-500 font-mono text-sm">SECURITY INSIGHTS</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">Latest Security Blog</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Stay updated with the latest security trends, vulnerabilities, and best practices in penetration testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`group relative rounded-lg overflow-hidden bg-gradient-to-br ${blog.gradient} border border-red-900/30 hover:border-red-600/60 transition duration-300 p-6 flex flex-col h-full hover:transform hover:scale-105`}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-semibold border border-red-600/30">
                    {blog.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition duration-300">
                  {blog.title}
                </h3>

                <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">{blog.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-red-900/20">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </div>
                    <span>{blog.readTime}</span>
                  </div>
                  <button className="text-red-500 hover:text-red-400 transition duration-300 transform group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
