import axios from "../../utils/axios";

export const getUserById = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/profile/${id}`),
  };
};
export const updateUser = (id, form) => {
  return {
    type: "UPDATE_USER",
    payload: axios.patch(`user/profile/${id}`, form),
  };
};
export const updatePasswordUser = (id, form) => {
  return {
    type: "UPDATE_PASSWORD_USER",
    payload: axios.patch(`user/password/${id}`, form),
  };
};
export const updatePinUser = (id, form) => {
  return {
    type: "UPDATE_PIN_USER",
    payload: axios.patch(`user/pin/${id}`, form),
  };
};
export const updateImage = (id, form) => {
  return {
    type: "UPDATE_IMAGE",
    payload: axios.patch(`user/image/${id}`, form),
  };
};
export const deleteImage = (id) => {
  return {
    type: "DELETE_IMAGE",
    payload: axios.delete(`user/image/${id}`),
  };
};
