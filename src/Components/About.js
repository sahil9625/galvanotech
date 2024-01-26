import React from "react";
import Doctor from "../Assets/fac2.jpg";
import SolutionStep from "./SolutionStep";

import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
    {/* //   <div className="about-image-content">
    //     <img src={Doctor} alt="Doctor Group" className="about-image1" />
    //   </div> */}
        {/* <div className="ft-list" id="contact"> */}
        {/* <p className="ft-list-title">Contact Us</p> */}


      <div className="about-text-content">

        <h3 className="about-title">
          <span>About Us</span>
        </h3>

        <h3 className="about-des-title">
        
          <div>We are the industry heads and produce the most reliable and trendy solution you are looking for.</div>
        </h3>
        
       
        

        <p className="about-description">
       <h4> Masters in surface coating industry with 25 Years of experience and numerous awards!</h4>
       GalvanoTech surfin has entered business partnerships with leading global players to offer best in class technology solutions to industry and 
       customers in Asian Region and India In Particular.
        </p>

        {/* <h4 className="about-text-title" >Why us ?</h4> */}

        <SolutionStep
          title="Quality Unsurpassed Innovative. Sustainable"
          description="we are the industry heads and produce the most reliable and trendy solution you are looking for. The only place Where you'll get
          the perfect solution for all your industry needs"
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default About;
