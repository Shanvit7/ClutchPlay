import React,{useState} from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import LakersTimelineStepper from "../components/Stepper/LakersTimelineStepper";
import ShowEra from "../components/Lakers@75/ShowEra";

const LakersCelebration = () => {
  const [currentEraId , setCurrentEraId] = useState(1);
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Lakers@75"} />
        <div className="parallax">
          <div className="parallax-content">
            <h1 className="text-100 text-5xl font-bold">
              Let's take a trip down the memory lane
            </h1>
          </div>
        </div>
        <div className="pt-20 text-center">
          <LakersTimelineStepper setCurrentEraId={setCurrentEraId} currentEraId={currentEraId} />
        </div>
        <div className="divider" />
        <ShowEra selectedEraId={currentEraId} />
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default LakersCelebration;
