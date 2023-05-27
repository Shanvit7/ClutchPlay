import { handleRequestForSportsDataIo } from "../utils/axiosConfig";

export const getAllNBAArenas = ({}) => {
  return handleRequestForSportsDataIo({
    url: `/Stadiums?key=${import.meta.env.VITE_NBA_BASE_API_KEY}`,
    method: "GET",
  });
};
