import React from "react";
/*  COMPONENTS */
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
/*  UTILS */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Teams = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Conference"} />
        <div className="flex flex-col gap-14 h-2/3 mt-14 2xl:h-min 2xl:mt-32 2xl:flex-row xl:gap-0 xl:h-min xl:flew-row xl:mt-32 lg:h-min lg:flex-row lg:mt-32 items-center justify-around w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, ease: "anticipate", duration: 1 }}
            className="card w-80 lg:w-96 shadow-xl image-full before:custom-card"
          >
            <figure>
              <img src="/conference/eastern.jpg" alt="western" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-center flex flex-col items-center h-full">
                <button
                  className="btn btn-primary bg-black hover:text-black hover:bg-white"
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
            transition={{ delay: 0.3, ease: "anticipate", duration: 1 }}
            className="card w-80 lg:w-96 shadow-xl image-full before:custom-card"
          >
            <figure>
              <img src="/conference/western.jpg" alt="eastern" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-center flex flex-col items-center h-full">
                <button
                  className="btn btn-primary bg-black hover:text-black hover:bg-white"
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
