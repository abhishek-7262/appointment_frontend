import React, { Suspense } from 'react'
import LoadingScreen from './components/loading-screen/LoadingScreen'
import { Routes, Route } from 'react-router-dom'

import { Login } from './lazy/global.pages'

import { AdminDashboard, Dashboard } from './lazy/admin.pages'

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>

        <Route path="/" element={<Login />}></Route>

        <Route path='/admin' element={<AdminDashboard />}>
          <Route path="" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App