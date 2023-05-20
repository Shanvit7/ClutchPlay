import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Teams = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Teams"} />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, ease: "easeInOut" }}
          className="text-black mt-20 ml-8"
        >
          Conference
        </motion.h1>

        <div className="flex flex-col h-2/3 mt-8 2xl:h-min 2xl:mt-32 2xl:flex-row xl:h-min xl:flew-row xl:mt-32 lg:h-min lg:flex-row lg:mt-32 items-center justify-around w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut" }}
            className="card w-96 shadow-xl image-full before:custom-card"
          >
            <figure>
              <img src="/conference/eastern.jpg" alt="western" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-center flex flex-col items-center h-full">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/teams/eastern")}
                >
                  Eastern Conference
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut" }}
            className="card w-96 shadow-xl image-full before:custom-card"
          >
            <figure>
              <img src="/conference/western.jpg" alt="eastern" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-center flex flex-col items-center h-full">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/teams/western")}
                >
                  Western Conference
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

export default Teams;
