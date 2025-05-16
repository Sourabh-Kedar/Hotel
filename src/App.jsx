import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  let isOwner = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwner && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App