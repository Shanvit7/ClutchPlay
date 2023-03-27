import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
const CommingSoon = () => {
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar />
        <h1 className="flex flex-col text-black justify-center items-center mt-32 h-2/5 w-full">
          Comming Soon.
          <progress className="progress progress-accent w-56 mt-8"></progress>
        </h1>
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default CommingSoon;
