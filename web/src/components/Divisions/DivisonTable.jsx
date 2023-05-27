import React from "react";
import { motion } from "framer-motion";
import DivisionRows from "./DivisonRows";

const DivisionTable = ({ divisionName, teamData }) => {
  const divisionTeams = teamData.filter((team) => {
    return team.Division === divisionName;
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, ease: "anticipate" }}
      className="flex flex-col w-full"
    >
      <h2 className="text-md lg:text-3xl mt-14 ml-4">{divisionName}</h2>
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
    </motion.div>
  );
};

export default DivisionTable;
