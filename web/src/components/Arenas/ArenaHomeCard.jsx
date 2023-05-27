import React from "react";
import { useNavigate } from "react-router";
const ArenaHomeCard = () => {
  const navigate = useNavigate();
  return (
    <div className="card max-w-xs lg:max-w-md glass">
      <figure>
        <img src="/arenas/arena.jpg" alt="arena" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Arenas</h2>
        <p>
          Get ready to feel the adrenaline and witness the magic of NBA
          basketball in these remarkable arenas.
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => navigate("/nba-arenas")}
            className="btn btn-primary bg-black hover:text-black hover:bg-white"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArenaHomeCard;
