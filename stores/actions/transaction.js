import axios from "../../utils/axios";

export const transfer = (data) => {
  return {
    type: "POST_TRANSFER",
    payload: axios.post(`transaction/transfer`, data),
  };
};
export const topup = (data) => {
  return {
    type: "POST_TOPUP",
    payload: axios.post(`transaction/top-up`, data),
  };
};
export const dashboard = (id) => {
  return {
    type: "GET_DASHBOARD",
    payload: axios.get(`dashboard/${id}`),
  };
};
