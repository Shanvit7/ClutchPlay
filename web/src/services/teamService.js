import handleRequest from "../utils/axiosConfig";

export const getAllTeams=()=>{
    return handleRequest({
        url:`/teams?key=${import.meta.env.VITE_NBA_BASE_API_KEY}`,
        method:'GET'
    });
};