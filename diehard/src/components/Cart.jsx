import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Krepšelis</h2>
      {cartItems.length === 0 ? (
        <p>Jūsų krepšelis yra tuščias.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Kaina: {item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
