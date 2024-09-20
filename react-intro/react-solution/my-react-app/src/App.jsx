import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card/Card.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import CardCreator from './components/card-creator/CardCreator.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <CardCreator />

      <div className="module-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </>
  )
}

export default App
