import React from 'react';
import profile from '../assets/914.jpg';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => (
  <div className="home">
    <img src={profile} alt="Ratheesh V.H." className="profile-img" />
    <h1>Ratheesh V.H.</h1>
    <p>MERN Stack Developer | Cloud Enthusiast | Tech Explorer</p>
    <p>
  📧 <a href="mailto:ratheeshvadamalai510@gmail.com">ratheeshvadamalai510@gmail.com</a>
</p>
<p>
  📞 <a href="tel:+918148977259">+91 8148977259</a>
</p>
  </div>
);

export default Home;
