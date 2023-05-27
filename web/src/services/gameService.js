import {
  handleRequestForSportsDataIo,
  handleRequestForBallDontLie,
} from "../utils/axiosConfig";
import { formattedDate } from "../utils/date";

export const areGamesinProgress = () => {
  return handleRequestForSportsDataIo({
    url: `/AreAnyGamesInProgress?key=${import.meta.env.VITE_NBA_BASE_API_KEY}`,
    method: "GET",
  });
};

export const getGamesByDate = (startDate, endDate) => {
  return handleRequestForBallDontLie({
    url: `/games?start_date=${startDate}&end_date=${
      endDate || formattedDate()
    }`,
    method: "GET",
  });
};
