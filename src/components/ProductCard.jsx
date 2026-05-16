import React from "react";

const categoryEmoji = {
  Vegetables: "🥦",
  Fruits: "🍎",
  Dairy: "🥛",
  Herbs: "🌿",
};

export default function ProductCard({ product, onAddToCart }) {
  const { name, category, price, unit, inStock } = product;
  const emoji = categoryEmoji[category] || "🛒";

  return (
    <div className={`product-card ${!inStock ? "product-card--out-of-stock" : ""}`}>
      {!inStock && <span className="out-of-stock-badge">Out of Stock</span>}

      <div className="product-card-emoji">{emoji}</div>

      <div className="product-card-body">
        <div className="product-card-category">{category}</div>
        <h3 className="product-card-name">{name}</h3>
        <div className="product-card-unit">{unit}</div>
      </div>

      <div className="product-card-footer">
        <span className="product-card-price">₹{price}</span>
        <button
          className="add-btn"
          onClick={() => onAddToCart(product)}
          disabled={!inStock}
          aria-label={`Add ${name} to cart`}
        >
          {inStock ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add
            </>
          ) : (
            "Unavailable"
          )}
        </button>
      </div>
    </div>
  );
}
