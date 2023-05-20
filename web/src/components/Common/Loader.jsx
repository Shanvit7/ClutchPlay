import React from "react";
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-14 h-1/2">
      Please wait, while we load the content 🚀
      <small className="mt-4 text-center">
        “Never say never, because limits, like fears, are often just an
        illusion.” ~ Michael Jordan.
      </small>
      <progress className="progress progress-info w-56 mt-8" />
    </div>
  );
};

export default Loader;
