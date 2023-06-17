import React, { useEffect, useState } from 'react';
import Cart from './Cart'; 

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(' http://localhost:3000/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.title} sėkmingai pridėta į krepšelį`);
  };

  return (
    <div className=''>
      <h2>Product Listing Page</h2>
      <div className="grid grid-cols-3 gap-1">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="bg-emerald-100 p-4 shadow rounded m-5 no-wrap hover:m-0 hover:bg-emerald-200 flex flex-col">
              <h3 className="text-xl font-bold pb-5 pt-3 text-center">{product.title}</h3>
              <div className="w-full">
                <img className='rounded-lg w-full h-96 object-cover' src={product.image} alt={product.id} />
              </div>
              <div className="w-1/2 pl-3 flex-grow flex flex-col justify-end">
                <p className="text-black-100">Aprašymas:{product.description}</p>
                <p className="text-gray-500 self-end">Kaina:{product.price}</p>
                <button onClick={() => addToCart(product)}>Pridėti</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      <Cart cartItems={cart} />
    </div>
  );
};

export default ProductListingPage;
