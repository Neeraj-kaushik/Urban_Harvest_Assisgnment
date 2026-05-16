import React, { useState } from "react";
import { products } from "../data/products";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

export default function ProductList({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="product-list-section">
      <div className="section-header">
        <h2 className="section-title">Today's Fresh Picks</h2>
        <span className="item-count">{filtered.length} items</span>
      </div>

      <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />

      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
