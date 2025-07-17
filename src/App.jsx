import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Objective from './pages/Objective';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Certificate from './pages/Certificate';
import Personal from './pages/Personal';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark' : ''}`}>
        <ScrollToTop />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="main-content fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/objective" element={<Objective />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/personal" element={<Personal />} />
          </Routes>
        </main>
        <footer>
          <div className="footer-content">
            <p>&copy; 2024 Your Portfolio. Built with React & Modern CSS.</p>
            <div className="footer-links">
              <a href="#" aria-label="Privacy Policy">Privacy</a>
              <a href="#" aria-label="Terms of Service">Terms</a>
              <a href="#" aria-label="Contact">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;