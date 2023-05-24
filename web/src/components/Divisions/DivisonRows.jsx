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
                className="w-14 h-14 bg-white"
              />
            </div>
          </div>
          <div>
            <div
              className="font-bold text-xs lg:text-2xl"
            >
              {team.City} {team.Name}
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default DivisionRows;
