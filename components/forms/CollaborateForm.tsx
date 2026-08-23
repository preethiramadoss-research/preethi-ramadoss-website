"use client"
import React, { useState } from 'react'

export default function CollaborateForm(){
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organization') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      inquiry: (form.elements.namedItem('type') as HTMLSelectElement).value,
      message: (form.elements.namedItem('description') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (res.ok && result.success) {
        setSent(true)
        form.reset()
      } else {
        setError(result.message || 'Failed to submit inquiry.')
        form.reset()
      }
    } catch {
      setError('Failed to submit inquiry. Please try again.')
      form.reset()
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return <p className="mt-4 text-sm text-green-700">Thank you. Your collaboration inquiry has been received.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <input required name="name" placeholder="Name" className="w-full border px-3 py-2 rounded" />
      <input name="organization" placeholder="Organization" className="w-full border px-3 py-2 rounded" />
      <input name="email" type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" />
      <select name="type" className="w-full border px-3 py-2 rounded">
        <option>Research Collaboration</option>
        <option>Industry R&D Collaboration</option>
        <option>Technology Co-Development</option>
        <option>Grant & Consortium Collaboration</option>
      </select>
      <textarea name="description" placeholder="Project description / interests" className="w-full border px-3 py-2 rounded h-28" />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="flex justify-end"><button type="submit" disabled={loading} className="px-4 py-2 bg-primary text-white rounded disabled:opacity-60 disabled:cursor-not-allowed">{loading ? 'Sending...' : 'Submit'}</button></div>
    </form>
  )
}
