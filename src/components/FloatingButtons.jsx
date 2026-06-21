
import React from "react";
import '../Styles/floating.css';
import { IoLogoWhatsapp } from "react-icons/io";
export default function FloatingButtons() {
  const whatsappNumber = "923705857870";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hi! I want to book an appointment.`,
      "_blank"
    );
  };
return (
    <>
      <div className="floating">
        {/* WhatsApp Button */}
        <button className="whatsapp" onClick={openWhatsApp}>
          <IoLogoWhatsapp className="whatsapp-icon" />
        </button>

        {/* Scroll Top Button */}
        <button className="top" onClick={scrollToTop}>
          ↑
        </button>
      </div>
    </>
  );
}