import React from 'react'

function Day({ date, booked }) {
  return (
    <button className={`aspect-square w-full rounded-lg border ${booked? 'border-slate-300 bg-slate-100':'border-slate-200 bg-white'} text-sm text-slate-700 hover:border-slate-400`}>{date}</button>
  )
}

export default function CalendarView() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Booking Calendar</h1>
          <p className="text-slate-500 text-sm">Monthly and weekly overview</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-sm">Month</button>
          <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-sm">Week</button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 28 }).map((_,i)=> (
          <Day key={i} date={i+1} booked={[2,5,9,12,18,21,25].includes(i+1)} />
        ))}
      </div>
    </div>
  )
}
