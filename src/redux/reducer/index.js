import { combineReducers } from "redux";
import {  movieReducer, selectedMovieReducer } from "./movieReducer";
const reducers = combineReducers({
  movieList: movieReducer,
  movie: selectedMovieReducer,
});
export default reducers;
