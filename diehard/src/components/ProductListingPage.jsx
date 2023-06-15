import React, { useEffect, useState } from 'react';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className=''>
      <h2>Product Listing Page</h2>
      <div className="grid grid-cols-3 gap-4">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="bg-emerald-100 p-4 shadow rounded">
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="text-gray-500">Kaina: ${product.price}</p>
              <p className="text-gray-500">Kategorija: ${product.category}</p>
              <p className="text-gray-500">Aprašymas: ${product.description}</p>
              <img className='rounded-lg max-w-xs' src={product.image} alt={product.id} />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListingPage;
