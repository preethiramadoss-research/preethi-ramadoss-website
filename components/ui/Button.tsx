import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'accent'
  className?: string
}

export default function Button({ children, href, variant = 'primary', className = '' }: Props){
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded'
  const variants: Record<string,string> = {
    primary: 'bg-primary text-white',
    outline: 'border border-primary text-primary bg-white',
    accent: 'bg-accent text-white'
  }

  const cls = `${base} ${variants[variant]} ${className}`.trim()

  if(href){
    return <Link href={href} className={cls as any}>{children}</Link>
  }

  return <button className={cls as any}>{children}</button>
}
