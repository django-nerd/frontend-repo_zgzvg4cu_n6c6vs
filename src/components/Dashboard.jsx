import React from 'react'

const Card = ({ title, children, right }) => (
  <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-medium text-slate-700">{title}</h3>
      {right}
    </div>
    <div>{children}</div>
  </div>
)

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Overview</h1>
        <p className="text-slate-500 text-sm">Today at a glance</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Today's bookings">
          <div className="text-3xl font-semibold">7</div>
          <p className="text-slate-500 text-sm">3 shoots, 4 edits</p>
        </Card>
        <Card title="Recent payments">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Ritika</span><span>$220</span></div>
            <div className="flex justify-between"><span>Aditya</span><span>$90</span></div>
            <div className="flex justify-between"><span>Anjali</span><span>$140</span></div>
          </div>
        </Card>
        <Card title="Pending tasks">
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Deliver wedding album</li>
            <li>Confirm studio A maintenance</li>
            <li>Call supplier for lights</li>
          </ul>
        </Card>
        <Card title="Revenue">
          <div className="h-24 w-full">
            <svg viewBox="0 0 100 40" className="w-full h-full">
              <polyline fill="none" stroke="#0f172a" strokeWidth="2" points="0,30 10,28 20,26 30,22 40,24 50,20 60,18 70,16 80,14 90,12 100,10" />
              <rect x="0" y="38" width="100" height="2" fill="#e2e8f0" />
            </svg>
          </div>
        </Card>
      </div>
    </div>
  )
}
