import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Navigation from './components/Navigation'
import './App.css'

let prodArr = []

  for (let i = 1; i <= 5; i++){
    fetch(`https://fakestoreapi.com/products/${i}`)
    .then((response) => response.json())
    .then((response) => prodArr.push({ title: response.title, image: response.image }))
    .catch((error) => console.error(error));
  }

function App() {

  const [cartAmount, setCartAmount] = useState(0);
  const [products, setProducts] = useState(prodArr);

  const callbackFuntion = (amount) => {
    setCartAmount(cartAmount + parseInt(amount));
  }

  return (
    <>
      <Navigation
        amount={cartAmount}/>
      <Outlet
        context={[callbackFuntion, products]}/>
    </>
  )
}

export default App
