import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ElectionPage from './pages/ElectionPage'
import HealthLeavePage from './pages/HealthLeavePage'
import FacilityBookingPage from './pages/FacilityBookingPage'
import ApplicationApprovalPage from './pages/ApplicationApprovalPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ElectionPage />
      <HealthLeavePage/>
      <FacilityBookingPage/>
      <ApplicationApprovalPage/>
    </>
  )
}

export default App
