import React from 'react'
import Button from '../ui/Button'
import { Card } from '../ui/Card'
import Badge from '../ui/Badge'

export default function TechnologyOpportunityCard({title, desc, patent}:{title:string; desc:string; patent?:string}){
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        </div>
        <div className="text-sm text-slate-500">{patent ? `Patent No. ${patent}` : 'Patent pending'}</div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button href="/innovations" variant="outline">Explore Technology</Button>
        <Button href="/contact" variant="primary">Discuss Partnership</Button>
      </div>
    </Card>
  )
}
