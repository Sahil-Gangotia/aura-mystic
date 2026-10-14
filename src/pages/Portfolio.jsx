import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
  id: 0,
  title: "New Featured Launch",
  client: "Aura Signature",
  year: "2026",
  description: "Mystic Aura is a captivating fragrance that opens with a bright, luminous blend of crisp citrus and warm, exotic spice. It blooms into a rich, velvety heart of floral accords layered over dark, mysterious woods. The scent finally settles into a smooth, magnetic base of creamy vanilla and earthy musk that lingers intimately. Designed for the modern wearer, it leaves a striking yet sophisticated trail that feels entirely unforgettable.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSZuAt4vkUiPwTx_PAnr9qebd9Wd5SmJaQsjgcgKZMQ&s" 
    },
     { id: 1,
      title: "FDA Approved Product",
      client: "Aura Premium Launch",
      year: "2026",
      description: "A complete brand identity and packaging design overhaul for our flagship luxury perfume line.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFLDGqyV-yOLbIzY2jOLmeoj91Chw5GcHPa0YNYAg5CQ&s=10"
    },
    {
      id: 2,
      title: "Oud & Mystic Campaign",
      client: "Global Collection",
      year: "2025",
      description: "Digital marketing visuals and sensory storytelling curated for the international rollout of Middle-Eastern blends.",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Eco-Aura Sustainable Pack",
      client: "Green Luxury Initiative",
      year: "2026",
      description: "Designing 100% biodegradable luxury boxes and refillable crystal perfume bottles with zero carbon footprint.",
      image: "https://tse1.mm.bing.net/th/id/OIP.obIIrMShlACirvnw09NOFQHaEJ?pid=Api&P=0&h=1800"
    }
  ];

  return (
    <section className="portfolio-section">
      {/* Page Header */}
      <div className="portfolio-header">
        <span className="portfolio-subtitle">✨ CURATED WORK</span>
        <h1 className="portfolio-title">Case Studies & Projects</h1>
        <p className="portfolio-desc">
          A deep dive into our finest creations, conceptual designs, and successful brand launches in the world of luxury perfumery.
        </p>
      </div>

      <div className="portfolio-list">
        {projects.map((project, index) => (
          <div 
            className={`portfolio-item ${index % 2 === 1 ? "reverse-layout" : ""}`} 
            key={project.id}
          >
            <div className="project-image-box">
              <img src={project.image} alt={project.title} className="project-img" />
            </div>

            <div className="project-text-box">
              <div className="project-meta">
                <span>{project.client}</span> • <span>{project.year}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <button className="project-view-btn">View Case Study</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;