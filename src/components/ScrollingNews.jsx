import { useState, useEffect } from "react";

const ScrollingNews = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const newsMessages = [
    "🚀 Total Registrations have crossed over 2500! 🚀",
    "⚡ Hurry! Only 30 seats available for each workshop! Register Now! ⚡",
    "🎟️ Some of the events can be attended online - Ideathon , Capture The Flag , Paper Presentation (S&H) , Agentic AI , GenAI for web solutions , AI-powered Edge Intelligence , Workshop on Circuit Symphony - Crafting Electronics with Tinker Card, Workshop on the Essential Mathematics Behind Engineering Breakthrough. 🎟️",
    "❌ Registration got closed for the events - Paper Presentation (IT) ,Creating Design with AR Development in Real World, Robotics and Automation Workshop , Paper Presentation (CSE)  , Guess the Beat  , The Essential Mathematics behind Engineering Breakthrough , LOST IN LYRICS , War of UI/UX  , MACHINE LEARNING MADE EASY , TECH QUEST (TECHNICAL QUIZ) , FLOATING BALLS , GenAI for Web Solutions , Workshop on Circuit Symphony: Crafting Electronics with Tinker , TECH PIRATES , TEAM TANGO, Linux Workshop , Role of geo spatial and IOT for smart city initiative , Cine Quiz , TECHNICAL QUIZ(EEE) , Embedded Systems with Arduino: IoT Applications , Meme Forge , TECHNO SPARK , Fusion Frontiers , Code Cool  , SQL TREASURE HUNT , Embedded System Design With Arm Processor , Emerging Middleware Technologies For Smart Wireless Sensor Networks In Iot Applications ❌",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsVisible(window.scrollY <= 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 ${
          isMobile ? "w-full mb-0" : "w-[75%] mb-6"
        } bg-pink-600 text-white py-2 shadow-lg overflow-hidden transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="overflow-hidden whitespace-nowrap">
          <div className="scrolling-text">
            <span>
              {newsMessages.concat(newsMessages).join(" • ")}
            </span>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scrollText {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
          animation: scrollText 80s linear infinite;
          padding-right: 100%;
        }
      `}</style>
    </>
  );
};

export default ScrollingNews;