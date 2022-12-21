import movieApi from "../../api/movieApi";
import { ApiKey } from "../../api/key";
import { ActionTypes } from "../constant/action-types";

export const searchItem = (input, type, i) => async (dispatch) => {
  const response = await movieApi.get(
    `search/${type}?query=${input}&${ApiKey.Mykey}&page=${i}`
  );
  dispatch({
    type: ActionTypes.SEARCH_COUNT,
    payload: response.data.total_results,
  });
  dispatch({ type: ActionTypes.SEARCH_ITEM, payload: response.data.results });
};
export const removeSearch = () => {
  return {
    type: ActionTypes.REMOVE_SEARCH,
  };
};
