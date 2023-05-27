import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const PlayersInHeadlines = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, ease: "anticipate", duration: 1 }}
      className="card max-w-xs lg:max-w-md shadow-xl image-full before:custom-card"
    >
      <figure>
        <img
          src="/players/players-in-headline.jpg"
          alt="player-in-todays-headline"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-center flex flex-col items-center h-full">
          <button
            className="btn btn-primary bg-black hover:text-black hover:bg-white"
            onClick={() => navigate("/player-in-headline")}
          >
            Player In Today's Headline
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PlayersInHeadlines;
