import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Navigation from './components/Navigation'
import './App.css'

function App() {

  const [cartAmount, setCartAmount] = useState(0);

  const callbackFuntion = (amount) => {
    setCartAmount(cartAmount + parseInt(amount));
  }

  return (
    <>
      <Navigation
        amount={cartAmount}/>
      <Outlet
        context={callbackFuntion}/>
    </>
  )
}

export default App
