import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Trendy</div>
    <ul className="nav-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#categories">Categories</a></li>
      <li><a href="#products">Products</a></li>
    </ul>
  </nav>
);

export default Navbar;
