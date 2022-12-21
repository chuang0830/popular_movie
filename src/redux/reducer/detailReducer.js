import { ActionTypes } from "../constant/action-types";

export const selectedItemReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_ITEM:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_ITEM:
      return {};
    default:
      return state;
  }
};
