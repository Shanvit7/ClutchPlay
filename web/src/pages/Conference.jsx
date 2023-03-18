import React from "react";
import SideBarWrapper from "../components/SideBarWrapper";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";
import DivisionsByConference from "../components/Divisions/DivisionsByConference";
import { useGetAllTeamsQuery } from "../redux/services/teamService";
import Loader from "../components/Loader";
import SomethingWentWrong from "../components/SomethingWentWrong";

const Conference = () => {
  const { conferenceId } = useParams();
  const { data: teamData = [], isLoading, isSuccess } = useGetAllTeamsQuery();
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Teams"} />
        <BackButton />
        {isLoading ? (
          <Loader />
        ) : isSuccess ? (
          <>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, ease: "easeInOut" }}
              className="text-black mt-20 ml-8 capitalize"
            >
              {conferenceId} Conference Divisions
            </motion.h1>
            <DivisionsByConference
              conferenceId={conferenceId}
              teamData={teamData}
            />
          </>
        ) : (
          <SomethingWentWrong />
        )}
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default Conference;
