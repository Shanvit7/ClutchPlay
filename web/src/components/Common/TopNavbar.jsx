import React from "react";
import basketball from "/basketball2.svg";
const TopNavbar = ({ pageTitle }) => {
  return (
    <div className="navbar bg-black">
      <div className="flex-none">
        <label
          htmlFor="my-drawer"
          className="btn border-none drawer-button bg-transparent hover:bg-transparent text-white"
        >
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <h1 className="text-sm xl:text-3xl ml-4 capitalize">
          {pageTitle || "Clutch Play"}
        </h1>
      </div>

      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
