import React from 'react';
import { Link } from 'react-router-dom';

 const Mens = [
  { id: 1, name: "Shirts", image: "your-men-image-url", path: "/men" },
  { id: 2, name: "Pants", image: "your-women-image-url", path: "/women" },
];

const Men = () => {
  return (
<section className="categories-section" id="categories">
      <h2>Mens Category</h2>
      <div className="categories-grid">
        {Mens.map(category => (
          <Link to={category.path} key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <div className="category-name">{category.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Men;
