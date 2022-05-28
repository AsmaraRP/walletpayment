import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://fazzpay.herokuapp.com",
  // baseURL: process.env.REACT_APP_SOURCE,
});

export default axiosApiIntances;
