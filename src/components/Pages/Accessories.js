import React from 'react';
import { Link } from 'react-router-dom';

 const AccessoriesData = [
  { id: 1, name: "Bags", image: "your-men-image-url", path: "/men" },
  { id: 2, name: "Watches", image: "your-women-image-url", path: "/women" },
];


const Accessories = () => {
  return (
   <section className="categories-section" id="categories">
         <h2>Mens Category</h2>
         <div className="categories-grid">
           {AccessoriesData.map(category => (
             <Link to={category.path} key={category.id} className="category-card">
               <img src={category.image} alt={category.name} />
               <div className="category-name">{category.name}</div>
             </Link>
           ))}
         </div>
       </section>
  );
};

export default Accessories;
