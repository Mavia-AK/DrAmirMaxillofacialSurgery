import React, { useState, useEffect, useRef } from "react";
import "../Styles/appointment.css";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: ""
  });

  const [openService, setOpenService] = useState(false);
  const serviceRef = useRef(null);

  const services = [
    "Dental Implants",
    "Root Canal",
    "Teeth Whitening",
    "Braces",
    "Cosmetic Dentistry",
    "Maxillofacial Surgery"
  ];

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target)) {
        setOpenService(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, I want to book an appointment:%0A- Name: ${form.name}%0A- Phone: ${form.phone}%0A- Service: ${form.service}%0A- Date: ${form.date}`;

    window.open(
      `https://wa.me/923705857870?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="appointment" className="appointment-section">
      <div className="appointment-card">

        <h2 className="title">Book Appointment</h2>
        <p className="subtitle">Instant WhatsApp Booking</p>

        <form className="form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            required
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          {/* SERVICE SELECT FIXED */}
          <div className="service-box" ref={serviceRef}>

            <div
              className="service-input"
              onClick={() => setOpenService(!openService)}
            >
              {form.service || "Select Service"}
              <span>⌄</span>
            </div>

            {openService && (
              <div className="service-panel">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="service-item"
                    onClick={() => {
                      setForm({ ...form, service: s });
                      setOpenService(false);
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}

          </div>

          <input
            type="date"
            required
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <button type="submit">
            Send to WhatsApp
          </button>

        </form>
      </div>
    </section>
  );
}