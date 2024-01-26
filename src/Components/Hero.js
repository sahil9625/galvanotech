import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Doctor from "../Assets/fac3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.scrollY > 600);
    };

    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-title">Galvanotech Surfin Private Limited</p>
          <h2 className="text-headline">Next Gen Technologies</h2>
          <p className="text-descritpion">
             Galvanotech Surfin Private Limited, is an Organization founded 
             by Technocrats and professionals with rich experience in Surface
             Finishing Technologies.
            <br />
            The mission is to Provide Sustainable Technology solutions and
            services to the industry. professionals with experience in Indian
            and overseas markets supported by Industry experts lead the team.
            <br />
            We are the Industry heads and produce the most reliable and trendy
            solution you are looking for.
          </p>
          {/* <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Registration
          </button> */}
          <div className="text-stats">
            <div className="text-stats-container">
              <p>130+</p>
              <p>Product manufacture</p>
            </div>

            {/* <div className="text-stats-container">
              <p>50+</p>
              <p>Experts</p>
            </div> */}

            <div className="text-stats-container">
              <p>25+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
