import React from "react";
import { useNavigate } from "react-router";
import { getPlayerInHeadline } from "../../services/playerService";
import { useQuery } from "react-query";
import { formattedDate } from "../../utils/date";
const NewsTitleCard = () => {
  const navigate = useNavigate();
  const {
    data: news = [],
    isLoading,
    isSuccess,
  } = useQuery("playersInNews", () => getPlayerInHeadline(formattedDate()));
    return (
        <div className="card  max-w-xs lg:max-w-md shadow-xl border p-6">
          <div className="card-body">
            <h2 className="card-title">Today's Newsmaker</h2>
            <p>{news.length > 0 ? news[0]?.Title : 'Currently, we have nothing, stay tuned for more.'}</p>
            <div className="card-actions justify-end mt-4">
              <button onClick={()=>navigate("/player-in-headline")} className="btn btn-primary bg-black hover:text-black hover:bg-white">
                Know More
              </button>
            </div>
          </div>
        </div>
      );
}

export default NewsTitleCard;
