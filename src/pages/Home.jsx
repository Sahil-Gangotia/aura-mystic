import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import "./Home.css"; 

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Django backend se API call
    fetch("http://127.0.0.1:8000/api/perfumes/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Fetch Error:", err);
        setError("Backend se connection nahi ho paya!");
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-page-wrapper">
      <Hero />
      
      {/* Backend API Data Status */}
      <div style={{ textAlign: "center", margin: "20px 0", padding: "10px" }}>
        {loading && <p>Backend se connect ho raha hai...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {apiData && (
          <p style={{ color: "green", fontSize: "18px", fontWeight: "bold" }}>
            Backend Status: {apiData.message}
          </p>
        )}
      </div>

      <Features />
    </div>
  );
};

export default Home;