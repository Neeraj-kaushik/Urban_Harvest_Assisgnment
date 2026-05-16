<<<<<<< HEAD
# Urban_Harvest_Assisgnment
=======
# FreshBasket 🥬

A simple grocery ordering web app built with React.

---

## Getting Started

**Prerequisites:** Node.js v18 or later

```bash
# 1. Clone the repository
git clone https://github.com/<Your name>/Urban_Harvest_Assisgnment.git
cd fresh-basket

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open http://localhost:5173 in your browser.

**Build for production:**

```bash
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Logo + cart toggle button
│   ├── CategoryFilter.jsx  # Category pill filters
│   ├── ProductCard.jsx     # Individual product display
│   ├── ProductList.jsx     # Grid of products + filter logic
│   ├── CartItem.jsx        # Single row inside the cart
│   └── OrderSummary.jsx    # Cart panel with price breakdown + order action
├── data/
│   └── products.js         # Static product data + categories list
├── hooks/
│   └── useCart.js          # All cart state logic (add, update, remove, clear)
├── App.jsx                 # Root component, layout, cart open/close
├── main.jsx                # React DOM entry point
└── index.css               # All styles (CSS variables + component styles)
```

### Why this structure?

**`data/products.js`** keeps static data in one place. In a real app, you'd swap it for an API call without touching any component.

**`useCart.js`** is a custom hook that separates cart logic — quantity math, subtotal, totals — from UI components. Components call the hook and get what they need.

**`components/`** are split by responsibility. Each file does one thing, which makes them easy to read and change independently.

**`index.css`** uses CSS custom properties for the color palette and spacing so the visual theme is controlled in one place.

---

## Features

- Filter products by category
- Add items to cart; adding the same item again increases its quantity
- Increase / decrease / remove items from the cart
- Live cart item count shown in the header at all times
- Order summary with subtotal, flat ₹40 delivery charge, and final total
- Out-of-stock items are visually distinct and cannot be added
- Place Order clears the cart and shows a confirmation message
- Responsive: two-column layout on desktop, slide-in cart drawer on mobile

---

## Tech Stack

- React 18 via Vite
- Plain CSS (no UI library)
- Google Fonts: Fraunces + DM Sans
>>>>>>> master
