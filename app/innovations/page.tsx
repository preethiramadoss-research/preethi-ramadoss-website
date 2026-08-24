import React from 'react'
import Link from 'next/link'
import { INNOVATIONS } from '../../content/innovations'

export default function InnovationsPage(){
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold heading-accent">Innovations & Patented Technologies</h1>
        <p className="mt-2 text-slate-600">Scientific research with the potential to create sustainable, scalable and commercially relevant technologies.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        {INNOVATIONS.map(i => (
          <article key={i.id} className="p-6 border rounded-xl bg-white">
            <h2 className="text-xl font-semibold">{i.title}</h2>
            <p className="mt-2 text-slate-700">{i.shortDescription}</p>
            <div className="mt-4 flex gap-3">
              <Link href={`/innovations/${i.slug}`} className="px-3 py-2 border rounded-xl">Explore Technology</Link>
              <Link href="/contact" className="px-3 py-2 bg-slate-900 text-white rounded-xl">Discuss Partnership</Link>
            </div>
            <div className="mt-3 text-sm text-slate-500">{i.patentNumber ? `Patent No. ${i.patentNumber}` : 'Patent status: Pending/Verify'}</div>
          </article>
        ))}
      </section>
    </div>
  )
}
