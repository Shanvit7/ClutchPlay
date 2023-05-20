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
import { formattedDate } from "../utils/date";
const PlayerInHeadline = () => {
  const {
    data: news = [],
    isLoading,
    isSuccess,
  } = useQuery('playersInNews',()=>getPlayerInHeadline(formattedDate()));
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <SideBarWrapper>
        <TopNavbar pageTitle={"Player In Today's News"} />
        <BackButton />
        {isLoading ? (
          <Loader />
        ) : isSuccess ? (
          news.length === 0 ? (
            <div className="flex flex-col justify-center items-center w-full h-1/2 text-3xl lg:text-5xl xl:text-5xl">
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
