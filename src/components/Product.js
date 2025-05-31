import React from 'react';

const Product = ({ name, image, description, size, rating, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Sizes: {size.join(', ')}</p>
      <p>Rating: {rating} ⭐</p>
      <p>Price: ₹{price}</p>
    </div>
  );
};

export default Product;
