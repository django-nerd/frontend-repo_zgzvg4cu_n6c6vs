import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Camera, Home, Users, Calendar, Receipt, Settings, Package, Bell, CreditCard, LineChart, HelpCircle, Boxes, UserCog, FileDown, PlusCircle } from 'lucide-react'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: Home },
  { to: '/customers', label: 'Customers', icon: Users },
  { to: '/calendar', label: 'Calendar', icon: Calendar },
  { to: '/bookings/new', label: 'New Booking', icon: PlusCircle },
  { to: '/payments', label: 'Payments', icon: CreditCard },
  { to: '/inventory', label: 'Inventory', icon: Boxes },
  { to: '/analytics', label: 'Analytics', icon: LineChart },
  { to: '/reports', label: 'Reports', icon: FileDown },
  { to: '/packages', label: 'Packages', icon: Package },
  { to: '/staff', label: 'Staff', icon: UserCog },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/settings', label: 'Settings', icon: Settings },
  { to: '/help', label: 'Help', icon: HelpCircle },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 flex-col border-r bg-white/80 backdrop-blur-xl">
        <div className="flex items-center gap-3 px-6 h-16 border-b">
          <div className="w-9 h-9 rounded-xl bg-slate-900 text-white grid place-items-center">
            <Camera size={18} />
          </div>
          <div>
            <div className="text-sm text-slate-500 leading-none">StudioLedger</div>
            <div className="text-xs text-slate-400">Photography Suite</div>
          </div>
        </div>
        <nav className="p-3 space-y-1 overflow-y-auto">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
              <Icon size={18} />
              <span className="text-sm">{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="md:pl-64">
        <header className="sticky top-0 z-20 bg-white/70 backdrop-blur-xl border-b">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="md:hidden w-9 h-9 rounded-xl bg-slate-900 text-white grid place-items-center">
                <Camera size={18} />
              </div>
              <div className="text-sm text-slate-500">Calm control for busy studios</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-sm rounded-lg bg-slate-900 text-white">New</button>
            </div>
          </div>
        </header>

        <main className="px-4 sm:px-6 py-6">
          <Outlet />
        </main>

        {/* Mobile bottom nav */}
        <nav className="fixed md:hidden bottom-0 inset-x-0 bg-white/80 backdrop-blur-xl border-t grid grid-cols-5">
          {[
            { to: '/dashboard', icon: Home, label: 'Home' },
            { to: '/customers', icon: Users, label: 'Customers' },
            { to: '/calendar', icon: Calendar, label: 'Calendar' },
            { to: '/payments', icon: CreditCard, label: 'Pay' },
            { to: '/settings', icon: Settings, label: 'Settings' },
          ].map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `flex flex-col items-center justify-center py-2 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
              <Icon size={18} />
              <span className="text-[10px]">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
