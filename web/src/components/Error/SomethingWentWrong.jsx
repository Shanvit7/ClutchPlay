import React from "react";
/*  UTILS  */
import { teamLogos } from "../../utils/teamInfo";

const SomethingWentWrong = () => {
  const randomIndex = Math.floor(Math.random() * teamLogos.length);
  const RandomLogo = teamLogos[randomIndex];
  return (
    <div className="flex flex-col items-center justify-center mt-14 h-1/2">
      <RandomLogo size={300} />
      <h2 className="text-center text-xl lg:text-4xl mt-8">
        Uh Oh 😞, Something went wrong. Please Try Again Later
      </h2>
    </div>
  );
};

export default SomethingWentWrong;
