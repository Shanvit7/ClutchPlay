import React from "react";

const StadiumCard = ({ stadiumInfo={} }) => {
    const {Name,City,Country} = stadiumInfo;
  return (
    <div className="card xl:w-8/12 md:w-7/12 w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{Name || 'NBA Stadium'}</h2>
        <p>{City}, {Country}</p>
        <div className="card-actions justify-end">
          <button className="btn">Comming Soon</button>
        </div>
      </div>
    </div>
  );
};

export default StadiumCard;
