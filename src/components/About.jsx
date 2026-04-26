
import React from "react";
import '../Styles/About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">

        {/* Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f"
            alt="About Dental Clinic"
          />
        </div>

        {/* Content */}
        <div className="about-text">
          <h2>About Us</h2>

          <p>
            We are a modern dental clinic providing high-quality dental care
            with advanced technology and experienced doctors.
          </p>

          <p>
            Our mission is to give every patient a healthy, confident smile
            with painless and affordable treatments.
          </p>

          <div className="about-stats">
            <div>
              <h3>18+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>15K+</h3>
              <p>Happy Patients</p>
            </div>

            <div>
              <h3>99%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
}