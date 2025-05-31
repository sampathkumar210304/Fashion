import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Categories from './components/Categories';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

import Men from './components/Pages/Mens';
import Women from './components/Pages/Women';
import Kids from './components/Pages/Kids';
import Accessories from './components/Pages/Accessories';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroBanner />
            <Categories />
            <ProductSection />
          </>
        } />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
