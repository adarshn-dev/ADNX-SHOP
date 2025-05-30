import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
