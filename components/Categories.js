// src/components/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="container my-5">
      <h1>Book Categories</h1>
      <div className="list-group">
        <Link to="/categories/fiction" className="list-group-item list-group-item-action">Fiction</Link>
        <Link to="/categories/non-fiction" className="list-group-item list-group-item-action">Non-Fiction</Link>
        <Link to="/categories/sci-fi" className="list-group-item list-group-item-action">Science Fiction</Link>
        <Link to="/categories/biography" className="list-group-item list-group-item-action">Biography</Link>
        <Link to="/categories/mystery" className="list-group-item list-group-item-action">Mystery</Link>
        <Link to="/categories/romance" className="list-group-item list-group-item-action">Romance</Link>
      </div>
    </div>
  );
};

export default Categories;
