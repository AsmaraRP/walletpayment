import axios from "../../utils/axios";

export const register = (data) => {
  return {
    type: "REGISTER",
    payload: axios.post("auth/register", data),
  };
};
export const logout = () => {
  return {
    type: "LOGOUT",
    payload: axios.post("auth/logout"),
  };
};
export const createpin = (id, form) => {
  return {
    type: "UPDATEPIN",
    payload: axios.patch(`user/pin/${id}`, form),
  };
};
export const confirmpin = (pin) => {
  return {
    type: "CONFIRMPIN",
    payload: axios.get(`user/pin?pin=${pin}`),
  };
};
