import handleRequest from "../utils/axiosConfig";

export const getAllPlayers=()=>{
    return handleRequest({
        url:`/Players?key=${import.meta.env.VITE_NBA_BASE_API_KEY}`,
        method:'GET'
    });
};

export const getPlayerInHeadline=(date)=>{
    return handleRequest({
        url:`/NewsByDate/${date}?key=${import.meta.env.VITE_NBA_BASE_API_KEY}`,
        method:'GET'
    });
};