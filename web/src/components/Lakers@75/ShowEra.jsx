import React from "react";
import { lakersTimeLine } from "../../utils/lakersTimeline";
const ShowEra = ({ selectedEraId = 1 }) => {
  const selectedEra = lakersTimeLine.find( era => era.id === selectedEraId );
  return (
    <div className="pt-14">
      <h1 className="text-black text-center font-bold">
      {selectedEra.title}
      </h1>
      <h2 className="text-center text-black font-bold text-2xl">{selectedEra.period}</h2>
      <div className="flex flex-col gap-20 p-6 lg:flex-row ">
        <img
          src={selectedEra.imgSrc}
          className="max-w-xl rounded-lg shadow-2xl"
          alt="logo"
        />
        <p className="text-black flex flex-col justify-center items-center text-3xl">
         {selectedEra.description}
        </p>
      </div>
    </div>
  );
};

export default ShowEra;
