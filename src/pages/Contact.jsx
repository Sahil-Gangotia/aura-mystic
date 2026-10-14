import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    address: "", 
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! for message.`);
    setFormData({ name: "", email: "", subject: "", address: "", message: "" });
  };

  return (
  
    <section className="contact-section">
      <div className="contact-container">
        
        <div className="contact-info-box">
          <span className="contact-subtitle"> GET IN TOUCH</span>
          <h2 className="contact-title">We’d Love to Hear From You</h2>
          <p className="contact-desc">
            Have a question about our luxury blends, custom orders, or partnerships? Reach out to us, and our concierge team will assist you.
          </p>

          <div className="info-details-list">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div className="info-text">
                <h4>Our Address</h4>
                <p>102, Premium Luxury Tower, Mohali, Chandigarh, India</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div className="info-text">
                <h4>Email Us</h4>
                <p>gangotiasahil@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <div className="info-text">
                <h4>Call Support</h4>
                <p>+91 7807337005</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">⏳</span>
              <div className="info-text">
                <h4>Shopping Hours</h4>
                <p>Mon - Sat: 10:00 AM - 07:00 PM </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-box">
          <form onSubmit={handleSubmit} className="luxury-form">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" name="name" 
                value={formData.name} onChange={handleChange} 
                placeholder="Sahil" 
                required 
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" 
                name="email" 
                value={formData.email} onChange={handleChange} 
                placeholder="abcd@gmail.com"
                required 
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Inquiry about Mystic fragnence" 
                required 
              />
            </div>

            <div className="form-group adderss-proof"> 
              <label>Address</label>
              <input 
                type="text"
                name="address" 
                value={formData.address}
                onChange={handleChange}
                placeholder="vill, city, state, country, pincode...."
                required 
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="5" 
                placeholder="Write a description on your order..." 
                required 
              ></textarea>
            </div>

            <button type="submit" className="form-submit-btn">Get Order it</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;