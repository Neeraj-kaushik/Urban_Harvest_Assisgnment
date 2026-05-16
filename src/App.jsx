import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import OrderSummary from "./components/OrderSummary";
import { useCart } from "./hooks/useCart";

const DESKTOP_BREAKPOINT = 900;

export default function App() {
  const {
    cartItems,
    totalItemCount,
    subtotal,
    deliveryCharge,
    total,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setCartOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleAddToCart(product) {
    addToCart(product);
    if (window.innerWidth < DESKTOP_BREAKPOINT) {
      setCartOpen(true);
    }
  }

  return (
    <div className="app">
      <Header
        totalItemCount={totalItemCount}
        onCartClick={() => setCartOpen((prev) => !prev)}
        cartOpen={cartOpen}
      />

      <main className="main-layout">
        <ProductList onAddToCart={handleAddToCart} />

        <div className={`cart-panel ${cartOpen ? "cart-panel--open" : ""}`}>
          <OrderSummary
            cartItems={cartItems}
            subtotal={subtotal}
            deliveryCharge={deliveryCharge}
            total={total}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItem}
            onPlaceOrder={clearCart}
          />
        </div>
      </main>

      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)} />
      )}
    </div>
  );
}
