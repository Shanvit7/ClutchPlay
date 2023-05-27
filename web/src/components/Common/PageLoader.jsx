import React, { useEffect, useState } from "react";

const PageLoader = () => {
  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    // Update loading time every 20 milliseconds until it reaches 100%
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      // Calculate the progress percentage
      const progress = Math.min(Math.floor((elapsedTime / 1000) * 100), 100);
      setLoadingTime(progress);

      // Stop the interval when the progress reaches 100%
      if (progress === 100) {
        clearInterval(interval);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex bg-black h-screen w-screen overflow-hidden items-center justify-center">
      <div className="radial-progress border-4" style={{ "--value": `${loadingTime}%`, "--size": "12rem", "--thickness": "2px"  }}>
        {loadingTime}%
      </div>
    </div>
  );
};

export default PageLoader;

