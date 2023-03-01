import React from "react";
import LandingCarousel from "../components/LandingCarousel";
import {motion} from 'framer-motion';
import logo from '/logo.png';
import basketball from '/basketball.svg';
const Landing = () => {
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-hidden">
      <LandingCarousel />

      <motion.div className="flex w-full justify-center z-10 absolute top-20 font-thin">
        <div>
         <img src={logo} className='w-52 h-52 xl:w-72 xl:h-72 md:w-60 md:h-60' />
        </div>
      </motion.div>

      <motion.div className="flex w-full justify-center z-10 absolute top-3/4">
        <button className="flex btn glass align-center text-white font-thin w-9/12 xl:w-2/4 text-xl whitespace-nowrap">
           Let's dribble
           <img src={basketball} className='w-8 h-8 ml-2'/>
        </button>
      </motion.div>
    </div>
  );
};

export default Landing;
