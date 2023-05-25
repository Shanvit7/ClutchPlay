import { handleRequestForSportsDataIo, handleRequestForUnsplash } from "../utils/axiosConfig";

export const getPhotoOfRequestedNBAArena=({stadium})=>{
    return handleRequestForUnsplash({
        url:`search/photos?query=nba ${stadium} stadium&per_page=1`,
        method:'GET'
    });
};

export const getAllNBAArenas = ({})=>{
    return handleRequestForSportsDataIo({
        url:`/Stadiums?key=${import.meta.env.VITE_NBA_BASE_API_KEY}`,
        method:'GET'
    })
}