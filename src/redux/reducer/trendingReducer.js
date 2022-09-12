import { ActionTypes } from "../constant/action-types";
const intialState = {
  trending: {},
};

export const trendingReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_TRENDING:
      return { ...state, trending: payload };
    default:
      return state;
  }
};