import React from "react";
import SideBarWrapper from "../components/SideBarWrapper";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

const SearchPlayers = () => {
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar />
        <div className="w-full">
          <div className="flex justify-center mt-8">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Search for players</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs bg-black "
              />
            </div>
          </div>

          <div className="flex justify-center mt-14">
            <div
              className="card lg:card-side w-1/4
           shadow-xl"
            >
              <figure>
                <img src="/photo5.jpg" alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-black">
                  New album is released!
                </h2>
                <p className="text-black">
                  Click the button to listen on Spotiwhy app.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary bg-white text-black">
                    Listen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default SearchPlayers;
