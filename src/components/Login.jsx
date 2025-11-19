import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Login() {
  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-slate-50">
      <div className="relative hidden md:block">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>
      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-slate-900 text-white grid place-items-center mb-3">SL</div>
            <h1 className="text-2xl font-semibold text-slate-900">Welcome to StudioLedger</h1>
            <p className="text-slate-500 text-sm mt-1">Calm sign-in to manage your studio</p>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Email</label>
              <input type="email" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-slate-900" placeholder="you@studio.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Password</label>
              <input type="password" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-slate-900" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full py-3 rounded-lg bg-slate-900 text-white text-sm font-medium">Sign in</button>
            <div className="text-right">
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
