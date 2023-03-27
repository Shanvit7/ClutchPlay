import React from "react";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="ml-4 mt-2 hidden xl:block">
      <button className="bg-transparent" onClick={() => navigate(-1)}>
        <img src={"/back-arrow-svgrepo-com.svg"} className="w-8 h-8" />
      </button>
    </div>
  );
};

export default BackButton;
