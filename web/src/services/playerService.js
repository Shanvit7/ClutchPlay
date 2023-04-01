import { handleRequestForSportsDataIo } from "../utils/axiosConfig";

export const getAllPlayers=()=>{
    return handleRequestForSportsDataIo({
        url:`/Players?key=${import.meta.env.VITE_NBA_BASE_API_KEY}`,
        method:'GET'
    });
};

export const getPlayerInHeadline=(date)=>{
    return handleRequestForSportsDataIo({
        url:`/NewsByDate/${date}?key=${import.meta.env.VITE_NBA_BASE_API_KEY}`,
        method:'GET'
    });
};