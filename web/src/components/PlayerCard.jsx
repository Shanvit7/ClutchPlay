import React from "react";
const PlayerCard = ({ playerInfo = {} }) => {
  return (
    <div className="card card-compact w-96 xl:w-72 lg:w-64 md:w-56 bg-black shadow-xl">
      <div
        className={`badge badge-${
          playerInfo.Status === "Active" ? "success" : "error"
        }  gap-2`}
      >
        {playerInfo.Status}
      </div>

      <div className="avatar flex justify-center mt-4">
        <div className="w-24 rounded-full ring ring-primary ring-purple-500 ring-offset-2">
          <img src={playerInfo.PhotoUrl} />
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title justify-center">
          {playerInfo.FirstName} {playerInfo.LastName}
        </h2>
        <div className="flex">
          <p className="ml-4">Position: {playerInfo.Position}</p>

          <p>Team: {playerInfo.Team}</p>

          <p>Jersey No.{playerInfo.Jersey}</p>
        </div>
        <button className="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-md text-center">
          Know More
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
