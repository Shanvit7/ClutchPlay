import React from "react";
import SideBarWrapper from "../components/Common/SideBarWrapper";
import TopNavbar from "../components/Common/TopNavbar";
import Footer from "../components/Common/Footer";
import NewsCard from "../components/Players/NewsCard";
import Loader from "../components/Common/Loader";
import SomethingWentWrong from "../components/Error/SomethingWentWrong";
import BackButton from "../components/Common/BackButton";
import { getPlayerInHeadline } from "../services/playerService";
import { useQuery } from "react-query";
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
  } = useQuery('playersInNews',()=>getPlayerInHeadline(formattedDate));
  return (
    <div className="w-screen h-screen bg-gray-50 overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Player In Today's News"} />
        <BackButton />
        {isLoading ? (
          <Loader />
        ) : isSuccess ? (
          news.length === 0 ? (
            <div className="flex flex-col justify-center items-center text-black w-full h-1/2 text-3xl lg:text-5xl xl:text-5xl">
              <div>Nothing exciting happened recently 🙁.</div>
              <div className="mt-8">
                We will be back soon with a headline ⛹️‍♂️.
              </div>
            </div>
          ) : (
            news.map((item, key) => <NewsCard newsItem={item} key={key} />)
          )
        ) : (
          <SomethingWentWrong />
        )}
        <Footer />
      </SideBarWrapper>
    </div>
  );
};

export default PlayerInHeadline;
