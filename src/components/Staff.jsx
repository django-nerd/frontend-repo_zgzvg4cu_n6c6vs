import React, { useState } from 'react'

const staff = [
  { name: 'Priya Sharma', role: 'Manager', last: '2h ago', active: true },
  { name: 'Rahul Singh', role: 'Photographer', last: '1d ago', active: true },
  { name: 'Meera Joshi', role: 'Editor', last: '3d ago', active: false },
]

export default function Staff() {
  const [selected, setSelected] = useState(null)
  const [perms, setPerms] = useState({ bookings: true, payments: false, inventory: true })

  return (
    <div className="space-y-4 relative">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Staff</h1>
        <p className="text-slate-500 text-sm">Manage roles and access</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3">Role</th>
              <th className="text-left px-4 py-3">Last Login</th>
              <th className="text-left px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s,i)=> (
              <tr key={s.name} className={i%2? 'bg-white' : 'bg-slate-50/50'} onClick={()=>setSelected(s)}>
                <td className="px-4 py-3">{s.name}</td>
                <td className="px-4 py-3">{s.role}</td>
                <td className="px-4 py-3">{s.last}</td>
                <td className="px-4 py-3">{s.active? 'Active':'Disabled'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/30" onClick={()=>setSelected(null)} />
      )}
      {selected && (
        <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white border-l p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Edit Permissions</div>
              <div className="text-sm text-slate-500">{selected.name}</div>
            </div>
            <button onClick={()=>setSelected(null)} className="text-slate-500">Close</button>
          </div>
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-3"><input type="checkbox" checked={perms.bookings} onChange={e=>setPerms(p=>({...p, bookings: e.target.checked}))}/> Bookings</label>
            <label className="flex items-center gap-3"><input type="checkbox" checked={perms.payments} onChange={e=>setPerms(p=>({...p, payments: e.target.checked}))}/> Payments</label>
            <label className="flex items-center gap-3"><input type="checkbox" checked={perms.inventory} onChange={e=>setPerms(p=>({...p, inventory: e.target.checked}))}/> Inventory</label>
          </div>
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Save</button>
        </div>
      )}
    </div>
  )
}
