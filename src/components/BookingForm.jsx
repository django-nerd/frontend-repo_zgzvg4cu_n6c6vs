import React from 'react'

export default function BookingForm() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-slate-900 mb-2">New Booking</h1>
      <p className="text-slate-500 text-sm mb-6">Keep the schedule clear</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Customer</label>
          <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <option>Ritika</option>
            <option>Aditya</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Date</label>
            <input type="date" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Time</label>
            <input type="time" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Package</label>
          <input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5" placeholder="Wedding, Portrait..." />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Payment status</label>
          <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <option>Pending</option>
            <option>Paid</option>
            <option>Partial</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Available slots</label>
          <div className="flex flex-wrap gap-2">
            {['09:00','10:00','11:00','14:00','15:00','16:00'].map(s => (
              <button key={s} type="button" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-sm">{s}</button>
            ))}
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Save Booking</button>
      </form>
    </div>
  )
}
