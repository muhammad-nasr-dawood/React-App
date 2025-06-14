import React, { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Home from './pages/Home'
import About from './pages/About'
import AboutCompany from './components/AboutCompany'
import AboutPeople from './components/AboutPeople'
import Game from './components/Game'
import Menu from './pages/Menu'


function App() {
  const categories = [
    { id: 1, name: 'Burger' },
    { id: 2, name: 'Fries' },
    { id: 3, name: 'Water' },
  ];
  // Products state lifted up, with categoryId as foreign key and isInCart property
  const [products, setProducts] = useState([
    { id: 1, name: 'Larger Burger', price: 90, count: 0, categoryId: 1, isInCart: false },
    { id: 2, name: 'Larger Fries', price: 40, count: 0, categoryId: 2, isInCart: false },
    { id: 3, name: 'Larger Water', price: 20, count: 0, categoryId: 3, isInCart: false },
    { id: 4, name: 'Medium Burger', price: 80, count: 0, categoryId: 1, isInCart: false },
    { id: 5, name: 'Medium Fries', price: 30, count: 0, categoryId: 2, isInCart: false },
    { id: 6, name: 'Medium Water', price: 15, count: 0, categoryId: 3, isInCart: false },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  // Category handler using clone-edit-set pattern
  const handleSelectCategory = (id) => {
    // clone (not needed for primitives)
    let newCategory = id;
    // edit (if needed)
    // set state
    setSelectedCategory(newCategory);
  };

  // Add to cart handler
  const handleAddToCart = (id) => {
    // clone
    let newProducts = [...products];
    // edit
    newProducts = newProducts.map(p =>
      p.id === id ? { ...p, count: p.count + 1, isInCart: true } : p
    );
    // set state
    setProducts(newProducts);
  };

  // Cart handlers
  const handleIncrement = (id) => {
    // clone
    let newProducts = [...products];
    // edit
    newProducts = newProducts.map(p =>
      p.id === id ? { ...p, count: p.count + 1, isInCart: true } : p
    );
    // set state
    setProducts(newProducts);
  };
  const handleDecrement = (id) => {
    // clone
    let newProducts = [...products];
    // edit
    newProducts = newProducts.map(p => {
      if (p.id === id) {
        const newCount = p.count > 0 ? p.count - 1 : 0;
        return { ...p, count: newCount, isInCart: newCount > 0 };
      }
      return p;
    });
    // set state
    setProducts(newProducts);
  };
  const handleReset = () => {
    // clone
    let newProducts = [...products];
    // edit
    newProducts = newProducts.map(p => ({ ...p, count: 0, isInCart: false }));
    // set state
    setProducts(newProducts);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={products.filter(p => p.isInCart).length} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart products={products} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleReset={handleReset} />} />
        <Route path="/" element={<Menu products={products} onAddToCart={handleAddToCart} selectedCategory={selectedCategory} handleSelectCategory={handleSelectCategory} categories={categories} />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<AboutCompany />} />
          <Route path="people" element={<AboutPeople />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
