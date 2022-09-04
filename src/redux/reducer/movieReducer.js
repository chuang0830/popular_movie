import { ActionTypes } from "../constant/action-types";
const intialState = {
  movies: [],
};

export const movieReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIE:
      return { ...state, movies: payload };
    case ActionTypes.FETCH_MOVIELIST:
      return { ...state, movies: payload };
    default:
      return state;
  }
};

export const selectedMovieReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_MOVIE:
      return { ...state, ...payload };
    case ActionTypes.REMOVED_MOVIE:
      return {};
    default:
      return state;
  }
};