import React from 'react'

const items = [
  { type: 'Bookings', text: 'New booking created for 14:00', date: 'Today' },
  { type: 'Payments', text: 'Payment of $220 received from Ritika', date: 'Today' },
  { type: 'Inventory Alerts', text: 'Low stock: Batteries', date: 'Yesterday' },
  { type: 'System Messages', text: 'Update completed successfully', date: '2 days ago' },
]

export default function Notifications() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Notifications</h1>
        <p className="text-slate-500 text-sm">Short and scannable</p>
      </div>
      <div className="space-y-3">
        {items.map((n, i)=> (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="text-xs text-slate-500">{n.type} • {n.date}</div>
            <div className="text-sm text-slate-700 mt-1">{n.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
