import React, { useState } from "react";
import GameCard from "./GameCard";
import { motion } from "framer-motion";

const GameSection = ({ title, games = [], status }) => {
  const [currentViewedGame, setCurrentViewedGame] = useState(0);
  const prevGame = () => setCurrentViewedGame(currentViewedGame - 1);
  const nextGame = () => setCurrentViewedGame(currentViewedGame + 1);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, ease: "anticipate" }}
      className="mt-14"
    >
      <h1 className="pl-4 capitalize text-xl lg:text-4xl">{title}</h1>
      <div className="divider" />
      <GameCard
        gameInfo={games[currentViewedGame]}
        status={status}
        areNogamesScheduled={games.length === 0}
      />
      <div className="btn-group flex justify-center gap-4 mt-4">
        {status === "success" && currentViewedGame !== 0 && (
          <button onClick={prevGame} className="btn btn-outline">
            Previous
          </button>
        )}
        {status === "success" && currentViewedGame < games.length - 1 && (
          <button onClick={nextGame} className="btn btn-outline">
            Next
          </button>
        )}
      </div>
    </motion.section>
  );
};

export default GameSection;
