import { useState } from 'react'
import './App.css'
import Home from './components/Home/home'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 > React Router </h1>
      <Header />
      <Home />
      <Footer />

    </>
  )
}

export default App
