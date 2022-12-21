import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { tvReducer } from "./tvReducer";
import { selectedItemReducer } from "./detailReducer";
import { trendingReducer } from "./trendingReducer";
import { searchReducer } from "./searchReducer";
const reducers = combineReducers({
  movieList: movieReducer,
  tvList: tvReducer,
  detail: selectedItemReducer,
  hero: trendingReducer,
  searchItem: searchReducer,
});
export default reducers;
