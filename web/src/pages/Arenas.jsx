import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import ArenaCard from "../components/Arenas/ArenaCard";
import { useQuery } from "react-query";
import { getAllNBAArenas } from "../services/ArenaService";
import Loader from "../components/Common/Loader";
import SomethingWentWrong from "../components/Error/SomethingWentWrong";
import { motion } from "framer-motion";

const Arenas = () => {
  const {
    data: allNBAArenas = [],
    isLoading,
    isSuccess,
  } = useQuery("allNBAArenas", getAllNBAArenas);
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Arenas"} />
        {isLoading ? (
          <Loader />
        ) : isSuccess ? (
          <>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, ease: "easeInOut" }}
              className="mt-20 ml-8 text-3xl lg:text-5xl"
            >
              NBA Arenas
            </motion.h1>
            <div className="flex flex-col justify-center items-center gap-14 mt-14">
              {allNBAArenas.map((arena, index) => {
                return <ArenaCard ArenaInfo={arena} key={index} />;
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

export default Arenas;
