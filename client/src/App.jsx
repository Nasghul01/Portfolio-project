import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Portfolio  from './components/Portfolio.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      {/* <Contact/> */}
      <Footer/>
    </>
  )
}

export default App 