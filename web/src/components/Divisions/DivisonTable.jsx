import React from "react";
import { useGetAllTeamsQuery } from "../../redux/services/teamService";
import DivisionRows from "./DivisonRows";

const DivisionTable =({ divisionName })=>{
    const { data: teamsData = [] } = useGetAllTeamsQuery();
    const divisionTeams = teamsData.filter((team)=>{
      return team.Division === divisionName;
    })
    return(
      <div className="flex flex-col w-full">
      <h2 className="text-black text-3xl mt-32 ml-4">{divisionName}</h2>
        <div className="divider before:bg-fuchsia-500 after:bg-yellow-400"></div> 
      <div className="overflow-x-auto w-full">
     <table className="table w-full">
      <tbody>
        {
          divisionTeams.map((team,key)=>(
            <DivisionRows team={team} key={key}/>
          ))
        }
        </tbody>
      </table>
        </div>
        </div>
    )
}

export default DivisionTable;