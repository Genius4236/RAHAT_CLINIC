import axios from "axios";
import React, { useState } from "react";


// Example product data
const PRODUCTS = [
  { id: 1, name: "DOLO-650mg", price: 50, image: "data:image/jpeg;base64,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" },
  { id: 2, name: "Thermometer", price: 20, image: "https://www.bbassets.com/media/uploads/p/l/40325482_1-dr-morepen-digital-thermometer-with-replaceable-batteries-mt110.jpg" },
  { id: 3, name: "Blood Pressure Monitor", price: 80, image: "https://images-cdn.ubuy.co.in/63bee9ef8a426310231f65a3-omron-bronze-blood-pressure-monitor.jpg" },
//   add more products as needed
];

const StoreComponents=() => {
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

  const checkoutHandler=async (amount)=>{
    // Integrate Razorpay checkout here
    const {data:keyData}=await axios.get("https://rahat-clinic.onrender.com/api/v1/product/payment/key");
    const {key}=keyData;

    const {data:orderdata}=await axios.post("https://rahat-clinic.onrender.com/api/v1/product/payment/process", {amount:total});
    console.log("Payload sent:", { amount: total });
    const {order}=orderdata;
    console.log({order});


       // Open Razorpay Checkout
      const options = {
        key,
        amount,
        currency: 'INR',
        name: 'Rahat Clinic',
        description: 'Test Transaction',
        order_id: order.id,
        // callback_url: 'http://localhost:4000/api/v1/product/paymentVerification',
        callback_url: 'https://rahat-clinic.onrender.com/api/v1/product/paymentVerification', 
        prefill: {
          name: 'MD KHIZER',
          email: 'rahatclinic27@gmail.com',
          contact: '9148495208'
        },
        theme: {
          color: '#54c6f3ff'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
  }
  return (
    <>
    <div className="store-container">
      <div>
        <h2>Products</h2>
        <div className="products-list">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} width={80} />
              <div>{product.name}</div>
              <div>Rs. {product.price}</div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-section">
        <h2>Cart</h2>
        {cart.length === 0 && <div>Cart is empty.</div>}
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            {item.name} x {item.qty} = {item.price * item.qty}
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
        <hr />
        <div>Total: Rs. {total}</div>
        <button className="checkout-btn" onClick={()=>checkoutHandler(total)} disabled={cart.length === 0}>Pay {total}</button>
      </div>
    </div>
    </>
  );
}

export default StoreComponents;