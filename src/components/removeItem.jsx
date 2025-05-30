import React, { useState } from 'react';
import Cart from './Cart';

const App = () => {
  const [cart, setCart] = useState([
    { name: 'Floral Dress', price: 25 },
    { name: 'Red Evening Gown', price: 45 },
    { name: 'Casual White Dress', price: 30 },
  ]);

  const removeItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Cart cart={cart} removeItem={removeItem} />
    </div>
  );
};

export default App;
