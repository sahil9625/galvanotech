import React from "react";
import Doctor from "../Assets/fac3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  // return (
//     <div className="ba-section">
//       <div className="ba-image-content">
//         <img src={Doctor} alt="Doctor Group" className="ba-image1" />
//       </div>

//       <div className="ba-text-content">
//         <h3 className="ba-title">
//           <span>Why choose Galvanotech</span>
//         </h3> 
//         <p className="ba-description">
//         GalvanTech stands out as a premier choice in the chemical manufacturing industry, 
//          particularly in the realm of surface metal treatments. Renowned for its commitment to excellence,
//           innovation, and environmental responsibility, GalvanTech has consistently set industry standards.
//            The company boasts a rich history of producing high-quality chemical solutions that cater to diverse industrial needs.
//            <br/>

// One key reason to choose GalvanTech is its unwavering dedication to research and development,
//  ensuring cutting-edge formulations that meet the evolving demands of surface metal treatments.
//   The company's chemists and engineers work tirelessly to develop innovative products that enhance the durability,
//    corrosion resistance, and overall performance of metal surfaces.


// //         </p>

//         <p className="ba-checks ba-check-first">
//           <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Speacialists in electroplating
//         </p>
//         <p className="ba-checks">
//           <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Over 25 Years of experience
//         </p>
//         <p className="ba-checks">
//           <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> 24/7 Support Live Chat
//         </p>
//         <p className="ba-checks">
//           <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Rapid delivery services
//         </p>
//         <p className="ba-checks">
//           <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Competitive Pricing
//         </p>
//         <p className="ba-checks">
//           <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Free Quotations
//         </p>
//         <p className="ba-checks ba-check-last">
//           <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Excellent customer satisfaction
//         </p>

//         <button
//           className="text-appointment-btn"
//           type="button"
//           onClick={handleBookAppointmentClick}
//         >
//           <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
//         </button>
//       </div>
//     </div>
//   );
}

export default BookAppointment;
