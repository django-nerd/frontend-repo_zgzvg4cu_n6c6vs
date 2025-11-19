import React from 'react'

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Analytics</h1>
        <p className="text-slate-500 text-sm">Simple visual insights</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="text-sm font-medium text-slate-700 mb-3">Monthly revenue</h3>
          <div className="h-40">
            <svg viewBox="0 0 100 40" className="w-full h-full">
              <polyline fill="none" stroke="#0f172a" strokeWidth="2" points="0,35 10,33 20,32 30,29 40,26 50,22 60,20 70,17 80,13 90,12 100,10" />
              <rect x="0" y="38" width="100" height="2" fill="#e2e8f0" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="text-sm font-medium text-slate-700 mb-3">Top packages</h3>
          <div className="h-40 grid grid-cols-5 items-end gap-2">
            {[20,36,55,28,44].map((h,i)=> (
              <div key={i} className="bg-slate-900/80 rounded" style={{height: `${h}%`}} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="text-sm font-medium text-slate-700 mb-3">Repeat customers</h3>
          <div className="text-4xl font-semibold">62</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="text-sm font-medium text-slate-700 mb-3">Seasonal trend</h3>
          <div className="h-40">
            <svg viewBox="0 0 100 40" className="w-full h-full">
              <polygon points="0,40 0,30 20,28 40,20 60,26 80,18 100,24 100,40" fill="#e2e8f0" />
              <rect x="0" y="38" width="100" height="2" fill="#e2e8f0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
