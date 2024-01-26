import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Legal from './Pages/Legal';
import NotFound from './Pages/NotFound';
import Appointment from './Pages/Appointment';
import WorldMap from './Components/WorldMap';
import ProductSection from './Components/ProductSection';
import showing from './Assets/invt.jpg';
import About from './Components/About';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <img src={showing} alt="Popup Content" />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check local storage to see if the popup has been seen before
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');

    // If not seen, show the popup
    if (!hasSeenPopup) {
      setShowPopup(true);
    }
  }, [showPopup]); // Include showPopup in the dependency array

  const handleClosePopup = () => {
    // Set a flag in local storage to remember that the user has seen the popup
    localStorage.setItem('hasSeenPopup', 'true');

    // Close the popup by updating state
    setShowPopup(false);
  };

  return (
    <div className="App">
      {showPopup && <Popup onClose={handleClosePopup} />}
      <Router basename="/GalvanoTech">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Product" element={<ProductSection />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/WorldMap" element={<WorldMap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
