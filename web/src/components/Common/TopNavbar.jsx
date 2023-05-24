import React from "react";
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
    </div>
  );
};

export default TopNavbar;
