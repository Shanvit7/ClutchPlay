import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Footer from "../Common/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ShowEra = ({ timeEra }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [imgRef, inViewImg] = useInView({
    triggerOnce: true,
  });
  const [quoteRef, inViewQuote] = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <ParallaxLayer offset={timeEra.id + 1} speed={1.5}>
        <div className={`h-full flex flex-col bg-black`}>
          <div ref={ref} className="py-32">
            {inView && (
              <>
                <motion.h1
                  className="text-center font-bold text-sm lg:text-5xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: 1.4 }}
                  transition={{ delay: 0.2, duration: 1.5 }}
                >
                  {timeEra.title}
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1.5 }}
                  className="text-center mt-8 text-xs lg:text-xl"
                >
                  {timeEra.period}
                </motion.h2>
              </>
            )}
          </div>
          {timeEra.points.map((point, index) => (
            <div
              ref={imgRef}
              key={index}
              className="p-2 flex mt-4 flex-col lg:flex-row"
            >
              {inViewImg && (
                <>
                  <motion.img
                    src={point.imgSrc}
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt="logo"
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                  <motion.p
                    className="flex flex-col p-2 justify-center items-center text-xs lg:text-2xl lg:p-8"
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 2 }}
                  >
                    {point.description}
                  </motion.p>
                </>
              )}
            </div>
          ))}
          {timeEra.id === 7 && (
            <>
              <blockquote
                ref={quoteRef}
                className="border-l-4 flex flex-col justify-center items-center border-gray-400 pl-4 italic my-4 mt-32"
              >
                {inViewQuote && (
                  <motion.section
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{ delay: 0.2, duration: 2 }}
                  >
                    <p className="mb-2">
                      I'm here. I'm not going anywhere. No matter what the
                      injury -- unless it's completely debilitating -- I'm going
                      to be the same player I've always been. I'll figure it
                      out. I'll make some tweaks, some changes, but I'm still
                      coming.
                    </p>
                    <footer className="text-gray-500">- Kobe Bryant</footer>
                  </motion.section>
                )}
              </blockquote>
              <Footer />
            </>
          )}
        </div>
      </ParallaxLayer>
    </>
  );
};

export default ShowEra;
