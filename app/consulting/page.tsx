import React from 'react'
import { CONSULTING } from '../../content/consulting'
import ConsultingForm from '../../components/forms/ConsultingForm'

export default function ConsultingPage(){
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold heading-accent">{CONSULTING.hero.title}</h1>
        <p className="mt-2 text-slate-600">{CONSULTING.hero.subtitle}</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {CONSULTING.services.map(s => (
            <div key={s.id} className="p-6 border rounded-xl bg-white">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <aside className="p-6 border rounded-xl bg-white">
          <h3 className="font-semibold">Discuss Your R&D Challenge</h3>
          <ConsultingForm />
        </aside>
      </section>
    </div>
  )
}
