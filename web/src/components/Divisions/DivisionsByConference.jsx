import React from "react";
import { allWesternDivisions,allEasternDivisions } from "../../utils/teamInfo";
import DivisionTable from "./DivisonTable";

const DivisionsByConference=({ conferenceId })=>{
    return(
      <div className="flex flex-col w-full">
        {
          conferenceId === 'eastern'
          ?
          allEasternDivisions.map((divisionName,key)=>(
            <DivisionTable divisionName={divisionName} key={key} />
          ))
          :
          allWesternDivisions.map((divisionName,key)=>(
           <DivisionTable divisionName={divisionName} key={key} />
          ))
        }
      </div>
    )
}

export default DivisionsByConference;