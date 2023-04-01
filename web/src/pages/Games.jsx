import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import GameAlert from "../components/Common/Alerts/GameAlert";
import { formattedDate } from "../utils/date";
import GameSection from "../components/Games/GameSection";
import { useQuery } from "react-query";
import { getGamesByDate } from "../services/gameService";

const Games = () => {
  const todaysDate = new Date();
  const yesterdaysDate = new Date(todaysDate.getTime() - (24 * 60 * 60 * 1000));
  const tommorrowsDate = new Date(todaysDate.getTime() + (24 * 60 * 60 * 1000));
  const {data : todaysGame={}} = useQuery('todaysGame',()=>getGamesByDate(formattedDate(todaysDate)));
  const {data : yesterdaysGame={}} = useQuery('yesterDaysGame',()=>getGamesByDate(formattedDate(yesterdaysDate)));
  const {data : tommorrowsGame={}} = useQuery('tommorowsGame',()=>getGamesByDate(formattedDate(tommorrowsDate),formattedDate(tommorrowsDate)));
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar />
        <GameAlert />
         <GameSection games={todaysGame.data} title={`Today's Game`} />
         <GameSection games={tommorrowsGame.data}  title={`Scheduled Tommorrow`} />
         <GameSection games={yesterdaysGame.data} title={`Yesterday's Game`} />
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default Games;
