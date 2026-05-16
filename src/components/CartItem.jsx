import React from "react";

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <span className="cart-item-name">{item.name}</span>
        <span className="cart-item-unit">{item.unit}</span>
      </div>

      <div className="cart-item-controls">
        <button
          className="qty-btn"
          onClick={() => onUpdateQuantity(item.id, -1)}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button
          className="qty-btn"
          onClick={() => onUpdateQuantity(item.id, 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <div className="cart-item-right">
        <span className="cart-item-price">₹{item.price * item.quantity}</span>
        <button
          className="remove-btn"
          onClick={() => onRemove(item.id)}
          aria-label={`Remove ${item.name}`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
