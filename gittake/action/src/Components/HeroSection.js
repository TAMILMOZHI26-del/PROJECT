// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import image from './assets/image.jpeg'; // Ensure the image path is correct

function HeroSection() {
  return (
    <div>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${image})` }}  // Correct usage of template literals
      >
        <div className="rectangle-box"></div> {/* Blue rectangle box above title */}
        <h1>
          <span className="get-involved">GET INVOLVED</span>
          <span className="today"> TODAY!</span>
        </h1>
        <p className="hero-paragraph">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click "Edit Text" or double-click me to add your content and make changes to the font.
        </p>
      </div>
      
      
    </div>
  );
}

export default HeroSection;
