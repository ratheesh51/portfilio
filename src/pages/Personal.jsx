import React from 'react';
import './Personal.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCredly } from 'react-icons/si';

const Personal = () => {
  return (
    <div className="personal-page">
      <h2>Personal Details</h2>
      <div className="details-grid">
        <p><strong>Name:</strong> Ratheesh V.H.</p>
        <p><strong>Father's Name:</strong> Mr. Vadamalai</p>
        <p><strong>Mother's Name:</strong> Mrs. [Your Mother's Name]</p>
        <p><strong>Occupation:</strong> Student / Web Developer Intern</p>
        <p><strong>Blood Group:</strong> [Your Blood Group]</p>
        <p><strong>Phone Number:</strong> +91 8148977259</p>
        <p><strong>Email ID:</strong> ratheeshvadamalai510@gmail.com</p>
        <p><strong>Address:</strong> [Your Full Address]</p>
        <p><strong>School Name:</strong> Holy Cross Matric Hr. Sec. School</p>
        <p><strong>College Name:</strong> Kongu Engineering College, Perundurai</p>
        <p><strong>Department:</strong> B.Tech – Information Technology</p>
      </div>

      <h2>Professional Links</h2>
      <div className="links-list">
        <a href="https://github.com/ratheeshvh" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub: RATHEESH VH
        </a>
        <a href="https://leetcode.com/u/user2084wc/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode /> LeetCode: RATHEESH VH
        </a>
        <a href="https://www.linkedin.com/in/ratheesh-v-h-87258b256/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn: RATHEESH V.H
        </a>
        <a href="https://www.credly.com/users/ratheesh-v-h/badges" target="_blank" rel="noopener noreferrer">
          <SiCredly /> Certifications (Credly)
        </a>
      </div>
    </div>
  );
};

export default Personal;
