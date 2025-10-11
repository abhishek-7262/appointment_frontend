import React, { Suspense } from 'react'
import LoadingScreen from './components/loading-screen/LoadingScreen'
import { Routes, Route } from 'react-router-dom'

import { Login } from './lazy/global.pages'

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>

        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Suspense>
  )
}

export default App