import React from "react";
const DivisionRows =({team = {}})=>{
    return(
      <tr>
      <td style={{backgroundColor:`#${team.SecondaryColor}`}}>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-3">
              <div className="mask w-14 h-14">
                  <img src={team.WikipediaLogoUrl} alt={team.Name} className='w-14 h-14'/>
                </div>
          </div>
          <div>
            <div className="font-bold" style={{color:`#${team.PrimaryColor}`}}>{team.City} {team.Name}</div>
          </div>
        </div>
      </td>
  
      <td style={{backgroundColor:`#${team.SecondaryColor}`,color:`#${team.PrimaryColor}`}}>
        NBA Team ID : {team.NbaDotComTeamID}
      </td>
  
      <th style={{backgroundColor:`#${team.SecondaryColor}`,color:`#${team.PrimaryColor}`}}>
        <button className="btn btn-ghost hover:bg-transparent btn-xs">Know More</button>
      </th>
    </tr>
    );
};

export default DivisionRows;