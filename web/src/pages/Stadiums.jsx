import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import StadiumCard from "../components/Stadiums/StadiumCard";
import { useQuery } from "react-query";
import { getAllNBAStadiums } from "../services/stadiumService";
import Loader from "../components/Common/Loader";
import SomethingWentWrong from "../components/Error/SomethingWentWrong";
import { motion } from "framer-motion";

const Stadiums = () => {
  const {
    data: allNBAStadiums = [],
    isLoading,
    isSuccess,
  } = useQuery("allNBAStadiums", getAllNBAStadiums);
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Stadiums"} />
        {isLoading ? (
          <Loader />
        ) : isSuccess ? (
          <>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, ease: "easeInOut" }}
              className="mt-20 ml-8"
            >
              NBA Arenas
            </motion.h1>
            <div className="flex flex-col justify-center items-center gap-14 mt-14">
              {allNBAStadiums.map((stadium, index) => {
                return <StadiumCard stadiumInfo={stadium} key={index} />;
              })}
            </div>
          </>
        ) : (
          <SomethingWentWrong />
        )}
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default Stadiums;
