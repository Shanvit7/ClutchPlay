import React from "react";
import SideBarWrapper from "../components/SideBarWrapper";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Players = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar />

        <h1 className="text-black mt-20 ml-8">Know all about NBA Players</h1>

        <div className="flex flex-col h-2/3 mt-8 2xl:h-min 2xl:mt-32 2xl:flex-row xl:h-min xl:flew-row xl:mt-32 lg:h-min lg:flex-row lg:mt-32 items-center justify-around w-full">
          <div className="card w-96 shadow-xl image-full before:custom-card">
            <figure>
              <img src="/players.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-center flex flex-col items-center h-full">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/player-search")}
                >
                  Search For Players
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 shadow-xl image-full before:custom-card">
            <figure>
              <img src="/players2.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-center flex flex-col items-center h-full">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/players-in-news")}
                >
                  Players In Headlines
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default Players;
