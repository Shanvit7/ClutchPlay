import React from "react";
import SideBarWrapper from "../components/SideBarWrapper";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import nbaLogo from "/nba.svg";
import lakersLogo from "/lakers.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ delay: 0.3, ease: "anticipate" }}
          className="text-xl text-black text-center lg:text-4xl xl:text-6xl mt-14"
        >
          Catch all the NBA action here.
        </motion.h2>

        <motion.h3
          className="text-black text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, ease: "backIn" }}
        >
          Games, Players, Stats and much more.
        </motion.h3>

        <motion.div
          className="flex justify-center mt-14 mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, ease: "backInOut" }}
        >
          <img src={nbaLogo} className="w-24 h-24" />
          <img src={lakersLogo} className="w-24 h-24" />
        </motion.div>

        <motion.div
          className="hero bg-gray-50 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, ease: "easeInOut" }}
        >
          <div className="hero-content flex-col lg:flex-row bg-black overflow-x-hidden">
            <img src="/lakers.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">
                Celebrating 75 Years of Lakers
              </h1>
              <p className="flex items-center py-6">
                From Minneapolis to Los Angeles and 17 NBA Championships later,
                the Lakers are entering into their 75th year this 2022-23
                season.
              </p>
              <button
                className="btn btn-primary border-white"
                onClick={() => navigate("/lakers-75")}
              >
                Know more
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
