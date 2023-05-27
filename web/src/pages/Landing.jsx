import React, { useState } from "react";
/* UTILS */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

const Landing = () => {
  const animationProps = useSpring({
    backgroundColor: "#0000000",
    from: { backgroundColor: "#FF6E00" },
    config: { duration: 3000 },
  });
  const [bounceTheBall, setBounceTheBall] = useState(false);
  const navigate = useNavigate();
  const goToHomePage=()=>{
    navigate('/home');
  };
  const dribbleTheBall=()=>{
    setBounceTheBall(true);
  };
  return (
    <animated.div
      style={animationProps}
      className="h-screen w-screen  overflow-hidden"
    >
      <div className="flex h-screen justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onAnimationComplete={dribbleTheBall}
            className={`w-32 h-32 mb-4 ${bounceTheBall && "animate-bounce"}`}
            src="basketball2.svg"
            alt="Basketball"
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-white text-center text-4xl font-bold mb-4"
          >
            ClutchPlay
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-white text-lg text-center"
          >
            Stay Ahead of the Game
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="btn btn-primary mt-14 hover:text-black hover:bg-white"
            onClick={goToHomePage}
          >
            Let's Dribble
          </motion.button>
        </motion.div>
      </div>
    </animated.div>
  );
};

export default Landing;
