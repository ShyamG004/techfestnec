"use client";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { BorderBeam } from './ui/border-beam';

const events = [
  {
    id: 1,
    title: "TECHNO CHILL",
    image: "/nectechfest2k25/events/highlight/paper.webp",
    description: "Present your innovative ideas and research papers",
    link: "/associations/event/36"
  },
  {
    id: 2,
    title: "SQL TREASURE HUNT",
    image: "/nectechfest2k25/events/highlight/coding.webp",
    description: "Race against time in this intense coding competition",
    link: "/associations/event/2"
  },
  {
    id: 3,
    title: "DEVFEST",
    image: "/nectechfest2k25/events/highlight/project.webp",
    description: "Showcase your groundbreaking projects",
    link: "/associations/event/92"
  },
  {
    id: 4,
    title: "CODE COOL",
    image: "/nectechfest2k25/events/highlight/quiz.webp",
    description: "Test your technical knowledge and win exciting prizes",
    link: "/associations/event/16"
  },
  {
    id: 5,
    title: "BUILD BATTLE",
    image: "/nectechfest2k25/events/highlight/hackathon.webp",
    description: "24-hour coding marathon to solve real-world problems",
    link: "/associations/event/83"
  },
  {
    id: 6,
    title: "LOGIC LADDER",
    image: "/nectechfest2k25/events/highlight/talks.webp",
    description: "Engaging sessions by industry experts",
    link: "/associations/event/68"
  },
  {
    id: 7,
    title: "TECH DETECTIVE",
    image: "/nectechfest2k25/events/highlight/talks.webp",
    description: "Engaging sessions by industry experts",
    link: "/associations/event/52"
  },
  {
    id: 8,
    title: "CSS BATTLE",
    image: "/nectechfest2k25/events/highlight/css.webp",
    description: "Engaging sessions by industry experts",
    link: "/associations/event/19"
  },

  
];

const EventCard = ({ event, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(event.link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group h-[400px] w-full rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(121,40,202,0.5)] transition-shadow duration-500 cursor-pointer"
      onClick={handleClick}
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

const HighlightedEvents = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
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
    setCurrentPage((prev) => (prev + newDirection + adjustedTotalPages) % adjustedTotalPages);
  };

  const currentEvents = events.slice(currentPage * cardsPerPage, (currentPage * cardsPerPage) + cardsPerPage);

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
              <EventCard 
                key={event.id} 
                event={event} 
                index={index} 
              />
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
                  width: currentPage === index ? '24px' : '8px',
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

export default HighlightedEvents;
