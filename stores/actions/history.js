import axios from "../../utils/axios";

export const getHistory = (page, limit, filter) => {
  return {
    type: "GET_HISTORY",
    payload: axios.get(`transaction/history?page=${page}&limit=${limit}&filter=${filter}`),
  };
};
