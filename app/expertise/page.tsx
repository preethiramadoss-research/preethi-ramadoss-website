import React from 'react'
import { EXPERTISE } from '../../content/expertise'

export default function ExpertisePage(){
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold heading-accent">Scientific & Technical Expertise</h1>
        <p className="mt-2 text-slate-600">Areas of demonstrated scientific and research experience.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        {EXPERTISE.map(section => (
          <div key={section.title} className="p-6 border rounded-xl bg-white">
            <h3 className="font-semibold">{section.title}</h3>
            <ul className="mt-3 text-sm text-slate-700 space-y-1">
              {section.items.map(i => <li key={i}>• {i}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}
