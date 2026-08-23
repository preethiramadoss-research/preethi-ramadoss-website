import React from 'react'

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`rounded-xl border bg-white shadow-sm p-6 ${className || ''}`}>
    {children}
  </div>
)

export const CardHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-0 ${className || ''}`}>
    {children}
  </div>
)

export const CardContent = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`${className || ''}`}>
    {children}
  </div>
)

export const CardFooter = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`pt-0 ${className || ''}`}>
    {children}
  </div>
)

export const CardTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h3 className={`text-xl font-semibold leading-none tracking-tight ${className || ''}`}>
    {children}
  </h3>
)

export const CardDescription = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <p className={`text-sm text-slate-500 ${className || ''}`}>
    {children}
  </p>
)
