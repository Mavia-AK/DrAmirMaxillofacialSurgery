import React from "react";
import '../Styles/Hero.css';
import homeImage from '../assets/logo/homePage.jpeg';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      {/* Background Image */}
      <div className="hero-bg-container">
        <img src={homeImage} alt="Clinic Background" className="hero-bg-image" />
        <div className="hero-overlay"></div> {/* Makes text easier to read */}
      </div>

      <div className="hero-inner">
        <div className="hero-text">
          <span className="badge">Smart & Gentle Dental Care</span>
          <h1 className="hero-title">
            Advanced Care for a <span className="highlight">Healthier Smile</span>
          </h1>
          <p>
            Modern dental treatments with expert doctors and painless
            procedures for your perfect smile.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollTo("appointment")} className="btn-primary">
              Book Appointment
            </button>
            <button onClick={() => scrollTo("services")} className="btn-secondary">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}