import axios from "axios";

const baseQuery = (()=>{
    return axios.create({
        baseURL:import.meta.env.VITE_NBA_BASE_API_URL
    });
})();

const handleRequest=async(options, store)=>{
    const onSuccess=(response)=>{
        const {data: message} = response;
        return message;
    }

    const onError = (error)=>{
        return Promise.reject(error.response);
    }

    return baseQuery(options).then(onSuccess).catch(onError);
}

export default handleRequest;