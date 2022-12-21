import movieApi from "../../api/movieApi";
import { ApiKey } from "../../api/key";
import { ActionTypes } from "../constant/action-types";

export const fetchTvList = () => async (dispatch) => {
  const response = await movieApi.get(`tv/popular?${ApiKey.Mykey}`);
  dispatch({ type: ActionTypes.FETCH_TVLIST, payload: response.data.results });
};
