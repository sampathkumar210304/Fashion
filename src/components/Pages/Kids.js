import React from 'react';
import { Link } from 'react-router-dom';

 const Kids = [
  { id: 1, name: "T-Shirts", image: "your-men-image-url", path: "/men" },
  { id: 2, name: "Shorts", image: "your-women-image-url", path: "/women" },
];

const Kid = () => {
  return (
    <section className="categories-section" id="categories">
          <h2>Mens Category</h2>
          <div className="categories-grid">
            {Kids.map(category => (
              <Link to={category.path} key={category.id} className="category-card">
                <img src={category.image} alt={category.name} />
                <div className="category-name">{category.name}</div>
              </Link>
            ))}
          </div>
        </section>
  );
};

export default Kid;
