import { USER_DETAILS } from "./commonActions";
import axios from "axios";
import { catchHandler, getHeaders } from "../utils";

export const getUserDetails = (dispatch) => {
  console.log(dispatch,'dispatch')
  dispatch(setUserDetails(null));
  axios
    .get(`https://reqres.in/api/user`, {
      headers: getHeaders(`https://reqres.in/api/user`, {}),
    })
    .then((data) => {
      dispatch(setUserDetails(data.data));
    })
    .catch(console.log('catchHandler'));
};

export const setUserDetails = (payload) => ({
  type: USER_DETAILS,
  payload,
});
