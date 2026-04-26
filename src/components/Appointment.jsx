import React, { useState } from "react";
import '../Styles/appointment.css';

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: ""
  });

  const services = [
    "Dental Implants",
    "Root Canal",
    "Teeth Whitening",
    "Braces",
    "Cosmetic Dentistry",
    "Maxillofacial Surgery"
  ];

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

          <select
            required
            onChange={(e) =>
              setForm({ ...form, service: e.target.value })
            }
          >
            <option value="">Select Service</option>
            {services.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>

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