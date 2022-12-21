import movieApi from "../../api/movieApi";
import { ApiKey } from "../../api/key";
import { ActionTypes } from "../constant/action-types";

export const fetchSelectedDetail = (id, cate) => async (dispatch) => {
  const response = await movieApi.get(`${cate}/${id}?${ApiKey.Mykey}`);
  dispatch({ type: ActionTypes.SELECTED_ITEM, payload: response.data });
};
export const removeDetail = () => {
  return {
    type: ActionTypes.REMOVE_ITEM,
  };
};
