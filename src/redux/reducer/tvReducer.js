import { ActionTypes } from "../constant/action-types";
const intialState = {
  tvs: [],
};

export const tvReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_TVLIST:
      return { ...state, tvs: payload };
    default:
      return state;
  }
};
