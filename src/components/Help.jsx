import React from 'react'

export default function Help() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Help & Support</h1>
        <p className="text-slate-500 text-sm">Friendly guidance for common tasks</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="text-sm font-medium text-slate-700">FAQs</h3>
        <ul className="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
          <li>How to create a new booking?</li>
          <li>How to record a payment?</li>
          <li>How to add inventory items?</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="text-sm font-medium text-slate-700">Common steps</h3>
        <ol className="list-decimal list-inside text-sm text-slate-600 mt-2 space-y-1">
          <li>Create a customer, then open the booking form.</li>
          <li>Select package and time slot, then save.</li>
          <li>Record payment from the payments dashboard.</li>
        </ol>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="text-sm font-medium text-slate-700">Contact</h3>
        <p className="text-sm text-slate-600 mt-2">Email: support@studioledger.app</p>
      </div>
    </div>
  )
}
