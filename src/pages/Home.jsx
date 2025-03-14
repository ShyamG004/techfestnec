import React, { useEffect } from "react";
import "../assets/fonts/font.css";
import "../assets/fonts/nusar.css";
import Particle from '../components/Particle'
import CountDown from "../components/CountDown";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import NumberCounter from '../components/NumberTicker.jsx';
import About from "../components/About";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import HighlightedEvents from "../components/HighlightedEvents";
import PricingCards from "../components/PricingCards";
import RegisterButton from '../components/RegisterButton';
import { Marquee } from '../components/ui/marquee'
import VisitorCounter from "../components/VisitorCount/index.jsx";
import SpotlightedEvents from "../components/SpotlightedEvents";
import OnlineEvents from "../components/OnlineEvents";
import ScrollingNews from "../components/ScrollingNews";

function Home() {
  useEffect(() => {
    sessionStorage.removeItem('eventListScrollPosition');
    sessionStorage.removeItem('eventListSearchQuery');
    sessionStorage.removeItem('eventListSelectedTag');
    sessionStorage.removeItem('eventListCurrentPage');
    window.scrollTo(0, 0);

  }, []);
  return (
    <>
      <Navbar />
      <div>
        <Particle />
      </div>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        <RegisterButton />
        {/* NEC Logo and Founder Logo Container for mobile */}
        <div className="lg:hidden flex items-center absolute top-2.5 left-2 z-[5] gap-2">
          <img
            src={`/logos/NEC-LOGO.webp`}
            alt="NEC Tech Fest logo"
            className="w-8 sm:w-10 h-auto hover:scale-105 transition-transform duration-300"
          />
          <img
            src={`/logos/Founder-Logo.webp`}
            alt="Founder logo"
            className="w-12 sm:w-14 h-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* NEC Logo - Desktop */}
        <div className="hidden lg:block absolute top-2.5 left-4 z-[5]">
          <img
            src={`/logos/NEC-LOGO.webp`}
            alt="NEC Tech Fest logo"
            className="w-14 h-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Founder Logo - Desktop */}
        <div className="hidden lg:block absolute top-0.5 right-0 z-[5]">
          <img
            src={`/logos/Founder-Logo.webp`}
            alt="Founder logo"
            className="w-20 h-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(109,40,217,0.2)] via-transparent to-[rgba(139,92,246,0.2)] z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#7700ff_0%,transparent_25%),radial-gradient(circle_at_80%_80%,#7700FF_0%,transparent_25%)] blur-[60px]" />
        </div>

        <div className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center flex-col z-[1] backdrop-blur-xs pb-0 pt-32 sm:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(78,8,243,0.127),transparent_70%)] blur-[40px]" />

          <div className="container mx-auto text-center px-4">
            <motion.div
              className="font-netron text-[45px] sm:text-[45px] md:text-[60px] lg:text-[75px] text-white mb-2 sm:mb-4 animate-glow"
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.34, 1.56, 0.64, 1],
                opacity: { duration: 1.2, ease: "easeOut" }
              }}
            >
              NEC TECH FEST'25
            </motion.div>

            <motion.div
              className="relative overflow-hidden mb-4 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 1.2,
                ease: "easeOut"
              }}
            >
              <div
                className="text-[18px] sm:text-[18px] md:text-[22px] lg:text-[25px] font-['Orbitron'] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] bg-gradient-to-b from-[#edeffd] to-[#524d57] bg-clip-text text-transparent [text-shadow:2px_2px_4px_rgba(192,192,192,0.3)] transform-none opacity-100 font-bold"

              //className="text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold tracking-[2px] sm:tracking-[3px] md:tracking-[5px] text-white relative inline-block before:content-[attr(data-glitch)] before:absolute before:top-0 before:left-0 before:text-[#0ff] before:opacity-50 before:animate-glitch after:content-[attr(data-glitch)] after:absolute after:top-0 after:left-0 after:text-[#ff00ff] after:opacity-50 after:animate-glitch"
              >
                A Stage for Multidisciplinary Fusion
              </div>
            </motion.div>
            <motion.div
              className="relative overflow-hidden mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 1.2,
                ease: "easeOut"
              }}
            >
              <div
                className="text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold tracking-[2px] sm:tracking-[3px] md:tracking-[5px] text-white relative inline-block before:content-[attr(data-glitch)] before:absolute before:top-0 before:left-0 before:text-[#0ff] before:opacity-50 before:animate-glitch after:content-[attr(data-glitch)] after:absolute after:top-0 after:left-0 after:text-[#ff00ff] after:opacity-50 after:animate-glitch"
                data-glitch="A National Level Technical Symposium"
              >
                A National Level Technical Symposium
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}

              className="text-[18px] sm:text-[18px] md:text-[22px] lg:text-[25px] font-['Orbitron'] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] bg-gradient-to-b from-[#edeffd] to-[#524d57]  bg-clip-text text-transparent [text-shadow:2px_2px_4px_rgba(192,192,192,0.3)] transform-none opacity-100 font-bold "
            >
              14<sup className="text-[18px] sm:text-[10px] md:text-[15px] lg:text-[20px] font-['Orbitron'] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] bg-gradient-to-b from-[#edeffd] to-[#524d57]  bg-clip-text text-transparent [text-shadow:2px_2px_4px_rgba(192,192,192,0.3)] transform-none opacity-100 font-bold ">th</sup> & 15<sup className="text-[18px] sm:text-[10px] md:text-[15px] lg:text-[20px] font-['Orbitron'] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] bg-gradient-to-b from-[#edeffd] to-[#524d57]  bg-clip-text text-transparent [text-shadow:2px_2px_4px_rgba(192,192,192,0.3)] transform-none opacity-100 font-bold ">th</sup> March 2k&apos;25
            </motion.p>
          </div>

          <div className="w-full max-w-[1200px] mx-auto mt-12 md:mt-16 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <NumberCounter />
            </motion.div>
          </div>
        </div>
        <VisitorCounter />
        <ScrollingNews/>

        {/* Spotlight Events */}
        <motion.section
          className="relative mt-32 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Gradient background for Events section */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9d4edd]/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#c77dff]/10 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#e0aaff]/10 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#7b2cbf]/10 rounded-full blur-[100px]" />
          </div>

          <motion.div
            className="container mx-auto px-4 relative z-10 text-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-7xl font-iceland font-bold bg-gradient-to-b from-[#e0aaff] to-[#5a189a] bg-clip-text text-transparent leading-[100%] tracking-tighter mb-2">
              SPOTLIGHT EVENTS
            </h1>
            <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-[#9d4edd] to-transparent mx-auto mt-4 mb-8 [filter:drop-shadow(0_0_5px_rgb(157,78,221))]" />

            <SpotlightedEvents />
          </motion.div>
        </motion.section>

        <motion.section
          className="relative mt-20 sm:mt-10 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9d4edd]/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#c77dff]/10 rounded-full blur-[80px]" />
            <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#e0aaff]/10 rounded-full blur-[70px]" />
            <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#7b2cbf]/10 rounded-full blur-[70px]" />
          </div>

          <motion.div
            className="container mx-auto px-4 relative z-10 text-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <OnlineEvents />
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="relative mt-20 sm:mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Gradient background for About section */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px]" />
          </div>

          <motion.div
            className="container mx-auto px-4 relative z-10"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <About />
          </motion.div>
        </motion.section>

        {/* Events Section */}
        <motion.section
          className="relative mt-32 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Gradient background for Events section */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9d4edd]/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#c77dff]/10 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#e0aaff]/10 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#7b2cbf]/10 rounded-full blur-[100px]" />
          </div>

          <motion.div
            className="container mx-auto px-4 relative z-10 text-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-7xl font-iceland font-bold bg-gradient-to-b from-[#e0aaff] to-[#5a189a] bg-clip-text text-transparent leading-[100%] tracking-tighter mb-2">
              HIGHLIGHTED EVENTS
            </h1>
            <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-[#9d4edd] to-transparent mx-auto mt-4 mb-8 [filter:drop-shadow(0_0_5px_rgb(157,78,221))]" />

            <HighlightedEvents />
          </motion.div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="container mx-auto px-4 relative z-10 text-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-7xl font-iceland font-bold bg-gradient-to-b from-[#FF0080] to-[#7928CA] bg-clip-text text-transparent leading-[100%] tracking-tighter mb-2">
              PRICING PLANS
            </h1>
            <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-[#FF0080] to-transparent mx-auto mt-4 mb-8 [filter:drop-shadow(0_0_5px_rgb(255,0,128))]" />

            <PricingCards />
          </motion.div>
        </motion.section>

        {/* Countdown Section */}
        <div className="relative z-[2] bg-gradient-to-b from-transparent via-transparent to-transparent pb-0">
          <div className="relative">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8
              }}
              className="relative mx-auto text-center font-iceland font-bold tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-[26px] sm:text-[35px] md:text-[45px] lg:text-[55px] w-max py-[15px] sm:py-[25px] md:py-[35px] [text-shadow:0_0_15px_rgba(139,92,246,0.8),0_0_30px_rgba(109,40,217,0.6)] [filter:drop-shadow(-3px_0_5px_#6e21ff)] after:content-[''] after:h-0.5 sm:after:h-1 after:block after:bg-[linear-gradient(to_right,transparent,rgb(174,0,255),transparent)] after:mb-[3px] sm:after:mb-[4px] md:after:mb-[5px] after:[filter:drop-shadow(0_0_5px_rgb(0,0,255))]"
            >
              REGISTRATION ENDS
            </motion.h1>

            <div className="w-full md:w-3/5 mx-auto pb-8">
              <CountDown />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;