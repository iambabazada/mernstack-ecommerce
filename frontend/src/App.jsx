import React from 'react'
import Header from './layout/header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home/Home';
import Products from './views/Products/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App