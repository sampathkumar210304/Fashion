import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="products-grid">
      {products.map(product => (
        <Product key={product._id} {...product} />
      ))}
    </div>
  );
};

export default Products;
