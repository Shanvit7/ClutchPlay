import React from "react";
import LandingCarousel from "../components/LandingCarousel";
import { motion } from "framer-motion";
import logo from "/logo.png";
import basketball from "/basketball.svg";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-hidden">
      <LandingCarousel />

      <motion.div className="flex w-full justify-center z-10 absolute top-20 font-thin">
        <div>
          <img
            src={logo}
            className="w-60 h-60 xl:w-80 xl:h-80 md:w-72 md:h-72"
          />
        </div>
      </motion.div>

      <motion.div className="flex w-full justify-center z-10 absolute top-3/4">
        <button
          className="flex btn glass align-center hover:animate-bounce text-white font-thin w-9/12 xl:w-2/4 text-xl whitespace-nowrap"
          onClick={() => navigate("/home")}
        >
          Let's dribble
          <img src={basketball} className="w-8 h-8 ml-2" />
        </button>
      </motion.div>
    </div>
  );
};

export default Landing;
