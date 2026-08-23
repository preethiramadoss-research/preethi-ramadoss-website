import React from 'react'
import { ABOUT } from '../../content/about'

export default function AboutPage(){
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold heading-accent">About Dr. Preethi Ramadoss</h1>
        <p className="mt-2 text-slate-600">{ABOUT.scientist.paragraph}</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl bg-white">
          <h2 className="font-semibold">{ABOUT.journey.title}</h2>
          <ul className="mt-3 space-y-3 text-sm text-slate-700">
            {ABOUT.journey.degrees.map((d) => (
              <li key={d.degree}>
                <div className="font-medium">{d.degree} — {d.institution}</div>
                {d.thesis && <div className="mt-1 text-slate-600">{d.thesis}</div>}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="p-6 border rounded-xl bg-white">
            <h3 className="font-semibold">{ABOUT.inventor.title}</h3>
            <ul className="mt-3 text-sm text-slate-700">
              {ABOUT.inventor.patents.map(p => (
                <li key={p.number} className="mb-2">{p.title} — <span className="text-slate-500">Patent No. {p.number}</span></li>
              ))}
            </ul>
          </div>

          <div className="p-6 border rounded-xl bg-white">
            <h3 className="font-semibold">{ABOUT.innovator.title}</h3>
            <p className="mt-2 text-slate-600">{ABOUT.innovator.paragraph}</p>
          </div>

          <div className="p-6 border rounded-xl bg-white">
            <h3 className="font-semibold">{ABOUT.communicator.title}</h3>
            <ul className="mt-3 text-sm text-slate-700">
              {ABOUT.communicator.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <div className="p-6 bg-slate-50 rounded-xl">
        <a href="/research" className="px-4 py-2 border rounded-xl inline-block mb-2 md:mb-0 md:mr-3">Explore Research & Expertise</a>
        <a href="/innovations" className="px-4 py-2 border rounded-xl inline-block">Explore Innovations</a>
      </div>
    </div>
  )
}
