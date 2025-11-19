import React from 'react'

export default function Settings() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">User Settings</h1>
        <p className="text-slate-500 text-sm">Manage your account</p>
      </div>

      <details className="bg-white rounded-xl border border-slate-200 p-5" open>
        <summary className="cursor-pointer text-sm font-medium text-slate-700">Personal Info</summary>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <input placeholder="Full name" className="rounded-lg border border-slate-200 px-3 py-2.5" />
          <input placeholder="Email" className="rounded-lg border border-slate-200 px-3 py-2.5" />
        </div>
        <button className="mt-4 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm">Save</button>
      </details>

      <details className="bg-white rounded-xl border border-slate-200 p-5">
        <summary className="cursor-pointer text-sm font-medium text-slate-700">Password Change</summary>
        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          <input type="password" placeholder="Current" className="rounded-lg border border-slate-200 px-3 py-2.5" />
          <input type="password" placeholder="New password" className="rounded-lg border border-slate-200 px-3 py-2.5" />
          <input type="password" placeholder="Confirm" className="rounded-lg border border-slate-200 px-3 py-2.5" />
        </div>
        <button className="mt-4 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm">Update</button>
      </details>

      <details className="bg-white rounded-xl border border-slate-200 p-5">
        <summary className="cursor-pointer text-sm font-medium text-slate-700">Two-Factor Setup</summary>
        <p className="text-sm text-slate-600 mt-3">Secure your account with an extra step.</p>
        <button className="mt-4 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm">Enable</button>
      </details>

      <details className="bg-white rounded-xl border border-slate-200 p-5">
        <summary className="cursor-pointer text-sm font-medium text-slate-700">Notification Preferences</summary>
        <div className="mt-4 space-y-2 text-sm text-slate-600">
          <label className="flex items-center gap-3"><input type="checkbox"/> Bookings</label>
          <label className="flex items-center gap-3"><input type="checkbox"/> Payments</label>
          <label className="flex items-center gap-3"><input type="checkbox"/> Inventory</label>
        </div>
        <button className="mt-4 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm">Save</button>
      </details>
    </div>
  )
}
