import { ActionTypes } from "../constant/action-types";
const intialState = {
  items: [],
  count:0,
};

export const searchReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SEARCH_ITEM:
        return { ...state, items: payload };
      case ActionTypes.SEARCH_COUNT:
        return { ...state, count:payload };
      case ActionTypes.REMOVE_SEARCH:
        return {};
      default:
        return state;
    }
  };
