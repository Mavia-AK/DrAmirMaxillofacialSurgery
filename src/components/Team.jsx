import React from "react";
import "../Styles/team.css";

// Importing local doctor images
import drYonusImg from "../assets/doctors/Dc-Amir.png";
import drAmirImg from "../assets/doctors/Dr Amir.jpeg";
import drZohaibImg from "../assets/doctors/Dr Zohaib.jpeg";
import drMunirImg from "../assets/doctors/Dr Munir.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Amir Sohail",
    department: "Oral & Maxillofacial Surgery",
    qualifications:
      "BDS (KMU), RDS (Islb), FCPS-2 (Oral & Maxillofacial Surgery), C-Endo, C-Implantology, Dip in Facial Aesthetics",
    role: "CEO",
    description:
      "Dr. Amir Sohail is a specialist in Oral & Maxillofacial Surgery, managing diseases, injuries, and defects of the face, jaws, and mouth through surgical and non-surgical interventions.",
    expertise: [
      "Dentoalveolar Surgery",
      "Facial Trauma",
      "Orthognathic Surgery",
      "Dental Implants",
      "TMJ Disorders"
    ],
    image: drAmirImg,
  },

  {
    id: 2,
    name: "Dr. Munir",
    department: "Orthodontics & Dentofacial Orthopedics",
    qualifications:
      "BDS (KMU), RDS (Islb), FCPS-2 (Orthodontics and Dentofacial)",
    role: "Orthodontist",
    description:
      "Dr. Munir is a specialist in Orthodontics & Dentofacial Orthopedics, dedicated to diagnosing, preventing, and correcting malocclusion and jaw irregularities for patients of all ages.",
    expertise: [
      "Braces & Aligners",
      "Growth Modification",
      "Adult Orthodontics",
      "Surgical Orthodontics",
      "Retention & Stability"
    ],
    image: drMunirImg,
  },

  {
    id: 3,
    name: "Dr. Muhammad Zohaib",
    department: "Operative & Endodontics",
    qualifications:
      "BDS (KMU), RDS (Islb), FCPS-2 (Operative and Endodontics)",
    role: "Endodontist",
    description:
      "Dr. Zohaib is a specialist in Endodontics, focused on saving natural teeth through advanced root canal therapy and management of dental pulp diseases.",
    expertise: [
      "Root Canal Treatment",
      "Retreatment Cases",
      "Endodontic Surgery",
      "Pain Management",
      "Modern Techniques"
    ],
    image: drZohaibImg,
  },

  {
    id: 4,
    name: "Dr. Muhammad Yonus Khan",
    department: "Department of Prosthodontics",
    qualifications:
      "BDS (KCD), RDS (Islb), FCPS-2 Prosthodontics",
    role: "Prosthodontist",
    description:
      "Dr. Muhammad Yonus Khan is a qualified and skilled Prosthodontist with expertise in advanced restorative and rehabilitative dentistry.",
    expertise: [
      "Fixed Prosthodontics",
      "Implant Prosthodontics",
      "Smile Designing",
      "Removable Prosthodontics",
      "Maxillofacial Prosthetics"
    ],
    image: drYonusImg,
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">

        {/* HEADER */}
        <div className="section-header">
          <span className="subtitle">Clinical Excellence</span>
          <h2 className="title">Meet Our Specialists</h2>
          <div className="underline"></div>
        </div>

        {/* GRID */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">

              {/* IMAGE */}
              <div className="image-box">
                <img src={member.image} alt={member.name} />
                <span className="role-badge">{member.role}</span>
              </div>

              {/* CONTENT */}
              <div className="card-body">
                <span className="department">{member.department}</span>
                <h3 className="name">{member.name}</h3>

                <p className="qualification">{member.qualifications}</p>
                <p className="description">{member.description}</p>

                <div className="expertise">
                  {member.expertise.map((item, index) => (
                    <span key={index} className="chip">
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;