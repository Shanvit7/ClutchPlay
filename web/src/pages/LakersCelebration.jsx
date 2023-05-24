import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ShowEra from "../components/Lakers@75/ShowEra";
import { lakersTimeLine } from "../utils/lakersTimeline";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LakersCelebration = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="overflow-hidden h-screen w-screen  bg-black">
      <Parallax pages={10}>
      <SideBarWrapper>
        <ParallaxLayer>
         <TopNavbar />
         <div ref={ref} className="flex flex-col justify-center items-center h-full">
         {inView && (
            <motion.div
              className="flex flex-col justify-center items-center h-full"
            >
              <motion.h1 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1,scale: 1.2 }}
               transition={{delay:0.5,duration: 2}}
               className="text-center font-bold text-md lg:text-6xl"
              >
                Witness the Rise
              </motion.h1>
              <motion.h2 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{delay:0.8,duration: 2}}
               className="mt-8 text-center"
              >
                A Journey of Legends Unveiled
              </motion.h2>
            </motion.div>
          )}
          </div>
        </ParallaxLayer>
        </SideBarWrapper>
          <ParallaxLayer offset={1} speed={1} factor={2}>
            <div className="h-full flex justify-center parallax-content" style={{ backgroundImage:`url('/lakers/kbryant.jpg')` }}>
              <h1 
               className="text-center mt-32"
              >
                Let's take a trip down the memory lane
              </h1>
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
