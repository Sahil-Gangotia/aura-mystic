import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import API from "../api";
import "./Gallery.css";

// Fallback dummy perfumes (agar backend se data load na ho ya delay ho)
const FALLBACK_PERFUMES = [
  {
    id: 101,
    name: "Velvet Rose & Oud",
    category: "Luxury Floral",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80",
    price: 120
  },
  {
    id: 102,
    name: "Aura Mystic Gold",
    category: "Woody & Spice",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&q=80",
    price: 150
  },
  {
    id: 103,
    name: "Oceanic Breeze",
    category: "Fresh Citrus",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80",
    price: 95
  }

       
];

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    API.get("perfumes/")
      .then((response) => {
        // Checking if data is an array
        if (Array.isArray(response.data) && response.data.length > 0) {
          setGalleryImages(response.data);
        } else {
          // Agar backend se array nahi aaya toh fallback data set hoga
          setGalleryImages(FALLBACK_PERFUMES);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching perfumes gallery:", error);
        setGalleryImages(FALLBACK_PERFUMES);
        setLoading(false);
      });
  }, []);

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  // Safe Image URL helper function
  const getImageUrl = (item) => {
    const rawUrl = item.image || item.src || item.image_url;
    if (!rawUrl) return "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80";
    
    if (rawUrl.startsWith("http")) return rawUrl;
    
    const cleanPath = rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`;
    return `http://127.0.0.1:8000${cleanPath}`;
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "80px", color: "#fff", fontSize: "20px" }}>
        ✨ Loading Mystic Showcase...
      </div>
    );
  }

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <span className="gallery-subtitle">✨ VISUAL JOURNAL</span>
        <h1 className="gallery-title">The Mystic Showcase</h1>
        <p className="gallery-desc">
          Explore the visual essence of Aura Mystic. Each bottle tells a story of craftsmanship, elegance, and pure luxury.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div className="gallery-item" key={image.id}>
            <div className="gallery-img-container">
              <img
                src={getImageUrl(image)}
                alt={image.title || image.name || "Perfume"}
                className="gallery-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80";
                }}
              />

              <div className="gallery-overlay">
                <div className="overlay-content">
                  <span className="img-category">{image.category || "Perfume"}</span>
                  <h4 className="img-title">{image.title || image.name}</h4>
                  
                  <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "10px" }}>
                    <button
                      className="gallery-btn"
                      onClick={() => addToCart(image)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="gallery-btn"
                      style={{ background: "#d4af37", color: "#000" }}
                      onClick={() => handleBuyNow(image)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;