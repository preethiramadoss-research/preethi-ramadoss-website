"use client"
import React from 'react'

export default function TechBriefRequestForm(){
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: integrate with backend or contact service
    alert('Request received. A follow-up will be arranged.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input required name="name" placeholder="Full name" className="w-full border px-3 py-2 rounded" />
      <input required name="email" type="email" placeholder="Professional email" className="w-full border px-3 py-2 rounded" />
      <input name="organization" placeholder="Organization" className="w-full border px-3 py-2 rounded" />
      <textarea name="purpose" placeholder="Brief purpose for requesting more information" className="w-full border px-3 py-2 rounded h-28" />
      <div className="flex justify-end">
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Request Technology Brief</button>
      </div>
      <div className="text-xs text-slate-500">Detailed technical documents are provided only after professional verification and agreements.</div>
    </form>
  )
}
