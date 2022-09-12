import { ActionTypes } from "../constant/action-types";
const intialState = {
  items: [],
};

export const searchReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SEARCH_ITEM:
        return { ...state, items: payload };
      case ActionTypes.REMOVE_SEARCH:
        return {};
      default:
        return state;
    }
  };