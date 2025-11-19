import React from 'react'

export default function CustomerProfile() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-slate-200" />
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Ritika Sharma</h1>
          <p className="text-slate-500 text-sm">ritika@example.com • 9800000001</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex gap-6 text-sm text-slate-600">
              <button className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs">Booking history</button>
              <button className="px-3 py-1.5 rounded-lg bg-slate-100">Payments</button>
              <button className="px-3 py-1.5 rounded-lg bg-slate-100">Notes</button>
            </div>
            <div className="mt-4 divide-y">
              {[1,2,3].map(i=> (
                <div key={i} className="py-3 flex items-center justify-between text-sm">
                  <div>Wedding Package • 2025-10-12</div>
                  <div className="text-slate-500">Paid $220</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <h3 className="text-sm font-medium text-slate-700 mb-2">Contact</h3>
            <div className="text-sm text-slate-600 space-y-1">
              <div>Email: ritika@example.com</div>
              <div>Phone: 9800000001</div>
              <div>Address: Lazimpat, Kathmandu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
