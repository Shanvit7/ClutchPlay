import React from "react";
const SomethingWentWrong = () => {
  const teamsLogo = [
    "memphis-grizzlies",
    "washington-wizards",
    "philidephia-76ers",
    "new-orleans-pelicans",
    "milwaukee-bucks",
    "la-clippers",
    "houston-rockets",
    "detroit-pistons",
    "cleveland-cavaliers",
    "charlotte-hornets",
    "boston-celtics",
    "lakers",
    "brooklynets",
  ];
  const randomIndex = Math.floor(Math.random() * teamsLogo.length);
  const randomLogo = teamsLogo[randomIndex];

  return (
    <div className="flex text-black flex-col items-center justify-center mt-14 h-1/2">
      <img src={`/${randomLogo}.svg`} className="w-60 h-60 fill-blue-500" />
      <h2 className="text-center text-2xl lg:text-4xl mt-8">
        Uh Oh 😞, Something went wrong. Please Try Again Later
      </h2>
    </div>
  );
};

export default SomethingWentWrong;
