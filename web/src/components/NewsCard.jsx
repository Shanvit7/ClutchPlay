import React from "react";
const NewsCard =({newsItem})=>{

    const visitOriginalSourceUrl=()=>{
        window.location.href = newsItem.OriginalSourceUrl;
        return null;
    }

    const visitSource=()=>{
        window.location.href = newsItem.Url;
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center mt-14">
          <div className="hero w-full xl:w-1/2 h-full bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">{newsItem.Title}</h1>
                <p className="py-6">
                  {newsItem.Content}
                  <br />
                  <small className="mt-32 text-blue-50">
                  Source : {newsItem.OriginalSource}  & {newsItem.Source}
                  </small>

                </p>
                <div className="flex justify-around">
                 <button className="btn btn-primary" onClick={visitOriginalSourceUrl}>Visit {newsItem.OriginalSource}</button>
                 <button className="btn btn-primary" onClick={visitSource}>Visit {newsItem.Source}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default NewsCard;