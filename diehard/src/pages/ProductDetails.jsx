import React from 'react';

const ProductDetails = () => {
  // Replace with your actual product data
  const product = {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm mb-4">Price: ${product.price}</p>
          <p className="text-gray-800">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
