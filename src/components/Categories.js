import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Categories.css';

const categories = [
  { id: 1, name: "Men", image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710999960_7080226.jpg?w=480&dpr=1.5", path: "/men" },
  { id: 2, name: "Women", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/2/82c6571225616_1.jpg?rnd=20200526195200&tr=w-1080", path: "/women" },
  { id: 3, name: "Kids", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4iVGnR5JtXjzLLEyGUpFSVe75NqZ9DDzQFd6ulCJO__E1mpf8e9DcqTFt2U0S15AxUV8aMTDGIjYBsWMq6oEYA5LVWAiZVEMokpcxfKjntliNk4fTIT6sMKM&usqp=CAc", path: "/kids" },
  { id: 4, name: "Accessories", image: "https://sylvi.in/cdn/shop/files/Sylvi_Iconic_Brown_No_hand_800x1000_c2910dc4-1b62-4e9e-bece-b07b48f97ee5.webp?v=1690542069", path: "/accessories" }
];

const Categories = () => {
  return (
    <section className="categories-section" id="categories">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <Link to={category.path} key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <div className="category-name">{category.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
