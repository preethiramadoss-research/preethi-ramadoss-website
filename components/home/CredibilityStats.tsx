import React from 'react'

const stats = [
  {label: 'Sustainable Cosmetics', value: 'Skincare Products Formulator'},
  {label: 'PhD', value: 'Biomaterials & Polymer Science'},
  {label: 'Granted Patents', value: '2'},
  {label: 'Scientific Publications', value: 'Multiple'},
  {label: 'TEDx Speaker', value: '3-Time'}
]

export default function CredibilityStats(){
  return (
    <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {stats.map((s, idx) => (
        <div key={s.label} className={`p-4 rounded-xl text-center ${idx===0? 'bg-primary text-white': 'bg-white border'}`}>
          <div className="text-2xl font-semibold">{s.value}</div>
          <div className={`text-sm mt-1 ${idx===0 ? 'text-white/90' : 'text-slate-600'}`}>{s.label}</div>
        </div>
      ))}
    </section>
  )
}
