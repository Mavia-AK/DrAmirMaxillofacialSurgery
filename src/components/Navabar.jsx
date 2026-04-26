import React, { useState } from "react";
import "../Styles/Navabar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <h2 className="logo">
          <span className="logo-main">DR. AMIR</span>
          <span className="logo-sub">Dental &amp; Maxillofacial Surgery</span>
        </h2>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li onClick={() => scrollTo("home")}>Home</li>
          <li onClick={() => scrollTo("about")}>About</li>
          <li onClick={() => scrollTo("services")}>Services</li>
          <li onClick={() => scrollTo("team")}>Team</li>
          <li onClick={() => scrollTo("contact")}>Contact</li>
        </ul>

        {/* Desktop Button */}
        <button
          className="btn"
          onClick={() => scrollTo("appointment")}
        >
          Book Appointment
        </button>

        {/* Mobile Menu Icon */}
        <div
          className="menu-icon"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <p onClick={() => scrollTo("home")}>Home</p>
          <p onClick={() => scrollTo("about")}>About</p>
          <p onClick={() => scrollTo("services")}>Services</p>
          <p onClick={() => scrollTo("team")}>Team</p>
          <p onClick={() => scrollTo("contact")}>Contact</p>

          <button
            className="btn"
            onClick={() => scrollTo("appointment")}
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}
