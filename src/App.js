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
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import ShoppingCheckout from './pages/ShoppingCheckout';


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
          <Route path="cart" element={<Cart />} />
          <Route path="compare" element={<CompareProducts />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="store/products/:id" element={<SingleProduct />} />
        </Route>
        <Route path="checkout" element={<ShoppingCheckout />} />
      </Routes>
    </Router>
  );
}

export default App;
