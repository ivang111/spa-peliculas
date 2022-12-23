import axios from "axios"
import { LOCAL_HOST, API_KEY, GET_ALL_POPULARUTY, GET_ALL_POPULARITY_URL, GET_DETAIL_MOVIE } from "../ActionTypes"

export function getAllPopularity() {
  return async function (dispatch){
    await axios.get(`${LOCAL_HOST}${GET_ALL_POPULARITY_URL}&${API_KEY}`)
    .then((r) => {
       return dispatch({
        type: GET_ALL_POPULARUTY,
        payload: r.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export function getMovieDetail(id) {
  return async function (dispatch){
    await axios.get(`${LOCAL_HOST}/movie/${id}?${API_KEY}`)
    .then((r) => {
      console.log("action", r)
      return dispatch({
        type: GET_DETAIL_MOVIE,
        payload: r.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}