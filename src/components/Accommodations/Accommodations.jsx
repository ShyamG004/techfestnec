import "../../assets/fonts/font.css";
import "../../assets/fonts/nusar.css";
import { motion } from "framer-motion";
import { Phone, User } from "lucide-react";
import boysHostelImg from '../../assets/girls hostel 1.jpg';

const Accommodations = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[100vh] p-4 bg-[radial-gradient(circle_at_center,rgba(78,8,243,0.127),transparent_70%)]">

        <div className="container mx-auto mb-4 text-center px-4">
          <motion.div
            className="mt-[60px] font-netron text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] text-white animate-glow"
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.8,
              ease: [0.34, 1.56, 0.64, 1],
              opacity: { duration: 1.2, ease: "easeOut" }
            }}
          >
            ACCOMMODATIONS
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18px] sm:text-[18px] md:text-[22px] lg:text-[22px] font-['Orbitron'] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] bg-gradient-to-b from-[#edeffd] to-[#524d57]  bg-clip-text text-transparent [text-shadow:2px_2px_4px_rgba(192,192,192,0.3)] transform-none opacity-100 font-bold "
          >
            Secure your stay for a seamless symposium experience!
          </motion.p>
        </div>

        <div className="move-in-animation flex flex-col md:flex-row justify-center items-center text-justify p-[20px] md:p-[35px] mt-4 rounded-[20px] bg-gradient-to-br from-[#a7465b] to-[#6f39cd] shadow-[0_4px_20px_rgba(139,92,246,0.3)] w-full max-w-5xl">
          <img
            src={`/nectechfest2k25/images/girls hostel 1.webp`}
            alt="boys hostel"
            height={300} // Adjusted height
            width={450} // Adjusted width
            className="w-[90%] sm:w-[80%] md:w-[50%] lg:w-[40%] h-auto rounded-[10px] border-2 border-black mb-4 md:mb-0 md:mr-[35px]"
          />

          <div className="text-white text-xl sm:text-2xl leading-normal px-2 sm:px-4">
            <p className="text-justify">
              Accommodations will be provided free for the students who are participating in the symposium from other districts.
            </p>
            <ul className="text-white text-xl sm:text-2xl list-disc mt-4 ml-5 sm:ml-8">
              <li>One night stay on 14th March</li>
              <li>Unlock Complimentary Accommodation in College Hostels on Prior Request Savor Delicious Breakfast & Dinner at Affordable Prices </li>
              <li>Food can be bought from the college cafe in payment basis</li>
            </ul>
          </div>
        </div>

        <motion.div
          className="mt-[60px] font-netron text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] text-white animate-glow"
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.34, 1.56, 0.64, 1],
            opacity: { duration: 1.2, ease: "easeOut" }
          }}
        >
          Contact Info
        </motion.div>

        {/* Contact Information Section */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 w-full max-w-5xl">
          <div className="move-in-animation flex flex-col justify-center items-center text-center p-[20px] md:p-[35px] rounded-[20px] bg-gradient-to-br from-[#a7465b] to-[#6f39cd] shadow-[0_4px_20px_rgba(139,92,246,0.3)] w-full md:w-[45%] m-2">
            <p className="text-white text-xl sm:text-2xl mb-2 text-purple-300 animate-pulse">Boys Hostel</p>
            <div className="flex items-center space-x-2">
              <User className="w-6 h-6 text-white" />
              <p className="text-white text-xl sm:text-2xl">Mr. Marichamy</p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Phone className="w-6 h-6 text-white" />
              <p className="text-white text-xl sm:text-2xl">+91 73958 54951</p>
            </div>
          </div>
          <div className="move-in-animation flex flex-col justify-center items-center text-center p-[20px] md:p-[35px] rounded-[20px] bg-gradient-to-br from-[#a7465b] to-[#6f39cd] shadow-[0_4px_20px_rgba(139,92,246,0.3)] w-full md:w-[45%] m-2">
            <p className="text-white text-xl sm:text-2xl mb-2 text-purple-300 animate-pulse">Ladies Hostel</p>
            <div className="flex items-center space-x-2">
              <User className="w-6 h-6 text-white" />
              <p className="text-white text-xl sm:text-2xl">Ms. Lalitha</p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Phone className="w-6 h-6 text-white" />
              <p className="text-white text-xl sm:text-2xl">+91 88702 45935</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;