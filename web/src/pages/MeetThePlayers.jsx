import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import PlayerCard from "../components/Players/PlayerCard";
import { useGetAllPlayersQuery } from "../redux/services/playerService";
import Loader from "../components/Common/Loader";
import SomethingWentWrong from "../components/Error/SomethingWentWrong";
import BackButton from "../components/Common/BackButton";

const MeetThePlayers = () => {
  const { data: players = [], isLoading, isSuccess } = useGetAllPlayersQuery();
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Meet The Players"} />
        <BackButton />
        {isLoading ? (
          <Loader />
        ) : isSuccess ? (
          <>
            <div className="flex w-full justify-center">
              <input
                type="text"
                placeholder="Coming Soon"
                className="input input-bordered mt-14 bg-black w-full text-violet-50 max-w-xs xl:mt-0"
                disabled
              />
            </div>

            <div className="flex justify-center mt-14">
              <div className="inline-grid gap-14 xl:gap-24 lg:gap-20 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3">
                {players.map((player, key) => {
                  return <PlayerCard playerInfo={player} key={key} />;
                })}
              </div>
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

export default MeetThePlayers;
