import React from 'react'
import { COLLABORATE } from '../../content/collaborate'
import CollaborateForm from '../../components/forms/CollaborateForm'

export default function CollaboratePage(){
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold heading-accent">Collaboration Opportunities</h1>
        <p className="mt-2 text-slate-600">{COLLABORATE.intro}</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl bg-white">
          <h3 className="font-semibold">Collaboration Types</h3>
          <ul className="mt-3 text-sm text-slate-700 space-y-1">
            {COLLABORATE.types.map(t => <li key={t}>• {t}</li>)}
          </ul>
        </div>

        <aside className="p-6 border rounded-xl bg-white">
          <h3 className="font-semibold">Start a Conversation</h3>
          <p className="mt-2 text-sm text-slate-600">Share your project interests and collaboration goals.</p>
          <CollaborateForm />
        </aside>
      </section>
    </div>
  )
}
