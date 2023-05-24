import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Players = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Players"} />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, ease: "easeInOut" }}
          className="mt-20 ml-8 text-3xl lg:text-5xl"
        >
          Know all about NBA Players
        </motion.h1>

        <div className="flex flex-col h-2/3 mt-8 2xl:h-min 2xl:mt-32 2xl:flex-row xl:h-min xl:flew-row xl:mt-32 lg:h-min lg:flex-row lg:mt-32 items-center justify-around w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut" }}
            className="card  w-80 lg:w-96 shadow-xl image-full before:custom-card"
          >
            <figure>
              <img src="/players/meet-the-players.jpg" alt="meet-the-players"/>
            </figure>
            <div className="card-body">
              <div className="card-actions justify-center flex flex-col items-center h-full">
                <button
                  className="btn btn-primary bg-black hover:text-black hover:bg-white"
                  onClick={() => navigate("/meet-the-players")}
                >
                  Meet the Players
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut" }}
            className="card w-80 lg:w-96 shadow-xl image-full before:custom-card"
          >
            <figure>
              <img src="/players/players-in-headline.jpg" alt="player-in-todays-headline" />
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
        </div>
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default Players;
