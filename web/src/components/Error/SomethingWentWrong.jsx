import React from "react";
import { teamLogos } from "../../utils/teamInfo";

const SomethingWentWrong = () => {
  const randomIndex = Math.floor(Math.random() * teamLogos.length);
  const RandomLogo = teamLogos[randomIndex];
  return (
    <div className="flex text-black flex-col items-center justify-center mt-14 h-1/2">
      <RandomLogo size={500} />
      <h2 className="text-center text-2xl lg:text-4xl mt-8">
        Uh Oh 😞, Something went wrong. Please Try Again Later
      </h2>
    </div>
  );
};

export default SomethingWentWrong;
