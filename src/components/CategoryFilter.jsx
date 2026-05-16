import React from "react";
import { categories } from "../data/products";

export default function CategoryFilter({ selected, onChange }) {
  return (
    <div className="category-filter">
      <div className="category-filter-scroll">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${selected === cat ? "category-pill--active" : ""}`}
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
