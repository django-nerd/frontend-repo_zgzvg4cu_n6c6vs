import React from 'react'
import { Wallet, Calendar as Cal, Tag, FileText, Coins } from 'lucide-react'

export default function ExpenseForm() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-slate-900 mb-2">Record Expense</h1>
      <p className="text-slate-500 text-sm mb-6">Consistent layout like income</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-slate-600 mb-1 flex items-center gap-2"><Wallet size={16}/> Expense Name</label>
          <input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1 flex items-center gap-2"><Coins size={16}/> Amount</label>
            <input type="number" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1 flex items-center gap-2"><Tag size={16}/> Category</label>
            <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5">
              <option>Equipment</option>
              <option>Rent</option>
              <option>Travel</option>
            </select>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1 flex items-center gap-2"><Cal size={16}/> Date</label>
            <input type="date" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1 flex items-center gap-2"><FileText size={16}/> Notes</label>
            <input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5" />
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Save Expense</button>
      </form>
    </div>
  )
}
