import { useState } from "react";

export function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  function addToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(id, delta) {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryCharge = 40;
  const total = subtotal + (cartItems.length > 0 ? deliveryCharge : 0);

  return {
    cartItems,
    totalItemCount,
    subtotal,
    deliveryCharge,
    total,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
  };
}
