import React, { useState, useEffect } from "react";
import "../Styles/Navabar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  // Navbar shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "shrink" : ""}`}>
      <div className="nav-inner">

        {/* Logo */}
        <h2 className="logo">
          <span className="logo-main">DR. AMIR</span>
          <span className="logo-sub">Dental & Maxillofacial Surgery</span>
        </h2>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li onClick={() => scrollTo("home")}>Home</li>
          <li onClick={() => scrollTo("about")}>About</li>
          <li onClick={() => scrollTo("services")}>Services</li>
          <li onClick={() => scrollTo("team")}>Team</li>
          <li onClick={() => scrollTo("contact")}>Contact</li>
        </ul>

        {/* Hamburger */}
        <div
          className={`menu-icon ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <p onClick={() => scrollTo("home")}>Home</p>
        <p onClick={() => scrollTo("about")}>About</p>
        <p onClick={() => scrollTo("services")}>Services</p>
        <p onClick={() => scrollTo("team")}>Team</p>
        <p onClick={() => scrollTo("contact")}>Contact</p>
      </div>
    </nav>
  );
}