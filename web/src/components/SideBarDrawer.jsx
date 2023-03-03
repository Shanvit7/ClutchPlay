import React from "react";
import logo2 from "/logo2.png";
const SideBarDrawer = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li>
          <div className="flex justify-center hover:bg-transparent active:bg-transparent  avatar">
            <div className="w-32 md:w-36  xl:w-48 rounded-full">
              <img src={logo2} className="flex items-center h-60 w-full" />
            </div>
          </div>
        </li>

        <li>
          <a className="hover:text-white">Games</a>
        </li>

        <li>
          <a className="hover:text-white">Players</a>
        </li>

        <li>
          <a className="hover:text-white">Teams</a>
        </li>

        <li>
          <a className="hover:text-white">Standings</a>
        </li>

        <li>
          <a className="hover:text-white">Leagues</a>
        </li>

        <li>
          <a className="hover:text-white">Seasons</a>
        </li>
        <li>
          <a className="hover:text-white">Statistics</a>
        </li>

        <li>
          <a className="hover:text-white">About Us</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBarDrawer;
