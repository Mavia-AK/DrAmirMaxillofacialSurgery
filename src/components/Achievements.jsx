
import React from "react";
import '../Styles/achievements.css';

export default function Achievements() {
  const stats = [
    { value: "18+", label: "Years Experience" },
    { value: "15K+", label: "Happy Patients" },
    { value: "24", label: "Awards Won" },
    { value: "99%", label: "Success Rate" },
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="title">Our Achievements</h2>
        <p className="subtitle">
          Numbers that reflect our trust and success
        </p>

        <div className="grid">
          {stats.map((item, index) => (
            <div className="box" key={index}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
}
