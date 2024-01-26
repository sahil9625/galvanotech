import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/one.png";
import profile2 from "../Assets/one.png";
import profile3 from "../Assets/one.png";
import profile4 from "../Assets/one.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Team</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Mr. Sanjeev Chauhan"
          title="Director"
         
        />
        <DoctorCard
          img={profile2}
          name="Mr. Rahul Chauhan"
          title="Co.Director"
        />
        <DoctorCard
          img={profile3}
          name="Mr. Rajesh Kumaar Rana"
          title="President"
        />
        <DoctorCard
          img={profile4}
          name="Mr. Pawan Kumar"
          title="Senior Manager"
        />
        <DoctorCard
          img={profile4}
          name="Mr. Navneet Tyagi"
          title="Senior Manager"
        />
        <DoctorCard
          img={profile4}
          name="Mr. Satish Awasthi"
          title="Senior Manager"
        />
      </div>
    </div>
  );
}

export default Doctors;
