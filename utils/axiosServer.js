import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: process.env.URL_BACKEND,
  // baseURL: "https://fazzpay.herokuapp.com",
});

export default axiosApiIntances;
