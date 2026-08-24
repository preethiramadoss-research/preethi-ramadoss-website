"use client"
import React, { useState } from "react";

export default function ContactForm() {
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
      organization: (form.elements.namedItem("organization") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      inquiry: (form.elements.namedItem("inquiry") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
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
        setError(result.message || "Failed to send message.")
        form.reset()
      }
    } catch {
      setError("Failed to send message. Please try again.")
      form.reset()
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return <p className="mt-4 text-sm text-green-700">Thank you. Your message has been sent.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
      <input required name="name" placeholder="Name" className="w-full border px-3 py-2 rounded" autoComplete="name" />
      <input name="organization" placeholder="Organization" className="w-full border px-3 py-2 rounded" autoComplete="organization" />
      <input name="email" type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" autoComplete="email" />
      <select name="inquiry" className="w-full border px-3 py-2 rounded">
        <option>Research Collaboration</option>
        <option>R&D Consulting</option>
        <option>Technology Licensing</option>
        <option>Speaking & Media</option>
        <option>Grant & Consortium</option>
        <option>Other</option>
      </select>
      <textarea required name="message" placeholder="Brief description of your inquiry" minLength={10} className="w-full border px-3 py-2 rounded h-32" />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="flex justify-end">
        <button type="submit" disabled={loading} className="px-4 py-2 bg-primary text-white rounded disabled:opacity-60 disabled:cursor-not-allowed">{loading ? "Sending..." : "Send Message"}</button>
      </div>
    </form>
  )
}
