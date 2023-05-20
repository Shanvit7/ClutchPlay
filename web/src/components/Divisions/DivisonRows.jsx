import React from "react";
const DivisionRows = ({ team = {} }) => {
  return (
    <tr>
      <td className="bg-black">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-3">
            <div className="mask w-14 h-14">
              <img
                src={team.WikipediaLogoUrl}
                alt={team.Name}
                className="w-14 h-14"
              />
            </div>
          </div>
          <div>
            <div
              className="font-bold"
            >
              {team.City} {team.Name}
            </div>
          </div>
        </div>
      </td>

      <td
      className="bg-black"
      >
        NBA Team ID : {team.NbaDotComTeamID}
      </td>

      <th
      className="bg-black"
      >
        <button className="btn btn-ghost hover:bg-transparent btn-xs">
          Comming Soon
        </button>
      </th>
    </tr>
  );
};

export default DivisionRows;
