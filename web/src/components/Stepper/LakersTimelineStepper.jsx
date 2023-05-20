import React from "react";
import { lakersTimeLine } from "../../utils/lakersTimeline";
const LakersTimelineStepper = ({ setCurrentEraId, currentEraId }) => {
  return (
    <ul className="steps steps-vertical lg:steps-horizontal">
      {lakersTimeLine.map((timeEra = {}, index) => (
        <li className={`step text-black cursor-pointer ${(timeEra.id <= currentEraId) && 'step-primary'}`} key={index} onClick={()=>setCurrentEraId(timeEra.id)}>
          {timeEra.title}
        </li>
      ))}
    </ul>
  );
};
export default LakersTimelineStepper;
