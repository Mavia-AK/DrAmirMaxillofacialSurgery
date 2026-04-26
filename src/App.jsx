// import React from "react";
// import Navbar from "./components/Navabar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Achievements from "./components/Achievements";
// import Team from "./components/Team";
// import Appointment from "./components/Appointment";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import FloatingButtons from "./components/FloatingButtons";
// import "./Styles/bookingContactLayout.css";

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Achievements />
//       <Team />

      
//       <div className="appointment-contact-wrapper">
//   <div className="left">
//     <Appointment />
//   </div>

//   <div className="right">
//     <Contact />
//   </div>
// </div>
//       <Footer />
//       <FloatingButtons />
//     </>
//   );
// }
// src/App.jsx
import React from "react";
import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Team from "./components/Team";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import "./Styles/bookingContactLayout.css";

export default function App() {
  return (
    <>
      <Navbar />
      
      {/* Added IDs to these sections */}
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="achievements"><Achievements /></div>
      <div id="team"><Team /></div>

      <div className="appointment-contact-wrapper">
        <div className="left" id="appointment">
          <Appointment />
        </div>
        <div className="right" id="contact">
          <Contact />
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </>
  );
}