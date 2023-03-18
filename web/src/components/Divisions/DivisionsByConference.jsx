import React from "react";
import { allWesternDivisions, allEasternDivisions } from "../../utils/teamInfo";
import DivisionTable from "./DivisonTable";

const DivisionsByConference = ({ conferenceId, teamData }) => {
  return (
    <div className="flex flex-col w-full">
      {conferenceId === "eastern"
        ? allEasternDivisions.map((divisionName, key) => (
            <DivisionTable
              divisionName={divisionName}
              key={key}
              teamData={teamData}
            />
          ))
        : allWesternDivisions.map((divisionName, key) => (
            <DivisionTable
              divisionName={divisionName}
              key={key}
              teamData={teamData}
            />
          ))}
    </div>
  );
};

export default DivisionsByConference;
