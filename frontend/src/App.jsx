import React from 'react'
import Header from './layout/header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App