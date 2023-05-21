import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Footer from "../Common/Footer";
const ShowEra = ({ timeEra }) => {
  return (
    <>
      <ParallaxLayer offset={timeEra.id + 1} speed={1.5}>
        <div className={`h-full flex flex-col bg-black`}>
          <h1 className="mt-32 text-center">{timeEra.title}</h1>
          <h2 className="text-center">{timeEra.period}</h2>
          {
            timeEra.points.map((point,index)=>(
              <div key={index} className="p-2 flex flex-col lg:flex-row">
              <img
                src={point.imgSrc}
                className="max-w-sm rounded-lg shadow-2xl"
                alt="logo"
              />
              <p className="flex flex-col p-8 justify-center items-center text-3xl">
                {point.description}
              </p>
            </div>
            ))
          }
          {timeEra.id === 7
           &&
          <>
          <blockquote className="border-l-4 flex flex-col justify-center items-center border-gray-400 pl-4 italic my-4 mt-14">
              <p className="mb-2">
              I'm here. I'm not going anywhere. No matter what the injury -- unless it's completely debilitating -- I'm going to be the same player I've always been. I'll figure it out. I'll make some tweaks, some changes, but I'm still coming.
              </p>
              <footer className="text-gray-500">- Kobe Bryant</footer>
            </blockquote>
           <Footer />
          </>}
        </div>
      </ParallaxLayer>
    </>
  );
};

export default ShowEra;
