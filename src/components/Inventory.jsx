import React from 'react'

const rows = [
  { item: 'Canon R5', qty: 2, condition: 'Good', status: 'OK' },
  { item: 'Godox AD200', qty: 1, condition: 'Low Battery', status: 'Low Stock' },
  { item: 'Backdrop Stand', qty: 3, condition: 'Fair', status: 'OK' },
]

const dot = (status) => status==='OK' ? 'bg-emerald-500' : 'bg-amber-500'

export default function Inventory() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Inventory</h1>
          <p className="text-slate-500 text-sm">Equipment overview</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Add Item</button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left px-4 py-3">Item Name</th>
              <th className="text-left px-4 py-3">Quantity</th>
              <th className="text-left px-4 py-3">Condition</th>
              <th className="text-left px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=> (
              <tr key={r.item} className={i%2? 'bg-white' : 'bg-slate-50/50'}>
                <td className="px-4 py-3">{r.item}</td>
                <td className="px-4 py-3">{r.qty}</td>
                <td className="px-4 py-3">{r.condition}</td>
                <td className="px-4 py-3"><span className={`inline-flex items-center gap-2`}><span className={`w-2.5 h-2.5 rounded-full ${dot(r.status)}`}></span>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
