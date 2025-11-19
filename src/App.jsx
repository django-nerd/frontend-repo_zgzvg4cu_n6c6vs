import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Customers from './components/Customers'
import CustomerForm from './components/CustomerForm'
import CustomerProfile from './components/CustomerProfile'
import CalendarView from './components/Calendar'
import BookingForm from './components/BookingForm'
import Payments from './components/Payments'
import IncomeForm from './components/IncomeForm'
import ExpenseForm from './components/ExpenseForm'
import Inventory from './components/Inventory'
import Analytics from './components/Analytics'
import Reports from './components/Reports'
import Settings from './components/Settings'
import Staff from './components/Staff'
import Notifications from './components/Notifications'
import Packages from './components/Packages'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/new" element={<CustomerForm />} />
        <Route path="/customers/:id" element={<CustomerProfile />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/bookings/new" element={<BookingForm />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/payments/income" element={<IncomeForm />} />
        <Route path="/payments/expense" element={<ExpenseForm />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/packages" element={<Packages />} />
      </Route>
    </Routes>
  )
}

export default App
