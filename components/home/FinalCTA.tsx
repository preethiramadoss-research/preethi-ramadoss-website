import React from 'react'
import Button from '../ui/Button'

export default function FinalCTA(){
  return (
    <section className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary/6 to-white">
      <h2 className="text-2xl font-semibold">Let's Build the Next Generation of Scientific Innovation</h2>
      <p className="mt-3 text-slate-600">Whether you are developing a new biomaterial, evaluating a biosensing technology, exploring research collaboration or interested in commercializing patented technology, let's start a conversation.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/contact" variant="primary">Discuss an R&D Challenge</Button>
        <Button href="/collaborate" variant="outline">Explore Collaboration</Button>
        <Button href="/innovations" variant="outline">Discuss a Technology Partnership</Button>
      </div>
    </section>
  )
}
