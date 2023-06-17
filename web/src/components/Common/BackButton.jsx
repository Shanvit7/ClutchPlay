import React from "react";
/*  UTILS  */
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:ml-4 mt-2">
      <button
        className="bg-black hover:border-white"
        onClick={() => navigate(-1)}
      >
        <img
          src={"/left-arrow-back-svgrepo-com.svg"}
          className="w-6 h-6 lg:w-8 lg:h-8"
          alt="back-button"
        />
      </button>
    </div>
  );
};

export default BackButton;
