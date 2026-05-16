import React, { useState } from "react";
import CartItem from "./CartItem";

export default function OrderSummary({
  cartItems,
  subtotal,
  deliveryCharge,
  total,
  onUpdateQuantity,
  onRemove,
  onPlaceOrder,
}) {
  const [confirmed, setConfirmed] = useState(false);

  function handlePlaceOrder() {
    onPlaceOrder();
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 4000);
  }

  const isEmpty = cartItems.length === 0;

  return (
    <aside className="order-summary">
      <h2 className="order-summary-title">Your Cart</h2>

      {confirmed && (
        <div className="confirmation-banner">
          <span className="confirmation-icon">✓</span>
          <div>
            <p className="confirmation-heading">Order Placed!</p>
            <p className="confirmation-sub">We'll deliver your fresh groceries soon.</p>
          </div>
        </div>
      )}

      {isEmpty && !confirmed ? (
        <div className="empty-cart">
          <span className="empty-cart-icon">🛒</span>
          <p className="empty-cart-text">Your cart is empty</p>
          <p className="empty-cart-sub">Add items from the listing to get started.</p>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}
          </div>

          <div className="order-breakdown">
            <div className="breakdown-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="breakdown-row">
              <span>Delivery</span>
              <span>₹{deliveryCharge}</span>
            </div>
            <div className="breakdown-row breakdown-row--total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button
            className="place-order-btn"
            onClick={handlePlaceOrder}
            disabled={isEmpty}
          >
            Place Order
          </button>
        </>
      )}
    </aside>
  );
}
