import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar } from './components'
import Home from "./Pages/Home";
import News from "./Pages/News";
import Exchanges from "./Pages/Exchanges";
import Cryptocurrency from "./Pages/Cryptocurrency";
import Cryptocurrencies from "./Pages/Cryptocurrencies";
import './App.css'
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptocurrency/:cryptoId" element={<Cryptocurrency />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/news" element={<News />} />
        <Route path="/exchanges" element={<Exchanges />} />
      </Routes>
    </>
  );
}

export default App;
