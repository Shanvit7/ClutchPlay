import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import nbaLogo from "/nba.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LAL } from "react-nba-logos";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Home"} />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ delay: 0.3, ease: "anticipate" }}
          className="text-2xl text-center lg:text-4xl mt-14"
        >
          Catch all the NBA action here.
        </motion.h2>

        <motion.h3
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, ease: "backIn" }}
        >
          Explore Players, Arenas, Game Scores, and Teams to Dive into the World of Basketball
        </motion.h3>

        <motion.div
          className="flex justify-center mt-14 mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, ease: "backInOut" }}
        >
          <img src={nbaLogo} className="w-24 h-24" alt='nba-logo'/>
          <LAL />
        </motion.div>

        <motion.div
          className="hero mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, ease: "easeInOut" }}
        >
          <div className="hero-content flex-col lg:flex-row border-4 border-white overflow-x-hidden">
            <img src="/lakers/lakers@75.jpg" className="max-w-xs lg:max-w-md rounded-lg shadow-2xl" alt='logo'/>
            <div>
              <h1 className="font-bold lg:text-3xl">
                Celebrating 75 Years of Lakers
              </h1>
              <p className="flex items-center py-6 text-md lg:text-2xl">
                From Minneapolis to Los Angeles and 17 NBA Championships later,
                the Lakers are entering into their 75th year this 2022-23
                season.
              </p>
              <button
                className="btn btn-primary border-white hover:bg-white hover:text-black"
                onClick={() => navigate("/lakers-75")}
              >
                Know the journey
              </button>
            </div>
          </div>
        </motion.div>

        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default Home;
