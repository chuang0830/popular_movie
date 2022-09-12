import movieApi from "../../api/movieApi";
import { ApiKey } from "../../api/key";
import { ActionTypes } from "../constant/action-types";

export const searchItem = (input) => async (dispatch) => {
    const response = await movieApi.get(`search/multi?query=${input}&${ApiKey.Mykey}`);
    dispatch({ type: ActionTypes.SEARCH_ITEM, payload: response.data.results });
  };
  export const removeSearch = () => {
    return {
      type: ActionTypes.REMOVE_SEARCH,
    };
  };