import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import PlayerCard from "../components/Players/PlayerCard";
import Loader from "../components/Common/Loader";
import SomethingWentWrong from "../components/Error/SomethingWentWrong";
import BackButton from "../components/Common/BackButton";
import { useQuery } from "react-query";
import { getAllPlayers } from "../services/playerService";
const MeetThePlayers = () => {
  const { data: players =[],isLoading,isSuccess} = useQuery('players',getAllPlayers);
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Meet The Players"} />
        <BackButton />
        {isLoading ? (
          <Loader />
        ) : isSuccess ? (
            <div className="flex justify-center mt-14">
              <div className="inline-grid gap-14 xl:gap-24 lg:gap-20 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3">
                {players.map((player, key) => {
                  return <PlayerCard playerInfo={player} key={key} />;
                })}
              </div>
            </div>
        ) : (
          <SomethingWentWrong />
        )}
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default MeetThePlayers;
