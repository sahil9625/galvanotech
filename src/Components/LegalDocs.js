import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Doctor from "../Assets/logo2.png";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
        <img  width="10%" src={Doctor} alt="Galvanotech" />
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
       cdsvscx xnsijcjcxj dcsshd iferivniji jcnkjsvsijdvid djnvdvfniuv
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
      
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
         
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
      
        </p>
      </div>

      <div className="legal-footer">
        <p>GalvanoTech Surfin Pvt. Ltd. © 2021. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
