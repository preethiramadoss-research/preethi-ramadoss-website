import React from 'react'
import { CONTACT } from '../../content/contact'
import ContactForm from '../../components/forms/ContactForm'

export default function ContactPage(){
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold heading-accent">{CONTACT.hero.title}</h1>
        <p className="mt-2 text-slate-600">{CONTACT.hero.subtitle}</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {CONTACT.channels.map(c => (
            <div key={c.id} className="p-6 border rounded-xl bg-white">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.detail}</p>
            </div>
          ))}
        </div>

        <aside className="p-6 border rounded-xl bg-white">
          <h3 className="font-semibold">Send a Message</h3>
          <ContactForm />
        </aside>
      </section>
    </div>
  )
}
