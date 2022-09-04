import movieApi from "../../api/movieApi";
import { ApiKey } from "../../api/key";
import { ActionTypes } from "../constant/action-types";

export const setMovie = (movies) => {
  return {
    type: ActionTypes.SET_MOVIE,
    payload: movies,
  };
};

export const fetchMovieList = () => async (dispatch) => {
  const response = await movieApi.get(`/popular?${ApiKey.Mykey}`);
  dispatch({ type: ActionTypes.FETCH_MOVIELIST, payload: response.data.results });
};

export const fetchMovie = (id) => async (dispatch) => {
  const response = await movieApi.get(`/${id}?${ApiKey.Mykey}`);
  dispatch({ type: ActionTypes.SELECTED_MOVIE, payload: response.data });
};

export const removeSelectedMovie = () => {
  return {
    type: ActionTypes.REMOVED_MOVIE,
  };
};
