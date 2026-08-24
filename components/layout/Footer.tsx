import React from 'react'
import Image from 'next/image'
import logoNormal from '../../app/assets/profile/logo-normal.png'

export default function Footer(){
  return (
    <footer className="mt-10 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 text-xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
           
            <div>
              <div className="font-semibold text-white">Dr. Preethi Ramadoss, PhD</div>
              <div className="text-white/70">Biomaterials & Biosensor R&D Consultant</div>
            </div>
          </div>
          <div className="space-x-3">
            <a href="https://linkedin.com/in/dr-preethi-ramadoss-89236b23" className="underline">LinkedIn</a>
            <a href="https://scholar.google.com/citations?user=QxKxRvMAAAAJ&hl=en&oi=ao" className="underline">Google Scholar</a>
            <a href="https://orcid.org/0000-0002-4768-509X" className="underline">ORCID</a>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-white/10 text-white/60">
          © {new Date().getFullYear()} Dr. Preethi Ramadoss — All rights reserved.
        </div>
      </div>
    </footer>
  )
}
