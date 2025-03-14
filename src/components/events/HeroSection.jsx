import React, { useEffect } from "react";
import AOS from "aos";

const HeroSection = ({ title }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative h-48 bg-gradient-to-br from-purple-600/20 via-transparent to-violet-500/20">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgb(119, 0, 255) 0%, transparent 25%),
            radial-gradient(circle at 80% 80%, rgb(119, 0, 255) 0%, transparent 25%)
          `,
          backdropFilter: "blur(60px)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          data-aos="zoom-out"
          className="text-4xl md:text-5xl font-bold text-white text-center px-4 transform transition-transform duration-1000 logo-txt font-['Orbitron']"
          style={{
            textShadow:
              "0 0 15px rgba(139, 92, 246, 0.8), 0 0 30px rgba(109, 40, 217, 0.6)",
            filter: "drop-shadow(-3px 0 5px rgb(110, 33, 255))",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
