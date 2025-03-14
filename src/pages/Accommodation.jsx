import Accommodations from "../components/Accommodations/Accommodations";
import Cafe from "../components/Accommodations/Cafe";
import Food from "../components/Accommodations/Food";
import Footer from "../components/Footer";
import Particle from "../components/Particle";
import ParticleBackground from "../components/Accommodations/ParticleBackground";
import { Navbar } from "../components/Navbar/Navbar";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Accommodation = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    window.location.href = '/'; // For direct navigation
    // OR
    // window.history.back(); // To go back to previous page
  };

  return (
    <div>
      {/* <button
        onClick={() => navigate("/")}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300 mb-4 font-['Orbitron'] tracking-widest"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button> */}
      <Navbar/>
      <ParticleBackground />
      <Accommodations />
      <Particle />
      <Cafe />
      <Particle />
      <Food />
    </div>
  );
};

export default Accommodation;

