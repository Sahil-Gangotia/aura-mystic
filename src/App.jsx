import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import Sign_in from './pages/Sign_in.jsx'
import Sign_up from './pages/Sign_up.jsx'
import Cart from './pages/cart.jsx'
import { CartProvider } from './context/CartContext.jsx' // Single named import
import './App.css'

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signin" element={<Sign_in />} />
        <Route path="/Signup" element={<Sign_up />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  )
}

export default App;