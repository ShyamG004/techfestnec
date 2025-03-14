"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { BorderBeam } from "./ui/border-beam";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 102,
    title: "Agentic AI",
    subtitle: "Agentic AI Workshop",
    link:"/workshop/Agentic AI",
    description:"Explore the future of intelligent systems at the Agentic AI Workshop",
    image: "/nectechfest2k25/events/spotlight/agentic ai.webp",
  },
  {
    id: 30,
    title: "Creating Design with AR Development in Real World",
    description: "AR Development",
    link:"/workshop/Creating Design with AR Development in Real World",
    image: "/nectechfest2k25/events/spotlight/AR.webp",
  },
  {
    id: 91,
    title: "Standard Penetration Test",
    link:"/workshop/Standard Penetration Test",
    description:"A Comprehensive Overview of the Standard Penetration Test in Geotechnical Engineering",
    image: "/nectechfest2k25/events/spotlight/SPT.webp",
  },
  {
    id: 90,
    title: "AI Applications in Civil Engineering",
    link:"/workshop/AI Applications in Civil Engineering",
    description:"Exploring the Role of AI in Civil Engineering Design and Construction",
    image: "/nectechfest2k25/events/spotlight/AI civil.webp",
  },
  {
    id: 121,
    title: "The Art of CNC Machining",
    link:"/workshop/The Art of CNC Machining: A Live Demonstration of Precision Lathe and Milling",
    image: "/nectechfest2k25/events/spotlight/cnc.webp",
    description: "This workshop provides hands-on experience with CNC machining.",
  },
  {
    id: 119,
    title: "Crafting Metal Composites",
    link:"/workshop/Workshop on Fabrication of Metal Matrix Composites using Stir Casting Technique",
    image: "/nectechfest2k25/events/spotlight/fabricaton of metal.webp",
    description: "Fabrication of Metal Matrix Composites using Stir Casting Technique.",
  },
  {
    id: 32,
    title: "Next-Gen Learning",
    link:"/workshop/Next-Gen Learning",
    description: "The power of Metaverse in Education",
    image: "/nectechfest2k25/events/spotlight/next gen.webp",
  },
  {
    id: 59,
    title: "Embedded System Design With Arm Processor",
    link:"/workshop/Embedded System Design With Arm Processor",
    description:"This workshop covers ARM-based embedded system design.",
    image:"/nectechfest2k25/events/spotlight/embeded system.webp",
  },
  {
    id: 120,
    title: "3D Prototyping and Reverse Engineering",
    link:"/workshop/3D Prototyping and Reverse Engineering",
    image: "/nectechfest2k25/events/spotlight/prototyping.webp",
    description: "This workshop introduces participants to 3D prototyping and reverse engineering techniques.",
  },
  {
    id: 123,
    title: "Placement Prodigy: The Ultimate Career Launch Workshop",
    link:"/workshop/Placement Prodigy: The Ultimate Career Launch Workshop",
    image: "/nectechfest2k25/events/spotlight/company placement.webp",
    description: "Kickstart your career with Placement Prodigy.",
  },
  {
    id: 11,
    title: "MACHINE LEARNING MADE EASY",
    link:"/workshop/MACHINE LEARNING MADE EASY",
    description: "Unleash the power of data with our hands-on workshop",
    image: "/nectechfest2k25/events/spotlight/machine learning.webp",
  },
  {
    id: 77,
    title: "Numerical Relays",
    link:"/workshop/Numerical Relays",
    description: "Modern Protection Techniques for Power Systems",
    image: "/nectechfest2k25/events/spotlight/numerical relay.webp",
  },
  {
    id: 122,
    title: "Placement Ready - Mastering Resume, Interview & Beyond",
    link:"/workshop/Placement Ready - Mastering Resume, Interview & Beyond",
    image: "/nectechfest2k25/events/spotlight/placement ready.webp",
    description: "Placement Ignition is a career-boosting event.",
  },{
    id: 58,
    title: "Antenna Design and Fabrication",
    link:"/workshop/Workshop on Antenna Design and Fabrication",
    description:"This workshop covers schematic capture and PCB layout design using industry best practices.",
    image: "/nectechfest2k25/events/spotlight/antenna design.webp",
  }
];

