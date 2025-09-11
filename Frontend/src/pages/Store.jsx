import React, { useState } from "react";

// Example product data
const PRODUCTS = [
  { id: 1, name: "Stethoscope", price: 50, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Thermometer", price: 20, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Blood Pressure Monitor", price: 80, image: "https://via.placeholder.com/100" },
];

export default function Store() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <h2>Products</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {PRODUCTS.map((product) => (
            <div key={product.id} style={{ border: "1px solid #ccc", padding: 10 }}>
              <img src={product.image} alt={product.name} width={80} />
              <div>{product.name}</div>
              <div>${product.price}</div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Cart</h2>
        {cart.length === 0 && <div>Cart is empty.</div>}
        {cart.map((item) => (
          <div key={item.id} style={{ marginBottom: 10 }}>
            {item.name} x {item.qty} = ${item.price * item.qty}
            <button style={{ marginLeft: 10 }} onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
        <hr />
        <div>Total: ${total}</div>
        <button disabled={cart.length === 0}>Checkout</button>
      </div>
    </div>
  );
}
