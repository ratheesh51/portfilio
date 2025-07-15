import React, { useState } from 'react';
import './Certificate.css';

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    img: "/images/aws.png"
  },
  {
    title: "Machine Learning - MATLAB Onramp",
    img: "/images/matlab.png"
  },
  {
    title: "Cybersecurity Essentials - Cisco",
    img: "/images/cyber.png"
  },
  {
    title: "Agile for Software Development",
    img: "/images/agile.png"
  }
];

const Certificate = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="certificates-page">
      <h2>My Certifications</h2>
      <div className="cert-list">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-item" onClick={() => setSelected(cert.img)}>
            {cert.title}
          </div>
        ))}
      </div>

      {selected && (
        <div className="popup" onClick={() => setSelected(null)}>
          <img src={selected} alt="Certificate Preview" />
        </div>
      )}
    </div>
  );
};

export default Certificate;
