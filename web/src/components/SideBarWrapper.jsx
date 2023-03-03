import React from "react";
const SideBarWrapper = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-x-hidden">
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <a className="hover:text-white">
              Games
            </a>
          </li>
          <li>
            <a className="hover:text-white">
              Teams
            </a>
          </li>
          <li>
            <a className="hover:text-white">
              Players
            </a>
          </li>
          <li>
            <a className="hover:text-white">
              Seasons
            </a>
          </li>
          <li>
            <a className="hover:text-white">
              Statistics
            </a>
          </li>
          <li>
            <a className="hover:text-white">
              Lakers 75th Anniversary
            </a>
          </li>
          <li>
            <a className="hover:text-white">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarWrapper;