const EventCard = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group h-[400px] w-full rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(121,40,202,0.5)] transition-shadow duration-500"
    >
      {/* Multi-layered gradient overlay */}
      <div className="absolute inset-0 z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#FF0080_0%,transparent_50%),radial-gradient(circle_at_bottom_right,#7928CA_0%,transparent_50%)] opacity-40" />

        {/* Animated gradient on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_bottom_left,#FF0080_0%,transparent_50%),radial-gradient(circle_at_top_right,#7928CA_0%,transparent_50%)]" />

        {/* Content gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/90" />
      </div>

      {/* Glowing orbs with animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#FF0080]/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-[#FF0080]/30 transition-all duration-700 group-hover:scale-125" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#7928CA]/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 group-hover:bg-[#7928CA]/30 transition-all duration-700 group-hover:scale-125" />
      </div>

      {/* Image with enhanced overlay */}
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
      />

      {/* Content with enhanced styling */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-all duration-700 translate-y-2 group-hover:translate-y-0">
        <div className="relative">
          {/* Title with glow effect */}
          <h3 className="text-3xl font-iceland font-bold text-white mb-3 tracking-wider transform transition-transform duration-700 scale-95 group-hover:scale-100">
            <span className="inline-block [text-shadow:0_0_15px_rgba(255,0,128,0.5)] group-hover:[text-shadow:0_0_25px_rgba(255,0,128,0.8)] transition-all duration-700">
              {event.title}
            </span>
          </h3>

          {/* Description with slide-up animation */}
          <p className="text-gray-200 text-base opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] max-w-[90%]">
            {event.description}
          </p>

          {/* Decorative line */}
          <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-[#FF0080] to-[#7928CA] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom" />
        </div>
      </div>

      {/* BorderBeam effect with enhanced colors */}
      <BorderBeam
        size={400}
        duration={15}
        anchor={90}
        borderWidth={2.5}
        colorFrom="#FF0080"
        colorTo="#7928CA"
        delay={index * 2}
      />

      {/* Enhanced shine effect */}
      <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(105deg,transparent_20%,rgba(255,255,255,0.1)_30%,rgba(255,255,255,0.2)_35%,rgba(255,255,255,0.1)_40%,transparent_50%)] group-hover:translate-x-[200%] transform translate-x-[-200%] transition-transform duration-[1500] ease-in-out" />

      {/* Particle effect on hover */}
      <div className="absolute inset-0 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-8 bg-gradient-to-b from-transparent via-[#FF0080] to-transparent transform -translate-x-1/2 animate-[moveDown_2s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/2 w-px h-8 bg-gradient-to-b from-transparent via-[#7928CA] to-transparent transform -translate-x-1/2 animate-[moveUp_2s_ease-in-out_infinite]" />
      </div>
    </motion.div>
  );
};

const SpotlightedEvents = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardsPerPage = isMobile ? 1 : 2;
  const adjustedTotalPages = Math.ceil(events.length / cardsPerPage);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? window.innerWidth : -window.innerWidth,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? window.innerWidth : -window.innerWidth,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentPage(
      (prev) => (prev + newDirection + adjustedTotalPages) % adjustedTotalPages
    );
  };

  const currentEvents = events.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          >
            {currentEvents.map((event, index) => (
              <div
                key={event.id}
                onClick={() =>navigate(event.link)}
                style={{ cursor: "pointer" }} // Makes it clear it's clickable
              >
                <EventCard event={event} index={index} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls wrapper */}
        <div className="flex flex-col md:block">
          {/* Navigation buttons with responsive positioning */}
          <div className="flex justify-center items-center gap-4 mt-8 md:mt-0 order-2 md:order-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="relative md:absolute md:-left-16 md:top-1/2 md:-translate-y-1/2 p-3 rounded-full bg-gradient-to-br from-[#FF0080]/30 to-[#7928CA]/30 hover:from-[#FF0080]/50 hover:to-[#7928CA]/50 backdrop-blur-sm transition-all duration-300 group z-20"
            >
              <IconChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.1)] blur-sm group-hover:blur-md transition-all duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="relative md:absolute md:-right-16 md:top-1/2 md:-translate-y-1/2 p-3 rounded-full bg-gradient-to-br from-[#FF0080]/30 to-[#7928CA]/30 hover:from-[#FF0080]/50 hover:to-[#7928CA]/50 backdrop-blur-sm transition-all duration-300 group z-20"
            >
              <IconChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.1)] blur-sm group-hover:blur-md transition-all duration-300" />
            </motion.button>
          </div>

          {/* Enhanced page indicators */}
          <div className="flex justify-center gap-3 mt-4 md:mt-8 order-1 md:order-none">
            {Array.from({ length: adjustedTotalPages }).map((_, index) => (
              <motion.button
                key={index}
                initial={false}
                animate={{
                  scale: currentPage === index ? 1 : 0.8,
                  width: currentPage === index ? "24px" : "8px",
                }}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setDirection(index > currentPage ? 1 : -1);
                  setCurrentPage(index);
                }}
                className={`h-2 rounded-full transition-colors duration-300 ${
                  currentPage === index
                    ? "bg-gradient-to-r from-[#FF0080] to-[#7928CA]"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightedEvents;
