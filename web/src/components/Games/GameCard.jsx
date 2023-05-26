import React, { Fragment } from "react";
import { nbaTeams } from "../../utils/teamInfo";
import nbaLogo from "/nba.svg";
import { determineWinner } from "../../utils/gameInfo";
import Loader from "../Common/Loader";
import SomethingWentWrong from "../Error/SomethingWentWrong";
import { useNavigate } from "react-router";
const NBALogo = () => {
  return <img src={nbaLogo} className="w-20 h-20" alt='nba-logo'/>;
};
const GameCard = ({ gameInfo = {},status,areNogamesScheduled }) => {
  const HomeLogo = nbaTeams.get(gameInfo.home_team?.abbreviation) || NBALogo;
  const AwayLogo = nbaTeams.get(gameInfo.visitor_team?.abbreviation) || NBALogo;
  const navigate = useNavigate();
  return (
     <div className="stats bg-black w-full shadow mt-4">
      {
        status === 'loading'
        ?
           <Loader />
        :
        status === 'error'
        ?
        <SomethingWentWrong />
        :
        areNogamesScheduled
        ?
        <div className="p-20 flex flex-col items-center justify-center">
          <NBALogo/> 
          <h2 className="mt-4 font-bold">No Games Scheduled 📅</h2>
        </div>
        :
        <Fragment>
        <div className="stat pl-0 pr-0 xl:pl-6 xl:pr-6">
        <div className="text-center text-xxs">
          {gameInfo.home_team?.division || "Division"}
        </div>
        <div className="text-center text-xxs">
          {gameInfo.home_team?.full_name || "Team"}
        </div>
        <figure className="flex justify-center">
          <HomeLogo />
        </figure>
        <div className="stat-title text-center">Home</div>
        <div className="stat-value text-center">
          {gameInfo.home_team_score || "TBD"}
        </div>
      </div>

      <div className="stat pl-0 pr-0 xl:pl-6 xl:pr-6 lg:pl-4 lg:pr-4">
        <div className="stat-title text-center font-bold text-md text-xxs lg:text-4xl">
          {gameInfo.status || "TBD"}
        </div>
        <div className="stat-value text-center font-bold text-sm xl:text-4xl lg:text-2xl">
          {gameInfo.home_team?.abbreviation || "Team Home"} vs{" "} 
          {gameInfo.visitor_team?.abbreviation || "Team Away"}
        </div>
        <div className="stat-desc text-center font-bold">
          {gameInfo.status === "Final" && determineWinner(gameInfo)}
        </div>
        <button onClick={()=>navigate('/comming-soon')} className="place-self-center btn btn-sm bg-black hover:bg-white hover:text-black xl:w-2/4">
          See Stats
        </button>
      </div>
      <div className="stat pl-0 pr-0 xl:pl-6 xl:pr-6">
        <div className="text-center text-xxs">
          {gameInfo.visitor_team?.division || "Division"}
        </div>
        <div className="text-center text-xxs">
          {gameInfo.visitor_team?.full_name || "Team"}
        </div>
        <figure className="flex justify-center">
          <AwayLogo />
        </figure>
        <div className="stat-title text-center">Away</div>
        <div className="stat-value text-center">
          {gameInfo.visitor_team_score || "TBD"}
        </div>
      </div>
      </Fragment>
      }
      </div>
  );
};

export default GameCard;
