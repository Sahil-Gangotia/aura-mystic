import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center", color: "#fff" }}>
        <h2>Your Cart is Empty 🛒</h2>
        <p style={{ margin: "15px 0", color: "#aaa" }}>Explore our luxury collection and pick your favorite perfume!</p>
        <Link to="/gallery" style={{ color: "#d4af37", textDecoration: "underline", fontWeight: "bold" }}>
          Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto", color: "#fff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Shopping Cart ({totalItems} items)</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {cart.map((item) => (
          <div 
            key={item.id} 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between", 
              background: "#1a1a1a", 
              padding: "15px", 
              borderRadius: "10px",
              border: "1px solid #333"
            }}
          >
            <img 
              src={item.src && item.src.startsWith("http") ? item.src : `http://127.0.0.1:8000${item.src}`} 
              alt={item.title} 
              style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px" }}
            />
            
            <div style={{ flex: 1, marginLeft: "20px" }}>
              <h3 style={{ margin: 0 }}>{item.title}</h3>
              <p style={{ margin: "5px 0", color: "#888", fontSize: "14px" }}>{item.category}</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button 
                onClick={() => updateQuantity(item.id, -1)}
                style={{ padding: "5px 12px", background: "#333", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
              >
                -
              </button>
              <span style={{ fontWeight: "bold", width: "20px", textAlign: "center" }}>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, 1)}
                style={{ padding: "5px 12px", background: "#333", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
              >
                +
              </button>
            </div>

            <button 
              onClick={() => removeFromCart(item.id)}
              style={{ marginLeft: "20px", background: "transparent", color: "#ff4d4d", border: "none", cursor: "pointer" }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "30px", textAlign: "right" }}>
        <button 
          onClick={() => alert("Order Placed Successfully!")}
          style={{ 
            padding: "12px 30px", 
            backgroundColor: "#d4af37", 
            color: "#000", 
            border: "none", 
            borderRadius: "6px", 
            fontWeight: "bold", 
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Checkout Now
        </button>
      </div>
    </div>
  );
};

export default Cart;