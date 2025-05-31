import React, { useState } from 'react';
import '../styles/ProductSection.css';

const sampleProducts = [
  {
    id: 1,
    name: "Men's Denim Jacket",
    description: "Premium winter denim for men",
    price: 1699,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIwVw339qP6-Zc3POx_Iz8tp_47VZMW2Lft3d7rBdFf9CWNLCTIY5yVp2X5FGkpLRccaDUIjsGq-SY8qnIgawCBnHiQXuo7wgpaNzz49IH"
  },
  {
    id: 2,
    name: "Stylish Handbag",
    description: "Trendy leather bag for daily use",
    price: 2299,
    image: "https://m.media-amazon.com/images/I/61+mLsWpdwL._SY695_.jpg"
  },
  {
    id: 3,
    name: "Classic White Sneakers",
    description: "Comfort meets casual fashion",
    price: 1499,
    image: "https://media.istockphoto.com/id/1417090656/photo/white-leather-sneaker.jpg?s=612x612&w=0&k=20&c=mF0ZLSz0DKnuVgR1KEPhPnGV4xTvWB2R_zsWJIKoko0="
  },
  {
    id: 4,
    name: "Women's Floral Dress",
    description: "Perfect for brunch and casual outings",
    price: 1899,
    image: "https://littleboxindia.com/cdn/shop/files/Printed_Floral_Halter_Slim_Puff_Sleeve_Side_Slit_Dress_front_360x.jpg?v=1743663747"
  }
];

const ProductSection = () => {
  const [, setCart] = useState([]);

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
    setCart(prev => [...prev, productName]);
  };

  return (
    <section className="product-section" id="products">
      <h2>Our Trending Picks</h2>
      <div className="product-grid">
        {sampleProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">₹{product.price}</p>
              <button onClick={() => handleAddToCart(product.name)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
