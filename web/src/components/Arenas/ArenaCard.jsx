import React from "react";
import { useNavigate } from "react-router";

const ArenaCard = ({ arenaInfo={} }) => {
    const {Name,City,Country} = arenaInfo;
    const navigate= useNavigate();
  return (
    <div className="card card-compact w-80 lg:w-8/12 bg-primary border-4 text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{Name || 'NBA Arena'}</h2>
        <p>{City}, {Country}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>navigate('/comming-soon')} className="btn hover:bg-white hover:text-black">View</button>
        </div>
      </div>
    </div>
  );
};

export default ArenaCard;
