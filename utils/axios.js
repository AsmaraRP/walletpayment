import axios from "axios";
import Cookies from "js-cookie";

const axiosApiIntances = axios.create({
  baseURL: process.env.URL_BACKEND,
  // baseURL: "https://fazzpay.herokuapp.com",
});

// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      Authorization: `Bearer ${Cookies.get("token")}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
