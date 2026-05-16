import React from "react";

export default function Header({ totalItemCount, onCartClick, cartOpen }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon">🥬</span>
          <div className="logo-text">
            <span className="logo-name">FreshBasket</span>
            <span className="logo-tagline">farm-fresh, delivered</span>
          </div>
        </div>

        <button
          className={`cart-btn ${cartOpen ? "cart-btn--active" : ""}`}
          onClick={onCartClick}
          aria-label={`Cart with ${totalItemCount} items`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="cart-btn-label">Cart</span>
          {totalItemCount > 0 && (
            <span className="cart-badge">{totalItemCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
