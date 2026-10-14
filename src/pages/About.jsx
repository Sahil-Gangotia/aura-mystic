import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
      
        <div className="about-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop" 
            alt="Aura Mystic About" 
            className="about-img"
          />
          <div className="about-badge">Since 2026</div>
        </div>

        <div className="about-content">
          <span className="about-tagline"> OUR STORY</span>
          <h2 className="about-heading">
            About Aura Mystic <br />
            <span>Crafting Timeless Luxury</span>
          </h2>
          
          <p className="about-description">
            Welcome to Aura Mystic Rituals, where fragrance meets poetry. We believe that a perfume is not just a scent—it is an invisible identity, a silent language, and a beautiful memory waiting to be uncovered.
          </p>

          <p className="about-description">
            Our luxury fragrances are meticulously crafted using the finest ingredients sourced from around the globe. Every single blend is designed to evoke elegance, boost confidence, and leave an unforgettable impression.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <h4> 100% Premium Ingredients</h4>
              <p>Sourced from nature for long-lasting impact.</p>
            </div>
            <div className="highlight-item">
              <h4> Cruelty-Free & Pure</h4>
              <p>Crafted with love, ethics, and zero compromises.</p>
            </div>
          </div>

          <button className="about-explore-btn">Discover More</button>
        </div>

      </div>
      <div className="card text-bg-dark">
  <img src="https://tse4.mm.bing.net/th/id/OIP.HoI_BhPLQg2XQe2uP6XYSQHaJQ?pid=Api&P=0&h=1800" className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title">Divine AURA Fragnence</h5>
    <p className="card-text">Step into a world of elegance and mystery with Aura Mystic, a captivating fragrance designed for those who leave a lasting impression. The scent opens with fresh citrus and fruity accords, unfolding into a heart of exotic florals and warm spices. As it settles, rich woody notes, soft musk, and sensual amber create a deep, unforgettable aura.

Perfect for both day and evening wear, Aura Mystic blends sophistication with confidence, making every moment feel enchanting.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
    </section>
  );
};

export default About;