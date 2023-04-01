import React,{useState} from "react";
import GameCard from "./GameCard";

const GameSection = ({title,games=[]}) =>{
    const [currentViewedGame,setCurrentViewedGame] = useState(0);
    const prevGame = () => setCurrentViewedGame(currentViewedGame - 1); 
    const nextGame = () => setCurrentViewedGame(currentViewedGame + 1);
    return(
        <section className="mt-14">
          <h1 className="text-black text-4xl pl-4">{title}</h1>
          <div className="divider"></div>
          <GameCard gameInfo={games[currentViewedGame]}/>
          <div className="btn-group flex justify-center gap-4 mt-4">
            {
                currentViewedGame !== 0 && 
                <button onClick={prevGame} className="btn btn-outline hover:bg-yellow-400 hover:text-black">
                 Previous
                </button>
            }
            {
              currentViewedGame < games.length - 1 && <button onClick={nextGame} className="btn btn-outline hover:bg-yellow-400 hover:text-black">
              Next
              </button>
            }
          </div>
        </section>
    )
}

export default GameSection;