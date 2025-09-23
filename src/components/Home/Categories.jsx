import React from "react";
import "../css/Explore.css";
import { categories } from "../products/CategoriesData";
export default function Categories() {
  return (
    <div>
      <div className="categories-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              <img src={cat.image} alt={`${cat.name} Clothing`} />
              <div className="overlay">
                <h3>{cat.name}</h3>
                <button>Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
