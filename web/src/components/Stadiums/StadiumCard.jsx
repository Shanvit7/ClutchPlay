import React from "react";

const StadiumCard = ({ stadiumInfo={} }) => {
    const {Name,City,Country} = stadiumInfo;
  return (
    <div className="card card-compact w-80 lg:w-8/12 bg-primary border-4 text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{Name || 'NBA Stadium'}</h2>
        <p>{City}, {Country}</p>
        <div className="card-actions justify-end">
          <button className="btn hover:bg-white hover:text-black">Comming Soon</button>
        </div>
      </div>
    </div>
  );
};

export default StadiumCard;
