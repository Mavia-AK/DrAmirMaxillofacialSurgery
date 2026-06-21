import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Optional: npm install react-icons
import '../Styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        
        {/* Brand Section */}
        <div className="footer-column brand">
          <h2 className="footer-logo">Amir <span>Dental</span></h2>
          <p className="footer-desc">
            Redefining oral health through precision, care, and state-of-the-art technology. Your smile is our signature.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
     <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#appointment">Book Appointment</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <p><FaPhoneAlt className="icon" /> +92 370 5857870</p>
          <p><FaEnvelope className="icon" /> hello@amirdental.com</p>
          <p>Dr Amir Denatl & Maxillofacial Surgery, Near Seena Hospital, Main Jehangira Road Swabi</p>
        </div>

        {/* Schedule */}
        <div className="footer-column">
          <h3>Operating Hours</h3>
          <div className="hours-grid">
            <span>Mon - Sunday:</span> <span>9:00 AM - 8:00 PM</span>
            <span>Saturday:</span> <span>10:00 AM - 4:00 PM</span>
            <span>Friday:</span> <span className="closed">Closed</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>© {currentYear} Amir Dental. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}