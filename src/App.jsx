import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Home from './pages/Home'
import About from './pages/About'
import AboutCompany from './components/AboutCompany'
import AboutPeople from './components/AboutPeople'
import Game from './components/Game'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/about" element={<About />}>
          <Route path="company" element={<AboutCompany />} />
          <Route path="people" element={<AboutPeople />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
