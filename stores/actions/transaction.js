import axios from "../../utils/axios";

export const transfer = (data) => {
  return {
    type: "POST_TRANSFER",
    payload: axios.post(`transaction/transfer`, data),
  };
};
