import movieApi from "../../api/movieApi";
import { ApiKey } from "../../api/key";
import { ActionTypes } from "../constant/action-types";

export const fetchMovieList = () => async (dispatch) => {
  const response = await movieApi.get(`movie/popular?${ApiKey.Mykey}`);
  dispatch({
    type: ActionTypes.FETCH_MOVIELIST,
    payload: response.data.results,
  });
};
