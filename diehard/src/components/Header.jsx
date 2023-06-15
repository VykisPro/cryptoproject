import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">VykisPro shop</h1>
        </div>
        <nav className="space-x-4">
          <Link to="/" className="text-sm">Pagrindinis</Link>
          <Link to="/products" className="text-sm">Produktai</Link>
          <Link to="/cart" className="text-sm">Krepšelis</Link>
          <Link to="/contact" className="text-sm">Papildoma informacija</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
2