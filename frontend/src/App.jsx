import React from 'react'
import Header from './layout/header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home/Home';
import Products from './views/Products/Products';
import Footer from './layout/footer/Footer';
import ProductDetail from './views/ProductDetail/ProductDetail';
import Auth from './views/Auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/products/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App