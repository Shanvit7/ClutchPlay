import React, { lazy } from "react";
/*  COMPONENTS */
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import SomethingWentWrong from "../components/Error/SomethingWentWrong";
import Loader from "../components/Common/Loader";
const UpcomingGame = lazy(()=>import("../components/Games/UpcomingGame"));
const MeetThePlayerCard = lazy(()=>import("../components/Players/MeetThePlayersCard"));
const ArenaHomeCard = lazy(()=>import( "../components/Arenas/ArenaHomeCard"));
const NewsTitleCard = lazy(()=>import("../components/Players/NewsTitleCard"));
/*  UTILS */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { checkForNextGame } from "../utils/gameInfo";
import { formattedDate } from "../utils/date";
import { useInView } from "react-intersection-observer";
/*  SERVICES */
import { useQuery } from "react-query";
import { getGamesByDate } from "../services/gameService";
/*  IMAGES */
import nbaLogo from "/nba.svg";
import { LAL } from "react-nba-logos";

const Home = () => {
  const [gameref, inViewGame] = useInView({
    triggerOnce: true,
    threshold:0.1
  });
  const [arenaRef, inViewArena] = useInView({
    triggerOnce: true,
    threshold:0.1
  });
  const [playerRef, inViewPlayer] = useInView({
    triggerOnce: true,
    threshold:0.1
  });
  const [newsRef, inViewNews] = useInView({
    triggerOnce: true,
    threshold:0.1
  });
  const navigate = useNavigate();
  const todaysDate = new Date();
  const tommorrowsDate = new Date(todaysDate.getTime() + 24 * 60 * 60 * 1000);
  const { data: todaysGame = {}, status: todaysGameStatus } = useQuery(
    "todaysGame",
    () => getGamesByDate(formattedDate(todaysDate))
  );
  const { data: tommorrowsGame = {}, status: tommorrowsGameStatus } = useQuery(
    "tommorowsGame",
    () =>
      getGamesByDate(
        formattedDate(tommorrowsDate),
        formattedDate(tommorrowsDate)
      )
  );
  const upcomingGame = checkForNextGame(todaysGame, tommorrowsGame);
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden scroll-smooth">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Home"} />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ delay: 0.3, ease: "anticipate" }}
          className="text-xl text-center lg:text-4xl mt-14"
        >
          Catch all the NBA action here.
        </motion.h2>

        <motion.p
          className="text-center mt-8 text-xxs lg:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, ease: "backIn" }}
        >
          Explore Players, Arenas, Game Scores, and Teams to Dive into the World
          of Basketball
        </motion.p>

        <motion.div
          className="flex justify-center mt-14 mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, ease: "backInOut" }}
        >
          <img src={nbaLogo} className="w-24 h-24" alt="nba-logo" />
          <LAL />
        </motion.div>

        <motion.div
          className="hero mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, ease: "easeInOut" }}
        >
          <div className="hero-content flex-col lg:flex-row border-4 border-white overflow-x-hidden">
            <img
              src="/lakers/lakers@75.jpg"
              className="max-w-xs lg:max-w-md rounded-lg shadow-2xl"
              alt="logo"
            />
            <div>
              <h1 className="font-bold lg:text-3xl">
                Celebrating 75 Years of Lakers
              </h1>
              <p className="flex items-center py-6 text-md lg:text-2xl">
                From Minneapolis to Los Angeles and 17 NBA Championships later,
                the Lakers are entering into their 75th year this 2022-23
                season.
              </p>
              <button
                className="btn btn-primary border-white hover:bg-white hover:text-black"
                onClick={() => navigate("/lakers-75")}
              >
                Know the journey
              </button>
            </div>
          </div>
        </motion.div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-14 mt-24 items-center">
          {[todaysGameStatus, tommorrowsGameStatus].some(
            (status) => status === "loading"
          ) ? (
            <Loader />
          ) : [todaysGameStatus, tommorrowsGameStatus].some(
              (status) => status === "error"
            ) ? (
            <SomethingWentWrong />
          ) : (
            <div ref={gameref} className="flex justify-center">
              {
                inViewGame && 
                <UpcomingGame gameInfo={upcomingGame} />
              }
            </div>
          )}
          <div ref={arenaRef} className="flex justify-center">
            {
              inViewArena && 
              <ArenaHomeCard />
            }
          </div>
          <div ref={playerRef} className="flex justify-center">
            {
              inViewPlayer && 
              <MeetThePlayerCard />
            }
          </div>
          <div ref={newsRef} className="flex justify-center">
            {
              inViewNews && 
              <NewsTitleCard />
            }
          </div>
        </div>
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default Home;
