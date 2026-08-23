import React from 'react'
import Link from 'next/link'

const cards = [
  {title: 'Biomaterials R&D', desc: 'Development, evaluation and strategic planning of advanced biomaterials.' , href: '/expertise'},
  {title: 'Biosensor Development', desc: 'Electrochemical sensing, wearable biosensors and flexible materials.', href: '/expertise'},
  {title: 'R&D Strategy', desc: 'Feasibility, risk identification and R&D roadmaps.', href: '/consulting'},
  {title: 'Research Collaboration', desc: 'Collaborations with universities, institutes and companies.', href: '/collaborate'}
]

export default function WhatIDo(){
  return (
    <section id="expertise">
      <h2 className="text-2xl font-semibold mb-6">Solving Complex Challenges in Biomaterials and Biosensing</h2>
      <div className="grid md:grid-cols-4 gap-6 rounded-xl">
        {cards.map(c=> (
          <Link key={c.title} href={c.href} className="p-6 border rounded-xl hover:shadow">
            <h3 className="font-medium text-primary">{c.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
