import React from "react";
import '../Styles/services.css';

// Asset Imports
import centerTooth from "../assets/images/main-dental-hero.png"; 
import icon1 from "../assets/images/icon-root-canal.png";
import icon2 from "../assets/images/icon-cosmetic.png";
import icon3 from "../assets/images/dental-implant.png"; // The small one
import icon4 from "../assets/images/icon-advisory.png";
import icon5 from "../assets/images/icon-hygiene.png";
import icon6 from "../assets/images/icon-cavity.png";

export default function Services() {
  const leftServices = [
    { title: "Root Canal", icon: icon1, desc: "Advanced endodontic therapy to save infected teeth and eliminate pain effectively." },
    { title: "Cosmetic Teeth", icon: icon2, desc: "Enhance your smile aesthetics with premium veneers, bonding, and professional whitening." },
    { title: "Dental Implants", icon: icon3, desc: "Permanent tooth replacement solution using advanced implant technology for a natural smile." },
  ];

  const rightServices = [
    { title: "Alignment Teeth", icon: icon4, desc: "Achieve a perfect smile with modern clear aligners and precision orthodontic solutions." },
    { title: "Oral Hygiene", icon: icon5, desc: "Comprehensive professional cleaning and preventative care for long-term dental health." },
    { title: "Cavity Inspection", icon: icon6, desc: "Detailed digital scanning and early detection to protect your teeth from decay." },
  ];

  return (
    <section id="services" className="services-section"> 
      <div className="services-header">
        <p className="badge">OUR SERVICES</p>
        <h2 className="main-title">What We Provide</h2>
      </div>

      <div className="services-container">
        {/* Left Column */}
        <div className="services-col">
          {leftServices.map((item, index) => (
            <div className="service-card card-left" key={index}>
              <div className="text-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="icon-box">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  /* Adding a specific class if it's the implant icon */
                  className={item.title === "Dental Implants" ? "special-implant-icon" : "standard-icon"} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="services-center">
          <img src={centerTooth} alt="Professional Dental Tooling" className="tooth-hero" />
        </div>

        {/* Right Column */}
        <div className="services-col">
          {rightServices.map((item, index) => (
            <div className="service-card card-right" key={index}>
              <div className="icon-box">
                <img src={item.icon} alt={item.title} className="standard-icon" />
              </div>
              <div className="text-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}