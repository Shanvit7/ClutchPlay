import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import GameAlert from "../components/Games/GameAlert";
import { formattedDate } from "../utils/date";
import GameSection from "../components/Games/GameSection";
import { useQuery } from "react-query";
import { getGamesByDate } from "../services/gameService";

const Games = () => {
  const todaysDate = new Date();
  const yesterdaysDate = new Date(todaysDate.getTime() - (24 * 60 * 60 * 1000));
  const tommorrowsDate = new Date(todaysDate.getTime() + (24 * 60 * 60 * 1000));
  const {data : todaysGame={},status : todaysGameStatus} = useQuery('todaysGame',()=>getGamesByDate(formattedDate(todaysDate)));
  const {data : yesterdaysGame={},status :yesterdaysGameStatus} = useQuery('yesterDaysGame',()=>getGamesByDate(formattedDate(yesterdaysDate),formattedDate(yesterdaysDate)));
  const {data : tommorrowsGame={},status : tommorrowsGameStatus} = useQuery('tommorowsGame',()=>getGamesByDate(formattedDate(tommorrowsDate),formattedDate(tommorrowsDate)));
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={'Games'}/>
        <GameAlert />
         <GameSection games={todaysGame.data} status={todaysGameStatus} title={`Today's Game`} />
         <GameSection games={tommorrowsGame.data} status={tommorrowsGameStatus} title={`Scheduled Tommorrow`} />
         <GameSection games={yesterdaysGame.data} status={yesterdaysGameStatus} title={`Yesterday's Game`} />
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default Games;
