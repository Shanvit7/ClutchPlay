import React, { useState, useEffect } from "react";
import { nbaTeams } from "../../utils/teamInfo";
import nbaLogo from "/nba.svg";
import { useNavigate } from "react-router-dom";
const NBALogo = () => {
  return <img src={nbaLogo} className="w-20 h-20" alt="nba-logo" />;
};

const UpcomingGame = ({ gameInfo }) => {
  const HomeLogo = nbaTeams.get(gameInfo.home_team?.abbreviation) || NBALogo;
  const AwayLogo = nbaTeams.get(gameInfo.visitor_team?.abbreviation) || NBALogo;
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateCountdown = () => {
    const now = new Date().getTime();
    const difference = new Date(gameInfo?.status) - now;

    if (difference <= 0) {
      clearInterval(interval);
      // Handle countdown completion if needed
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setCountdown({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="card flex max-w-xs lg:max-w-md shadow-xl border">
        <div className="card-body items-center text-center">
          <h2 className="font-bold text-4xl">Upcoming Game</h2>
          <div className="flex gap-4 items-center w-full justify-center mt-4">
            <div>
              <HomeLogo />
              {gameInfo.home_team?.abbreviation || "Team Home"}
            </div>
            vs{" "}
            <div>
              <AwayLogo />
              {gameInfo.visitor_team?.abbreviation || "Team Away"}
            </div>
          </div>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-14">
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": countdown.days }}>
                  {countdown.days}
                </span>
              </span>
              days
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": countdown.hours }}>
                  {countdown.hours}
                </span>
              </span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": countdown.minutes }}>
                  {countdown.minutes}
                </span>
              </span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": countdown.seconds }}>
                  {countdown.seconds}
                </span>
              </span>
              sec
            </div>
          </div>
          <div className="card-actions mt-4">
              <button onClick={()=>navigate('/games')} className="btn btn-primary border-white hover:bg-white hover:text-black">View All Games</button>
            </div>
        </div>
      </div>
  );
};

export default UpcomingGame;
