"use client"

import HeroSection from "@/components/hero-section"
import TrustCardsSection from "@/components/trust-cards"
import AttackVectorsGrid from "@/components/attack-vectors"
import CaseStudies from "@/components/case-studies"
import SecurityScoreMeter from "@/components/security-score"
import BlogsSection from "@/components/blogs-section"
import AssessmentsTestimonials from "@/components/assessments-testimonials"
import GetQuoteSection from "@/components/get-quote"
import FinalCtaSection from "@/components/final-cta"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Header />
      <HeroSection />
      
      <TrustCardsSection />
      {/* <AttackVectorsGrid /> */}
      <CaseStudies />
      <SecurityScoreMeter />
      <AssessmentsTestimonials />
      <GetQuoteSection />
      <BlogsSection />
      <FinalCtaSection />
    </main>
  )
}
