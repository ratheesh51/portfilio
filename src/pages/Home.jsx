import React from 'react';
import profile from '../assets/images/ratheesh-profile.jpg';

const Home = () => (
  <div className="home">
    <img src={profile} alt="Ratheesh V.H." className="profile-img" />
    <h1>Ratheesh V.H.</h1>
    <p>MERN Stack Developer | Cloud Enthusiast | Tech Explorer</p>
    <p>Email: ratheeshvadamalai510@gmail.com</p>
    <p>Phone: +91 8148977259</p>
  </div>
);

export default Home;
