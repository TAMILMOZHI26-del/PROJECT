import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './Components/About';
import ThreadArt from './Components/ThreadArt';
import WhatWeDo from './Components/Whatwedo';
import WhatWeAre from './Components/WhatWeAre';
import Contact from './Components/Contact';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <h1 className="title">LAST CHANCE</h1>
        
        {/* Navigation Bar */}
        <div className="navigation">
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/whatwedo" className="nav-link">WHAT WE DO</Link>
          <Link to="/threadart" className="nav-link">THREAD ART</Link>
          <Link to="/whatweare" className="nav-link">WHAT WE ARE</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </div>

        {/* Buttons for Donate and Take Action */}
        <div className="button-container">
          <button className="action-button donate">Donate Now</button>
          <button className="action-button take-action">Take Action</button>
        </div>

        {/* Social Media Links */}
        <div className="social-media-container">
          <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/threadart" element={<ThreadArt />} />
          <Route path="/whatweare" element={<WhatWeAre />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
