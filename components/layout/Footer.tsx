import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-16 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Dr. Preethi Ramadoss — All rights reserved.
          </div>
          <div className="space-x-4">
            <a href="https://linkedin.com/in/dr-preethi-ramadoss-89236b23" className="underline">LinkedIn</a>
            <a href="https://scholar.google.com/citations?user=QxKxRvMAAAAJ&hl=en&oi=ao" className="underline">Google Scholar</a>
            <a href="https://orcid.org/0000-0002-4768-509X" className="underline">ORCID</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
