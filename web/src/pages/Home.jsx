import React from "react";
import SideBarWarpper from "../components/SideBarWrapper";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-x-hidden">
      <SideBarWarpper>
        <div className="hero min-h-screen bg-gray-50">
          <div className="hero-content flex-col lg:flex-row bg-black">
            <img src="/lakers.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">
                Celebrating 75 Years of Lakers
              </h1>
              <p className="flex items-center py-6">
                Know all your NBA games, players, stats, standings and much
                more.
              </p>
              <button className="btn btn-primary border-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </SideBarWarpper>
    </div>
  );
};

export default Home;
