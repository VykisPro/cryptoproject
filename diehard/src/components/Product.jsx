import React from 'react';

const Product = ({ product, addToCart }) => {
  const { id, name, price } = product;

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
