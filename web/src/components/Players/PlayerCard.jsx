import React from "react";
/*  UTILS */
import { useNavigate } from "react-router";

const PlayerCard = ({ playerInfo = {} }) => {
  const navigate= useNavigate();
  return (
    <div className="card card-compact w-80 lg:w-96 border-4 shadow-xl">
      <div className={`badge badge-success gap-2`}>{playerInfo.Status}</div>
      <div className="avatar flex justify-center mt-4">
        <div className="w-24 rounded-full ring ring-primary bg-white ring-purple-500 ring-offset-2">
          <img src={playerInfo.PhotoUrl} alt="player" />
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title justify-center">
          {playerInfo.FirstName} {playerInfo.LastName}
        </h2>
        <div className="flex">
          <p className="ml-4">Position: {playerInfo.Position}</p>

          <p>Team: {playerInfo.Team}</p>
        </div>
        <button onClick={()=>navigate('/comming-soon')} className="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-md text-center">
          Know More
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
