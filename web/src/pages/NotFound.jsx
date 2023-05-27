import React from "react";
/* UTILS */
import { useResolvedPath, useNavigate } from "react-router";

const NotFound = () => {
  const { pathname } = useResolvedPath();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center bg-black h-screen w-screen overflow-hidden">
      <img
        className="w-32 h-32 mb-4 animate-bounce"
        src="basketball2.svg"
        alt="Basketball"
      />
      <h1 className="text-md text-center lg:text-6xl">404 - Page Not Found</h1>
      <p className="mt-14 text-center">
        The requested URL <code>{pathname}</code> was not found.
      </p>
      <button
        className="btn btn-primary border-white hover:bg-white hover:text-black mt-14"
        onClick={() => navigate("/home")}
      >
        Back to Home Page
      </button>
    </div>
  );
};

export default NotFound;
