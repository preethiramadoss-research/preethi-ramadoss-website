import React from 'react'
import { INNOVATIONS } from '../../../content/innovations'
import TechBriefRequestForm from '../../../components/innovations/TechBriefRequestForm'

export function generateStaticParams() {
  return INNOVATIONS.map((tech) => ({
    slug: tech.slug,
  }))
}

export default async function InnovationPage({ params }: { params: Promise<{ slug: string }> }){
  const { slug } = await params
  const tech = INNOVATIONS.find(t => t.slug === slug)

  if (!tech) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <div className="rounded-xl border bg-white p-8 max-w-md">
          <h1 className="text-2xl font-semibold text-slate-900">Technology Not Found</h1>
          <p className="mt-3 text-sm text-slate-600">
            The technology you are looking for does not exist or the link may be outdated.
          </p>
          <div className="mt-6">
            <a href="/innovations" className="px-4 py-2 bg-primary text-white rounded">Browse All Innovations</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <a href="/innovations" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900">
          ← Back to Innovations
        </a>
      </div>

      <header>
        <h1 className="text-2xl md:text-3xl font-semibold">{tech.title}</h1>
        <div className="text-sm text-slate-500">{tech.patentNumber ? `Patent No. ${tech.patentNumber}` : 'Patent status: Verify'}</div>
        <p className="mt-3 text-slate-700">{tech.shortDescription}</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="p-6 border rounded-xl bg-white">
            <h3 className="font-semibold">The Challenge</h3>
            <p className="mt-2 text-slate-600">{tech.problem}</p>
          </div>

          <div className="p-6 border rounded-xl bg-white">
            <h3 className="font-semibold">The Innovation</h3>
            <p className="mt-2 text-slate-600">{tech.innovation}</p>
          </div>

          <div className="p-6 border rounded-xl bg-white">
            <h3 className="font-semibold">Scientific Foundation</h3>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              {tech.scientificFoundation.map(s => <li key={s}>• {s}</li>)}
            </ul>
          </div>

          <div className="p-6 border rounded-xl bg-white">
            <h3 className="font-semibold">Potential Application Areas</h3>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              {tech.potentialApplications.map(p => <li key={p}>• {p}</li>)}
            </ul>
          </div>
        </div>

        <aside className="p-6 border rounded-xl bg-white">
          <div className="mb-4">
            <a href="/innovations" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900">
              ← Back to Innovations
            </a>
          </div>

          <h3 className="font-semibold">Intellectual Property</h3>
          <div className="mt-2 text-sm text-slate-700">
            <div>{tech.patentDetails?.title}</div>
            <div>{tech.patentDetails?.jurisdiction} {tech.patentDetails?.grantDate}</div>
            <div className="mt-2 text-xs text-slate-500">{tech.patentDetails?.link}</div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Partnership Opportunities</h4>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              <li>Technology licensing</li>
              <li>R&D co-development</li>
              <li>Prototype development</li>
              <li>Manufacturing partnership</li>
            </ul>
          </div>

          <div className="mt-6">
            <TechBriefRequestForm />
          </div>
        </aside>
      </section>
    </div>
  )
}
