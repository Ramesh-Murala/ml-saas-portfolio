import React from 'react'
import Dashboard from './pages/Dashboard'
import { DashboardProvider } from './context/DashboardContext'

function App() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  )
}

export default App
