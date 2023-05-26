import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import MeetThePlayerCard from "../components/Players/MeetThePlayersCard";
import PlayersInHeadlines from "../components/Players/PlayersInHeadlinesCard";
const Players = () => {
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Players"} />
        <div className="flex flex-col h-2/3 mt-14 2xl:h-min 2xl:mt-32 2xl:flex-row xl:h-min xl:flew-row xl:mt-32 lg:h-min lg:flex-row lg:mt-32 items-center justify-around w-full">
          <MeetThePlayerCard />
          <PlayersInHeadlines />
        </div>
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default Players;
