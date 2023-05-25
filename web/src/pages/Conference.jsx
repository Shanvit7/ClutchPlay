import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import { useParams } from "react-router-dom";
import BackButton from "../components/Common/BackButton";
import DivisionsByConference from "../components/Divisions/DivisionsByConference";
import Loader from "../components/Common/Loader";
import SomethingWentWrong from "../components/Error/SomethingWentWrong";
import { useQuery } from "react-query";
import { getAllTeams } from "../services/teamService";

const Conference = () => {
  const { conferenceId } = useParams();
  const { data: teamData = [], isLoading, isSuccess } = useQuery('teams',getAllTeams);
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={`Divisions of ${conferenceId} Conference`} />
        <BackButton />
        {isLoading ? (
          <Loader />
        ) : isSuccess ? (
          <>
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
