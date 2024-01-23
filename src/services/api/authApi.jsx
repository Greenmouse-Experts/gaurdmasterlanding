import axios from "axios";
import { USERS_REGISTER } from "../constant.Jsx";
import { BASE_URL } from "../constant.Jsx";
import { USERS_LOGIN } from "../constant.Jsx";
import { FORGET_PASSWORD } from "../constant.Jsx";
import { RESET_PASSWORD } from "../constant.Jsx";

// const Base = ENDPOINT.BASE_URL
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
  "guard_token"
)}`;

export const registerUser = async(payload) => {
    return  axios.post(`${USERS_REGISTER}`, payload).then((response) => response.data)
  } 

  export const loginUser = async(payload) => {
    return  axios.post(`${USERS_LOGIN}`, payload).then((response) => response.data)
  } 

  export const forgetPassword = async(payload) => {
    return  axios.post(`${FORGET_PASSWORD}`, payload).then((response) => response.data)
  } 

  export const resetPassword = async(payload, token) => {
    return  axios.post(`${RESET_PASSWORD}`,payload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => response.data)
  } 