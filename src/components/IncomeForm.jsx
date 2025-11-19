import React from 'react'

export default function IncomeForm() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-slate-900 mb-2">Record Income</h1>
      <p className="text-slate-500 text-sm mb-6">Keep entries simple</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Client</label>
          <input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Amount</label>
            <input type="number" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Payment Method</label>
            <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5">
              <option>Cash</option>
              <option>eSewa</option>
              <option>Bank</option>
            </select>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Date</label>
            <input type="date" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Notes</label>
            <input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5" />
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Save Income</button>
      </form>
    </div>
  )
}
