import React, { useState, useEffect, useRef } from "react";
import "../Styles/bookingContact.css";

export default function BookingContact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  const [openService, setOpenService] = useState(false);
  const serviceRef = useRef(null);

  const services = [
    "Dental Implants",
    "Root Canal",
    "Teeth Whitening",
    "Braces",
    "Cosmetic Dentistry",
    "Maxillofacial Surgery",
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        serviceRef.current &&
        !serviceRef.current.contains(e.target)
      ) {
        setOpenService(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, I want to book an appointment:%0A
- Name: ${form.name}
- Phone: ${form.phone}
- Service: ${form.service}
- Date: ${form.date}`;

    window.open(
      `https://wa.me/923705857870?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="booking-contact">
      <div className="appointment-contact-wrapper">

        {/* ================= LEFT SIDE ================= */}

        <div className="left-side">

          <div className="appointment-card">

            <h2 className="title">
              Book Appointment
            </h2>

            <p className="subtitle">
              Instant WhatsApp Booking
            </p>

            <form
              className="form"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
              />
                            {/* Service Dropdown */}
              <div
                className="service-box"
                ref={serviceRef}
              >
                <div
                  className="service-input"
                  onClick={() =>
                    setOpenService(!openService)
                  }
                >
                  <span>
                    {form.service || "Select Service"}
                  </span>

                  <span>⌄</span>
                </div>

                {openService && (
                  <div className="service-panel">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="service-item"
                        onClick={() => {
                          setForm({
                            ...form,
                            service,
                          });

                          setOpenService(false);
                        }}
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <input
                type="date"
                placeholder="Select Date"
                required
                value={form.date}
                onChange={(e) =>
                  setForm({
                    ...form,
                    date: e.target.value,
                  })
                }
              />

              <button type="submit">
                Send to WhatsApp
              </button>

            </form>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="right-side">

          <div className="contact-header">

            <h2>
              Contact Us
            </h2>

            <p>
              We're here to ensure your smile stays
              bright. Feel free to contact us anytime.
            </p>

          </div>

          <div className="contact-info-grid">

            <div className="info-capsule">

              <h4>Phone</h4>

              <p>
                +92 370 5857870
              </p>

            </div>

            <div className="info-capsule">

              <h4>Email</h4>

              <p>
                care@luminadental.com
              </p>

            </div>

            <div className="info-capsule">

              <h4>Address</h4>

              <p>
                Dr Amir Dental & Maxillofacial Surgery,
                Near Seena Hospital,
                Main Jehangira Road,
                Swabi
              </p>

            </div>

          </div>
                    <div className="map-container">
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.135271366032!2d72.46245247629325!3d34.117286514292076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38deef006b81a413%3A0x1ae9eeacd2f4c61e!2sDr%20Amir%20Dental%20%26%20Maxillofacial%20Surgery!5e0!3m2!1sen!2s!4v1786096911678!5m2!1sen!2s"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}