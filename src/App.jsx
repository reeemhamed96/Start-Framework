import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'

function App() {


  return (
    <>
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
