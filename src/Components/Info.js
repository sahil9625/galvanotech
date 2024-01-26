import React from "react";
import InformationCard from "./InformationCard";
import { faMedal, faFlaskVial, faLeaf } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";


function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        Galvanotech Surfin has entered business partnerships with leading global players to offer best in class technology solutions to industry and customers in Asian Region and India in particular.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Innovation Solutions"
          description="Next Gen Technologies"
          icon={faFlaskVial}
        />

        <InformationCard
          title="Customer Focused"
          description="Our decisions are aligned with our customers requirements"
          icon={faMedal}
        />

        <InformationCard
          title="Sustainable"
          description="We work towards better future and sustainable process and products"
          icon={faLeaf}
        />
      </div>
    </div>
  );
}

export default Info;
