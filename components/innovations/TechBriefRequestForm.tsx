"use client"
import React, { useState } from "react";

export default function TechBriefRequestForm() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    e.preventDefault()
    setLoading(true)
    setError("")
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      organization: (form.elements.namedItem("organization") as HTMLInputElement).value,
      inquiry: "Technology Brief Request",
      message: (form.elements.namedItem("purpose") as HTMLTextAreaElement).value,
      honeypot: (form.elements.namedItem("website") as HTMLInputElement).value,
      _time: Date.now(),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (res.ok && result.success) {
        setSent(true)
        form.reset()
      } else {
        setError(result.message || "Failed to request technology brief.")
        form.reset()
      }
    } catch {
      setError("Failed to request technology brief. Please try again.")
      form.reset()
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return <p className="mt-4 text-sm text-green-700">Thank you. Your technology brief request has been received.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
      <input required name="name" placeholder="Full name" className="w-full border px-3 py-2 rounded" autoComplete="name" />
      <input required name="email" type="email" placeholder="Professional email" className="w-full border px-3 py-2 rounded" autoComplete="email" />
      <input name="organization" placeholder="Organization" className="w-full border px-3 py-2 rounded" autoComplete="organization" />
      <textarea required name="purpose" placeholder="Brief purpose for requesting more information" minLength={10} className="w-full border px-3 py-2 rounded h-28" />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="flex justify-end">
        <button type="submit" disabled={loading} className="px-4 py-2 bg-primary text-white rounded disabled:opacity-60 disabled:cursor-not-allowed">{loading ? "Sending..." : "Request Technology Brief"}</button>
      </div>
      <div className="text-xs text-slate-500">Detailed technical documents are provided only after professional verification and agreements.</div>
    </form>
  )
}
