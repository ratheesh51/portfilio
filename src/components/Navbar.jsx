import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling
const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/objective">Objective</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/experience">Experience</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/certificate">Certificates</Link>

  </nav>
);

export default Navbar;
