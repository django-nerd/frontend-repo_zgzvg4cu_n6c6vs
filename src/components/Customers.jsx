import React, { useMemo, useState } from 'react'

const sample = [
  { name: 'Ritika Sharma', phone: '9800000001', last: '2025-11-10', due: 120 },
  { name: 'Aditya Verma', phone: '9800000002', last: '2025-11-03', due: 0 },
  { name: 'Anjali Gupta', phone: '9800000003', last: '2025-10-22', due: 60 },
  { name: 'Kiran KC', phone: '9800000004', last: '2025-09-30', due: 30 },
]

export default function Customers() {
  const [q, setQ] = useState('')
  const [sort, setSort] = useState({ key: 'name', dir: 'asc' })

  const data = useMemo(() => {
    let d = sample.filter(r => r.name.toLowerCase().includes(q.toLowerCase()))
    d.sort((a,b)=>{
      const k = sort.key
      if (k === 'name') return sort.dir==='asc'? a.name.localeCompare(b.name): b.name.localeCompare(a.name)
      if (k === 'due') return sort.dir==='asc'? a.due-b.due : b.due-a.due
      return 0
    })
    return d
  }, [q, sort])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search customers..." className="w-full max-w-sm rounded-lg border border-slate-200 bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-slate-900" />
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">New Customer</button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left px-4 py-3 cursor-pointer" onClick={()=>setSort({ key:'name', dir: sort.dir==='asc'?'desc':'asc' })}>Name</th>
              <th className="text-left px-4 py-3">Phone</th>
              <th className="text-left px-4 py-3">Last Booking</th>
              <th className="text-left px-4 py-3 cursor-pointer" onClick={()=>setSort({ key:'due', dir: sort.dir==='asc'?'desc':'asc' })}>Total Due</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r,i)=> (
              <tr key={r.phone} className={i%2? 'bg-white' : 'bg-slate-50/50'}>
                <td className="px-4 py-3">{r.name}</td>
                <td className="px-4 py-3">{r.phone}</td>
                <td className="px-4 py-3">{r.last}</td>
                <td className="px-4 py-3">${r.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
