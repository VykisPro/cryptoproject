import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductListingPage from './components/ProductListingPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]); // State for cart items

  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 14.99 },
    // Add more products as needed
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ProductListingPage products={products} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails setCartItems={setCartItems} />}
        />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
