import React from "react";
import "../../styles/particleBackground.css";

const ParticleBackground = () => {
  return (
    <div id="particle-container">
      {[...Array(30)].map((_, index) => (
        <div key={index} className="particle"></div>
      ))}
    </div>
  );
};

export default ParticleBackground;
