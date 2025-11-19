import React from 'react'

export default function Payments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Payments</h1>
        <p className="text-slate-500 text-sm">Simple trends and totals</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="text-slate-500 text-sm">Total income</div>
          <div className="text-3xl font-semibold">$12,400</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="text-slate-500 text-sm">Total expenses</div>
          <div className="text-3xl font-semibold">$4,980</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="text-slate-500 text-sm">Pending</div>
          <div className="text-3xl font-semibold">$860</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="text-slate-500 text-sm">This month</div>
          <div className="text-3xl font-semibold">$3,120</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <div className="h-36">
          <svg viewBox="0 0 100 40" className="w-full h-full">
            <polyline fill="none" stroke="#0f172a" strokeWidth="2" points="0,35 10,33 20,30 30,28 40,25 50,22 60,20 70,18 80,15 90,13 100,10" />
            <rect x="0" y="38" width="100" height="2" fill="#e2e8f0" />
          </svg>
        </div>
      </div>
    </div>
  )
}
