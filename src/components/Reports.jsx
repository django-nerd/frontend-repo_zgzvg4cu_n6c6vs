import React from 'react'

const reports = [
  { title: 'Daily Income Report', desc: "Summary of today's income entries." },
  { title: 'Monthly Summary', desc: 'Income, expenses and bookings overview.' },
  { title: 'Customer List', desc: 'Export all customers and balances.' },
  { title: 'Inventory Status', desc: 'Current equipment stock and condition.' },
]

export default function Reports() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Reports</h1>
        <p className="text-slate-500 text-sm">Generate tidy summaries</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reports.map((r)=> (
          <div key={r.title} className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-medium text-slate-700">{r.title}</h3>
              <p className="text-slate-500 text-sm mt-1">{r.desc}</p>
            </div>
            <button className="mt-4 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm">Download</button>
          </div>
        ))}
      </div>
    </div>
  )
}
