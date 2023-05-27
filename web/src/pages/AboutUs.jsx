import React from "react";
/*  COMPONENTS */
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";

const AboutUs = () => {
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"About Us"} />
        <div className="flex flex-col justify-center items-center px-4">
          <h2 className="text-sm lg:text-2xl font-extrabold text-white text-center mt-14">
          Welcome to Clutch Play! This is a non-commercial personal project
            dedicated to providing you with comprehensive information about NBA
            players, matches, and teams.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            <div className="border shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-medium">Data Accuracy</h3>
              <p className="mt-4 text-white">
                Prioritizing data accuracy and reliability. By utilizing
                trusted APIs like Sports Data IO and Balls Don't Lie, we ensure
                that the information presented on our platform is up-to-date and
                trustworthy.
              </p>
            </div>
            <div className="shadow-lg border rounded-lg p-6">
              <h3 className="text-xl font-medium">User-Friendly Interface</h3>
              <p className="mt-4 text-white">
                Using tailwindcss and daisyUI, this interface is designed to provide a seamless
                browsing experience. Navigate through different sections
                effortlessly, find the information you need, and enjoy a
                visually appealing presentation of NBA data.
              </p>
            </div>
            <div className="shadow-lg border rounded-lg p-6">
              <h3 className="text-xl font-medium">Upcoming Features</h3>
              <p className="mt-4 text-white">
                Stay up-to-date with the latest NBA game schedules, scores, and
                statistics. Get access to game highlights, player performances,
                team standings, and other valuable insights.
              </p>
            </div>
          </div>

          <div className="mt-32 text-gray-300 text-xs lg:text-md text-center">
            <p className="mb-4">
              Please note that Clutch Play is a personal project and not affiliated
              with the NBA or any official basketball organizations.&nbsp;Passionate
              about the NBA and with a aim to share the enthusiasm with fellow fans by providing
              a rich and informative experience.
            </p>
            <p className="mb-4">
              Appreciating your support and hope you enjoy using Clutch Play to stay
              connected with the exciting world of NBA basketball. If you have any
              questions, feedback, or suggestions, please don't hesitate to reach out to me at 
              &nbsp;<a className="link">shanvit7@gmail.com</a>&nbsp;
              Thank you for being a part of Clutch Play!
            </p>
          </div>
        </div>

        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default AboutUs;
