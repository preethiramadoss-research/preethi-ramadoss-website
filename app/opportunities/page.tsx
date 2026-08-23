import React from 'react'
import { OPPORTUNITIES } from '../../content/opportunities'

export default function OpportunitiesPage(){
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold heading-accent">Open to Strategic Scientific Opportunities</h1>
        <p className="mt-2 text-slate-600">{OPPORTUNITIES.intro}</p>
      </header>

      <section className="p-6 border rounded-xl bg-white">
        <h3 className="font-semibold">Preferred Roles</h3>
        <ul className="mt-3 text-sm text-slate-700 space-y-1">
          {OPPORTUNITIES.roles.map(r => <li key={r}>• {r}</li>)}
        </ul>
        <div className="mt-6">
          <a href="/contact" className="px-3 py-2 bg-slate-900 text-white rounded">Discuss an Opportunity</a>
        </div>
      </section>
    </div>
  )
}
