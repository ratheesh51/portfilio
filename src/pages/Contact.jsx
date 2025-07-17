import React from 'react';
import './Contact.css'; // Optional for styling
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { FaAws } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Connect with Me</h2>
      <div className="contact-list">
        <a href="https://github.com/ratheeshvh" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaGithub size={32} />
          <span>RATHEESH VH</span>
        </a>

        <a href="https://www.credly.com/users/ratheesh-v-h/badges" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaAws size={32} />
          <span>RATHEESH VH</span>
        </a>

        <a href="https://www.linkedin.com/in/ratheesh-v-h-87258b256/" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaLinkedin size={32} color="#0A66C2" />
          <span>RATHEESH V.H</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
