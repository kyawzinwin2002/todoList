import React from 'react'
import Navbar from './components/Navbar'
import Body from './pages/Body'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Body/>
      
      
    </div>
  )
}

export default App