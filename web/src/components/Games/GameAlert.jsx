import React, { Fragment } from "react";
import nbaLogo from "/nba.svg";
import { areGamesinProgress } from "../../services/gameService";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
const GameAlert = () => {
  const {data: areGamesinProgressStatus} = useQuery('areGamesInProgress',areGamesinProgress);
  const navigate= useNavigate();
  return (
    <Fragment>
      {areGamesinProgressStatus &&
        <div className="alert shadow-lg bg-success">
        <div>
            <img src={nbaLogo} className="w-10 h-10" alt='nba-logo'/>
        <div>
          <h3 className="font-bold flex items-center gap-2">
            Game in Progress
            <span className="relative flex h-3 w-3">
             <span className="animate-ping absolute inline-flex rounded-full h-full w-full bg-green-600 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
           </span>
          </h3>
          <div className="text-xs">Don't miss the live action</div>
        </div>
      </div>
      <div className="flex-none">
        <button onClick={()=>navigate('/comming-soon')} className="btn btn-sm bg-black hover:text-black hover:bg-white">
           See Game Stats
        </button>
      </div>
    </div>
      }
    </Fragment>
  );
};

export default GameAlert;
