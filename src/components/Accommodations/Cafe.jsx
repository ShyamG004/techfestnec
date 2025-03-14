import React from "react";
import "../../assets/fonts/font.css";
import "../../assets/fonts/nusar.css";
import { motion } from "framer-motion";
import cafe1 from '../../assets/cafe 1.jpg';
import cafe2 from '../../assets/cafe 2.jpg';

const Cafe = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen px-4 sm:px-8 bg-[radial-gradient(circle_at_center,rgba(78,8,243,0.127),transparent_70%)]">

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
            CANTEEN FACILITIES
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18px] sm:text-[18px] md:text-[22px] lg:text-[22px] font-['Orbitron'] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] bg-gradient-to-b from-[#edeffd] to-[#524d57]  bg-clip-text text-transparent [text-shadow:2px_2px_4px_rgba(192,192,192,0.3)] transform-none opacity-100 font-bold "
          >
            Fuel up, vibe high, and conquer the symposium!
          </motion.p>
        </div>

      <div className="fade-in-animation flex flex-wrap justify-center gap-8 p-4 sm:p-8 mt-2">
        
        {/* First Card */}
        <div className="group relative max-w-[540px] h-[260px] w-full sm:w-[500px] bg-gradient-to-br from-[#a7465b] to-[#6f39cd] shadow-[0_4px_20px_rgba(139,92,246,0.3)] p-5 sm:h-[330px] md:h-[320px] flex flex-col shadow-lg transition-all duration-300 ease-in-out rounded-xl hover:h-[320px] sm:hover:h-[400px] mt-12 sm:mt-10 md:mt-8">
          <div className="relative w-full top-[-25%] shadow-lg z-10 rounded-xl">
            <img src={`/nectechfest2k25/images/cafe 1.webp`} alt="cafe 1" className="w-full h-auto rounded-xl" />
          </div>

          <div className="relative -top-14 z-10 text-[#111] text-white text-center text-lg sm:text-xl font-semibold">
            Auditorium Cafe
          </div>

          <div className="relative -top-14 px-2 text-[#111] text-white text-center opacity-0 transition-all duration-500 ease-in-out delay-200 group-hover:opacity-100">
            <p className="text-sm sm:text-base">
              The variety of menus served at all times in Auditorium Cafe is commendable for creating a home-like environment.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="group relative max-w-[540px] h-[260px] w-full sm:w-[500px] bg-gradient-to-br from-[#a7465b] to-[#6f39cd] shadow-[0_4px_20px_rgba(139,92,246,0.3)] p-5 sm:h-[330px] md:h-[320px] flex flex-col shadow-lg transition-all duration-300 ease-in-out rounded-xl hover:h-[320px] sm:hover:h-[400px] mt-12 sm:mt-10 md:mt-8">
          <div className="relative w-full top-[-25%] shadow-lg z-10 rounded-xl">
            <img src={`/nectechfest2k25/images/cafe 2.webp`} alt="cafe 2" className="w-full h-auto rounded-xl shadow-lg" />
          </div>

          <div className="relative -top-14 z-10 text-[#111] text-white text-center text-lg sm:text-xl font-semibold">
            CSE Canteen
          </div>

          <div className="relative -top-14 px-2 text-[#111] text-white text-center opacity-0 transition-all duration-500 ease-in-out delay-200 group-hover:opacity-100">
            <p className="text-sm sm:text-base">
              The CSE canteen caters delicious food items in a wide enough space that can accommodate more than 320 persons at a time.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cafe;