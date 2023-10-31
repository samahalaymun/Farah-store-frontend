import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Blogs from './pages/Blogs';
import CompareProducts from './pages/CompareProducts';
import WishList from './pages/WishList';

function App() {
  return (
    <Router basename="/Farah-store-frontend">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<Store />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="compare" element={<CompareProducts />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
