import React from 'react'

export default function CustomerForm() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-slate-900 mb-2">Add Customer</h1>
      <p className="text-slate-500 text-sm mb-6">Keep it simple and spacious</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Name</label>
          <input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-slate-900" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Phone Number</label>
            <input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Email</label>
            <input type="email" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Address</label>
          <input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-slate-900" />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Notes</label>
          <textarea rows={4} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-slate-900" />
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Save Customer</button>
      </form>
    </div>
  )
}
