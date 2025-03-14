import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const RegisterButton = () => {

  const handleRegistration=()=>{
    window.open('/nectechfest2k25/#/registration/userdetail', '_blank');
  }

  return (
    <motion.div
      initial={{ x: 100, rotate: 90 }}
      animate={{ x: 0, rotate: 90 }}
      className="fixed right-4 top-1/2 translate-y-[-50%] z-50"
      style={{ transformOrigin: '100% 50%' }}
    >
      <div onClick={handleRegistration} className="group relative cursor-pointer p-2 w-32 border-2 border-pink-500 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden text-white text-center font-semibold">
        <span className="translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-500 ease-in-out inline-block">
          Register
        </span>
        <div className="flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <span>Register</span>
          <ArrowRight />
        </div>
        <div className="absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-black scale-[1] group-hover:bg-pink-600 group-hover:scale-[1.8] transition-all duration-500 ease-in-out group-hover:top-[0%] group-hover:left-[0%]"></div>
      </div>
    </motion.div>
  );
};

export default RegisterButton;