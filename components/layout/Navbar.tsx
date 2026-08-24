"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../../app/assets/profile/logo.png'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Dr. Preethi Ramadoss" width={180} height={180} className="rounded-full" />
          <span className="font-bold text-base text-white tracking-tight">Dr. Preethi Ramadoss, PhD</span>
        </Link>
        <button className="md:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <nav className={`${open ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-primary md:bg-transparent px-6 md:px-0 py-4 md:py-0 text-sm text-white/90`}>
          <Link href="/about" className="py-1 md:py-0 font-bold">About</Link>
          <Link href="/expertise" className="py-1 md:py-0 font-bold">Expertise</Link>
          <Link href="/consulting" className="py-1 md:py-0 font-bold">R&D Consulting</Link>
          <Link href="/innovations" className="py-1 md:py-0 font-bold">Innovations</Link>
          <Link href="/research" className="py-1 md:py-0 font-bold">Research</Link>
          <Link href="/contact" className="py-1 md:py-0 font-bold">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
