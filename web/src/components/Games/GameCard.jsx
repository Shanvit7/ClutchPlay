import React from "react";
import { nbaTeams } from "../../utils/teamInfo";
import nbaLogo from "/nba.svg";
import { determineWinner } from "../../utils/gameInfo";
const NBALogo = () => {
  return <img src={nbaLogo} className="w-20 h-20" />;
};
const GameCard = ({ gameInfo = {} }) => {
  const HomeLogo = nbaTeams.get(gameInfo.home_team?.abbreviation) || NBALogo;
  const AwayLogo = nbaTeams.get(gameInfo.visitor_team?.abbreviation) || NBALogo;
  return (
    <div className="stats bg-white text-black w-full shadow mt-4">
      <div className="stat">
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

      <div className="stat">
        <div className="stat-title text-center font-bold text-4xl">
          {gameInfo.status || "TBD"}
        </div>
        <div className="stat-value text-center font-bold text-md">
          {gameInfo.home_team?.abbreviation || "Team Home"} vs{" "}
          {gameInfo.visitor_team?.abbreviation || "Team Away"}
        </div>
        <div className="stat-desc text-center font-bold text-black">
          {gameInfo.status === "Final" && determineWinner(gameInfo)}
        </div>
        <button className="place-self-center btn btn-sm bg-black text-slate-100 xl:w-2/4">
          See Game Stats
        </button>
      </div>
      <div className="stat">
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
    </div>
  );
};

export default GameCard;
