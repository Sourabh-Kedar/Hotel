import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'

function App() {

  let isOwner = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwner && <Navbar/>}
    </div>
  )
}

export default App