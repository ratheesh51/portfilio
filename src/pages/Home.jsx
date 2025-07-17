import React from 'react';
import profile from '../assets/914.jpg';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <div className="profile-section">
        <div className="profile-image-wrapper">
          <img src={profile} alt="Ratheesh V.H." className="profile-img" />
          <div className="profile-ring"></div>
        </div>
        <div className="animated-text">
          <h1 className="name-title">Ratheesh V.H.</h1>
          <div className="role-container">
            <span className="role-text">MERN Stack Developer</span>
            <span className="role-separator">|</span>
            <span className="role-text">Cloud Enthusiast</span>
            <span className="role-separator">|</span>
            <span className="role-text">Tech Explorer</span>
          </div>
        </div>
      </div>
      
      <div className="contact-section">
        <div className="contact-item">
          <div className="contact-icon">📧</div>
          <a href="mailto:ratheeshvadamalai510@gmail.com" className="contact-link">
            ratheeshvadamalai510@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <div className="contact-icon">📞</div>
          <a href="tel:+918148977259" className="contact-link">
            +91 8148977259
          </a>
        </div>
      </div>
      
      <div className="welcome-message">
        <p>Welcome to my digital portfolio! I'm passionate about creating innovative web solutions 
           and exploring cutting-edge technologies. Let's build something amazing together!</p>
      </div>
    </div>
    
    <div className="floating-elements">
      <div className="float-1"></div>
      <div className="float-2"></div>
      <div className="float-3"></div>
    </div>
  </div>
);

export default Home;