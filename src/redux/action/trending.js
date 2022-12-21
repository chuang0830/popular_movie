import movieApi from "../../api/movieApi";
import { ApiKey } from "../../api/key";
import { ActionTypes } from "../constant/action-types";

export const fetchtrending = () => async (dispatch) => {
  const response = await movieApi.get(
    `trending/all/day?media_type=all&time_window=day&${ApiKey.Mykey}`
  );
  dispatch({
    type: ActionTypes.FETCH_TRENDING,
    payload: response.data.results[0],
  });
};
