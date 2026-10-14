import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">

      <div className="stats">
        <div className="stat-box">
          <h1>4.8*</h1>
          <p>
            Trusted by thousands of perfume lovers
            around the world
          </p>
        </div>

        <div className="stat-box">
          <h1>500+</h1>
          <p>
            Luxury fragrances crafted with
            premium ingredients
          </p>
        </div>

        <div className="stat-box">
          <h1>10K+</h1>
          <p>
            Happy customers enjoying timeless
            elegance every day
          </p>
        </div>
      </div>

      <div className="feature-content">
        <div className="feature-image">
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop"
            alt="perfume"
          />
        </div>

        <div className="feature-text">
          <span> Premium Collection</span>
          <h1>
            Crafted Fragrances <br />
            For Every Moment
          </h1>
          <p>
            Discover our exclusive perfume collection
            designed to bring elegance, confidence,
            and unforgettable impressions.
          </p>
          <button>
            Explore Now
          </button>
        </div>
      </div>

      <div className="explore">
        <h1>Explore My Portfolio Showcase</h1>
        
        <div className="card-grid">
          
          {/* Card 1 */}
          <div className="my-card">
            <div className="card-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=500&auto=format&fit=crop" 
                className="card-img" 
                alt="perfume 1" 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Classic Elegance</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="my-card">
            <div className="card-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=500&auto=format&fit=crop" 
                className="card-img" 
                alt="perfume 2" 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Mystic Oud</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="my-card">
            <div className="card-img-wrapper">
              <img 
                src="https://tse4.mm.bing.net/th/id/OIP.gGXHLEXzEmFCMGMgjp8DYQHaLH?pid=Api&P=0&h=2000" 
                className="card-img" 
                alt="perfume 3" 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Ocean Breeze</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="my-card">
            <div className="card-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=500&auto=format&fit=crop" 
                className="card-img" 
                alt="perfume 4" 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Royal Velvet</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;