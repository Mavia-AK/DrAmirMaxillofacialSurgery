
import React from "react";
import '../Styles/contact.css';

export default function Contact() {
  return (
    <div id="contact" className="contact-content">
      {/* rest of your code */}
   
    <div className="contact-content">
      <div className="contact-header">
        <h2>Let's Contect</h2>
        <p>We’re here to ensure your smile stays bright.</p>
      </div>

      <div className="contact-info-grid">
        <div className="info-capsule">
          <h4>Phone</h4>
          <p>+92 370 5857870</p>
        </div>
        <div className="info-capsule">
          <h4>Email</h4>
          <p>care@luminadental.com</p>
        </div>
        <div className="info-capsule">
          <h4>Address</h4>
          <p>Dr Amir Denatl & Maxillofacial Surgery, Near Seena Hospital, Main Jehangira Road Swabi</p>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215!2d-73.987!3d40.748!" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
     </div>
  );
}