import React from 'react'

const pkgs = [
  { name: 'Wedding Classic', price: 1200, desc: '8hrs shoot, album, 100 edits' },
  { name: 'Portrait Plus', price: 220, desc: '2hrs studio, 15 edits' },
]

export default function Packages() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Packages</h1>
          <p className="text-slate-500 text-sm">Manage offerings</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Create Package</button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {pkgs.map(p=> (
          <div key={p.name} className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{p.name}</div>
                <div className="text-sm text-slate-500">{p.desc}</div>
              </div>
              <div className="text-xl font-semibold">${p.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 max-w-2xl">
        <h3 className="text-sm font-medium text-slate-700 mb-3">Create / Edit Package</h3>
        <div className="space-y-3">
          <input placeholder="Name" className="w-full rounded-lg border border-slate-200 px-3 py-2.5" />
          <input placeholder="Price" className="w-full rounded-lg border border-slate-200 px-3 py-2.5" />
          <input placeholder="Duration" className="w-full rounded-lg border border-slate-200 px-3 py-2.5" />
          <input placeholder="Included items" className="w-full rounded-lg border border-slate-200 px-3 py-2.5" />
          <textarea placeholder="Notes" className="w-full rounded-lg border border-slate-200 px-3 py-2.5" rows={3} />
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Save</button>
        </div>
      </div>
    </div>
  )
}
