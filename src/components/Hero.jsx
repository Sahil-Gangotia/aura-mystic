import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">


      <div className="hero-left">

        <span className="hero-tag">
           Luxury Fragrance
        </span>

        <h1>
          Discover The Art <br />
          Of Premium <br />
          Perfumes
        </h1>

        <p>
          Experience timeless elegance with our
          exclusive luxury fragrance collection
          crafted for every personality.
        </p>

        <button className="hero-btn">
          Shop Now
        </button>

      </div>

    

      <div className="hero-right">

        <img
          src="https://tse2.mm.bing.net/th/id/OIP.vnGIN2J-Lp-yRcYEvZpsWAHaHa?pid=Api&P=0&h=3000"
          alt="perfume"
        />

      </div>

    </section>
  );
};

export default Hero;