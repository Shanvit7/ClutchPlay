import React from "react";
import { useNavigate } from "react-router-dom";
const SideBarWrapper = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-x-hidden">{children}</div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li onClick={() => navigate("/home")}>
            <a className="hover:text-white">Home</a>
          </li>
          <li onClick={() => navigate("/games")}>
            <a className="hover:text-white">Games</a>
          </li>
          <li onClick={() => navigate("/teams")}>
            <a className="hover:text-white">Teams</a>
          </li>
          <li onClick={() => navigate("/players")}>
            <a className="hover:text-white">Players</a>
          </li>
          <li onClick={() => navigate("/seasons")}>
            <a className="hover:text-white">Seasons</a>
          </li>
          <li onClick={() => navigate("/statistics")}>
            <a className="hover:text-white">Statistics</a>
          </li>
          <li onClick={() => navigate("/lakers-75")}>
            <a className="hover:text-white">Lakers 75th Anniversary</a>
          </li>
          <li onClick={() => navigate("/about-us")}>
            <a className="hover:text-white">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarWrapper;
