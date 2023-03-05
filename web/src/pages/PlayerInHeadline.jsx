import React from "react";
import SideBarWrapper from "../components/SideBarWrapper";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";
import { useGetPlayerInHeadlineQuery } from "../redux/services/playerService";
import SomethingWentWrong from "../components/SomethingWentWrong";
const PlayerInHeadline = () => {
  // using plain JS to get todays date in API reqiured format;
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const today = new Date();
  const year = today.getFullYear();
  const month = months[today.getMonth()];
  const day = ("0" + today.getDate()).slice(-2);
  const formattedDate = `${year}-${month}-${day}`;

  const {
    data: news = [],
    isLoading,
    isSuccess,
  } = useGetPlayerInHeadlineQuery(formattedDate);
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar />
        {isLoading ? (
          <Loader />
        ) : isSuccess ? (
          news.map((item, key) => <NewsCard newsItem={item} key={key} />)
        ) : (
          <SomethingWentWrong />
        )}
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default PlayerInHeadline;
