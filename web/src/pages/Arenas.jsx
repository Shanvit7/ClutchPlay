import React, { useState } from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import ArenaCard from "../components/Arenas/ArenaCard";
import { useQuery } from "react-query";
import { getAllNBAArenas } from "../services/arenaService";
import Loader from "../components/Common/Loader";
import SomethingWentWrong from "../components/Error/SomethingWentWrong";

const Arenas = () => {
  const {
    data: allNBAArenas = [],
    isLoading,
    isSuccess,
  } = useQuery("allNBAArenas", getAllNBAArenas);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  // Calculate the index of the first and last items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter arenas based on search term
  const filteredArenas = allNBAArenas.filter((arena) => {
    const values = Object.values(arena).join(" ").toLowerCase();
    return values.includes(searchTerm.toLowerCase());
  });

  const currentArenas = filteredArenas.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Arenas"} />
        <div className="flex justify-center mt-4">
          <div className="relative w-64">
            <input
              type="text"
              className="w-full py-2 pr-10 pl-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search arenas"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a7 7 0 100 14A7 7 0 009 2zM1 9a8 8 0 1114.142 4.899l4.95 4.95a1 1 0 01-1.414 1.414l-4.95-4.95A8 8 0 011 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : isSuccess ? (
          <>
            <div className="flex flex-col justify-center items-center gap-14 mt-14">
              {currentArenas.map((arena, index) => (
                <ArenaCard arenaInfo={arena} key={index} />
              ))}
            </div>
            <div className="btn-group flex justify-center mt-14">
              <button
                className="btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                «
              </button>
              <button className="btn">Page {currentPage}</button>
              <button
                className="btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={indexOfLastItem >= filteredArenas.length}
              >
                »
              </button>
            </div>
          </>
        ) : (
          <SomethingWentWrong />
        )}
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default Arenas;
