import axios from "axios";

const baseQueryForSportsDataIO = (() => {
  return axios.create({
    baseURL: import.meta.env.VITE_NBA_BASE_API_URL,
  });
})();

const baseQueryForBallsDontLie = (() => {
  return axios.create({
    baseURL: import.meta.env.VITE_NBA_BDL_API_URL,
  });
})();

export const handleRequestForSportsDataIo = async (options, store) => {
  const onSuccess = (response) => {
    const { data: message } = response;
    return message;
  };

  const onError = (error) => {
    return Promise.reject(error.response);
  };

  return baseQueryForSportsDataIO(options).then(onSuccess).catch(onError);
};

export const handleRequestForBallDontLie = async (options, store) => {
  const onSuccess = (response) => {
    const { data: message } = response;
    return message;
  };

  const onError = (error) => {
    return Promise.reject(error.response);
  };

  return baseQueryForBallsDontLie(options).then(onSuccess).catch(onError);
};
