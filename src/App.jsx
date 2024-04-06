import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Navigation from './components/Navigation'
import './App.css'

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
