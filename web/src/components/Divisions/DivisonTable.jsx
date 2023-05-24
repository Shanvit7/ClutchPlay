import React from "react";
import DivisionRows from "./DivisonRows";

const DivisionTable = ({ divisionName, teamData }) => {
  const divisionTeams = teamData.filter((team) => {
    return team.Division === divisionName;
  });
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-md lg:text-3xl mt-32 ml-4">{divisionName}</h2>
      <div className="divider" />
      <div className="overflow-x-hidden w-full">
        <table className="table w-full">
          <tbody>
            {divisionTeams.map((team, key) => (
              <DivisionRows team={team} key={key} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DivisionTable;
