import axios from "axios";
import { USERS_REGISTER } from "../constant.Jsx";
import { BASE_URL } from "../constant.Jsx";
import { USERS_LOGIN } from "../constant.Jsx";

// const Base = ENDPOINT.BASE_URL
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
  "guard_token"
)}`;
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//         localStorage.clear()
//       return (window.location.href = "/auth/login");
//     }
//     return Promise.reject(error);
//   }
// );

export const registerUser = async(payload) => {
    return  axios.post(`${USERS_REGISTER}`, payload).then((response) => response.data)
  } 

  export const loginUser = async(payload) => {
    return  axios.post(`${USERS_LOGIN}`, payload).then((response) => response.data)
  } 