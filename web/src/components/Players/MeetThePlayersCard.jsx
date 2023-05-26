import React from "react";
import { useNavigate } from "react-router-dom";
const MeetThePlayerCard = () => {
  const navigate = useNavigate();
  return (
    <div className="card max-w-xs lg:max-w-md shadow-xl image-full before:custom-card">
      <figure>
        <img src="/players/meet-the-players.jpg" alt="meet-the-players" />
      </figure>
      <div className="card-body">
        <div className="card-actions flex flex-col items-center h-full justify-center">
          <button
            onClick={() => navigate("/meet-the-players")}
            className="btn btn-primary bg-black hover:text-black hover:bg-white"
          >
            Meet the Players
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetThePlayerCard;
