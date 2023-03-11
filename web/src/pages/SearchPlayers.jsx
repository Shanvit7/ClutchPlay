import React from "react";
import SideBarWrapper from "../components/SideBarWrapper";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import PlayerCard from "../components/PlayerCard";
import { useGetAllPlayersQuery } from "../redux/services/playerService";

const SearchPlayers = () => {
  const { data: players = [] } = useGetAllPlayersQuery();
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar />

        <div className="flex w-full justify-center">
          <input
            type="text"
            placeholder="Comming Soon"
            className="input input-bordered bg-black w-full text-violet-50 max-w-xs mt-14"
            disabled
          />
        </div>

        <div className="flex justify-center mt-14">
          <div className="inline-grid gap-14 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3">
            {players.map((player, key) => {
              return <PlayerCard playerInfo={player} key={key} />;
            })}
          </div>
        </div>

        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default SearchPlayers;
