import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ShowEra from "../components/Lakers@75/ShowEra";
import { lakersTimeLine } from "../utils/lakersTimeline";

const LakersCelebration = () => {
  return (
    <div className="overflow-hidden h-screen w-screen  bg-black">
      <Parallax pages={10}>
      <SideBarWrapper>
        <ParallaxLayer>
         <TopNavbar />
         <h1 className="text-center font-bold mt-14">Witness the rise</h1>
        </ParallaxLayer>
        </SideBarWrapper>
          <ParallaxLayer offset={1} speed={1} factor={2}>
            <div className="h-full flex justify-center parallax-content" style={{ backgroundImage:`url('/lakers/kbryant.jpg')` }}>
              <h1 className="text-center mt-32">Let's take a trip down the memory lane</h1>
            </div>
          </ParallaxLayer>
        {
          lakersTimeLine.map((timeEra,index)=>(
            <ShowEra timeEra={timeEra} key={index} />
          ))
        }
      </Parallax>
    </div>
  );
};

export default LakersCelebration;
