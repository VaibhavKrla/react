// BrowserRouter most used
// Client side routing
// sheryians.com = /
// sheryians.com/about = /about
// sheryians.com/contact = /contact

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App

/**
 * basic setup
 * nested routes
 * dynamic routes
 * usenavigate
 * 404 page
 */
