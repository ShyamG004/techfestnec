import React from "react";
import "../../assets/fonts/font.css";
import "../../assets/fonts/nusar.css";
import { motion } from "framer-motion";

const Food = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_center,rgba(78,8,243,0.127),transparent_70%)]"> 

      <div className="container mx-auto mb-4 mt-4 text-center px-4">
        <motion.div
          className="font-netron text-[40px] sm:text-[45px] md:text-[60px] lg:text-[41px] text-white animate-glow"
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.34, 1.56, 0.64, 1],
            opacity: { duration: 1.2, ease: "easeOut" }
          }}
        >
          FOODS AVAILABLE
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[18px] sm:text-[18px] md:text-[22px] lg:text-[22px] font-['Orbitron'] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] bg-gradient-to-b from-[#edeffd] to-[#524d57]  bg-clip-text text-transparent [text-shadow:2px_2px_4px_rgba(192,192,192,0.3)] transform-none opacity-100 font-bold "
        >
          Savor the flavors that energize your day!
        </motion.p>
      </div>

      <div className="flex flex-wrap items-center justify-center">

        <div className="fade-in-animation bg-white p-5 rounded-[10px] h-[350px] w-[280px] m-[25px] mt-[5px] sm:mt-[25px] shadow-[15px_15px_2px_rgb(0,0,0)] mb-[80px] z-10 text-white bg-gradient-to-br from-[#a7465b] to-[#6f39cd] shadow-[0_4px_20px_rgba(139,92,246,0.3)]">
          <p className="text-[25px] font-medium">Veg Food</p>
          <ul className="text-[20px] list-disc list-inside marker:text-white marker:text-lg ml-4 mt-4">
            <li>Pongal</li>
            <li>Poori</li>
            <li>Dosa</li>
            <li>Veg Fried Rice</li>
            <li>Panneer Fried Rice</li>
            <li>Gobi Fried Rice</li>
            <li>Veg Briyani</li>
            <li>Noodles</li>
          </ul>
        </div>

        <div className="fade-in-animation bg-white p-5 rounded-[10px] h-[350px] w-[280px] m-[25px] mt-[5px] sm:mt-[25px] shadow-[15px_15px_2px_rgb(0,0,0)] mb-[80px] z-10 text-white bg-gradient-to-br from-[#a7465b] to-[#6f39cd] shadow-[0_4px_20px_rgba(139,92,246,0.3)]">
          <p className="text-[25px] font-medium">Non-Veg Food</p>
          <ul className="text-[20px] list-disc list-inside marker:text-white marker:text-lg ml-4 mt-4">
            <li>Egg Fried Rice</li>
            <li>Chicken Fried Rice</li>
            <li>Chicken Briyani</li>
            <li>Parotta</li>
            <li>Omlette</li>
            <li>Pepper Chicken Dry</li>
          </ul>
        </div>

        <div className="fade-in-animation bg-white p-5 rounded-[10px] h-[350px] w-[280px] m-[25px] mt-[5px] sm:mt-[25px] shadow-[15px_15px_2px_rgb(0,0,0)] mb-[80px] z-10 text-white bg-gradient-to-br from-[#a7465b] to-[#6f39cd] shadow-[0_4px_20px_rgba(139,92,246,0.3)]">
          <p className="text-[25px] font-medium">Snacks</p>
          <ul className="text-[20px] list-disc list-inside marker:text-white marker:text-lg ml-4 mt-4">
            <li>Puffs</li>
            <li>Vadai</li>
            <li>Samosa</li>
            <li>Tea</li>
            <li>Milkshake</li>
            <li>Fresh Juices</li>
          </ul>
        </div>
      </div>
    </div> 
  );
};

export default Food;
