import React from 'react'
import Hero from '../components/home/Hero'
import CredibilityStats from '../components/home/CredibilityStats'
import WhatIDo from '../components/home/WhatIDo'
import FeaturedInnovations from '../components/home/FeaturedInnovations'
import FinalCTA from '../components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-16 mt-12">
        <CredibilityStats />
        <WhatIDo />
        <FeaturedInnovations />
      </div>
      <FinalCTA />
    </>
  )
}
