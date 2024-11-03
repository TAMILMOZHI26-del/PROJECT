// src/components/HeroSection.js
import React from 'react';
import './Threaterart.css';
import image from './assets/image.jpeg'; // Ensure the image path is correct
import About from './assets/About.jpeg'; // New image for the about section

function Threaterart() {
  return (
    <div className="hero-container">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="rectangle-box"></div>
        <h1>
          <span className="AGAI">AGAI</span>
        </h1>
      </div>

      <div className="below-image-paragraphs">
        <p className="hero-paragraph-1">
          AGAI - Theatre Of Voices is an organization committed to use the transformative power of theatre to empower marginalized communities and create social change under the support of SRDS organisation. We focus on supporting tribal education, empowering first-generation graduates, and rehabilitating vulnerable groups through innovative, research-driven programs.
        </p>
        <p className="hero-paragraph-2">
          Our initiatives are deeply rooted in the needs of the communities we serve, ensuring impactful and meaningful outcomes. In addition to our community-focused efforts, we offer theatre workshops, corporate programs, and film production, all designed to foster creativity, dialogue, and a more inclusive society. Through our work, we aim to amplify voices that often go unheard and build a more just and equitable world.
        </p>
      </div>

      <div className="about-section">
        <h2 className="about-heading">ABOUT AGAI-THEATRE OF VOICE</h2>
        <div className="about-content">
          <p className="about-paragraph">
            AGAI - Theatre Of Voices is a pioneering organization dedicated to driving social transformation through the art of theatre. Founded on the belief that creative expression can be a powerful catalyst for change, AGAI focuses on empowering marginalized and vulnerable communities by amplifying their voices and addressing critical social issues. Our initiatives are grounded in thorough research and tailored to meet the specific needs of the communities we serve, ensuring that our efforts are both relevant and impactful. Our work spans a wide range of activities, from promoting tribal education and creating entrepreneurial opportunities for underprivileged groups, and rehabilitation through theatre-based interventions. We also offer corporate programs, documentary making, and short films, utilizing our expertise in storytelling and creative arts to engage a broader audience and effect change across different sectors. AGAI is committed to fostering leadership and civic engagement by forming neighborhood children and youth parliaments, encouraging the next generation to take an active role in shaping their communities. We believe in the power of collaboration and work closely with grassroots organizations, educational institutions, and government bodies to amplify our impact. At AGAI, we are more than just a theatre group; we are a movement committed to building a more inclusive, equitable, and just society through well-researched initiatives that empower those who often go unheard.
          </p>
          <img src={About} alt="About AGAI" className="about-image" />
        </div>
      </div>

      {/* Services Section with Boxes Section */}
      <div className="services-section">
        <h2 className="services-heading">SERVICES</h2>
        <p className="services-description">
          We provide our services to Schools, Colleges, Corporates, NGOs, Government institutions, and Other organisations.
        </p>

        {/* Boxes Section */}
        <div className="boxes-section">
          <div className="box">THEATRE-BASED SOCIAL AWARENESS PROGRAMS</div>
          <div className="box">CORPORATE WORKSHOPS AND PROGRAMS</div>
          <div className="box">TRIBAL EDUCATION INITIATIVES</div>
          <div className="box">DOCUMENTARY FILMMAKING</div>
          <div className="box">THEATRE WORKSHOPS</div>
          <div className="box">SHORT FILM PRODUCTION</div>
          <div className="box">FORMATION OF NEIGHBOURHOODCHILDREN AND YOUTH PARLIAMENTS</div>
          <div className="box">COLLABORATIVE COMMUNITY PROJECTS</div>
          <div className="box">EVENT MANAGEMENT</div>

        </div>
      </div>
    </div>
  );
}

export default Threaterart;
