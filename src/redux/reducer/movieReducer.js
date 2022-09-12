import { ActionTypes } from "../constant/action-types";
const intialState = {
  movies: [],
};

export const movieReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_MOVIELIST:
      return { ...state, movies: payload };
    default:
      return state;
  }
};