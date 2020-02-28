import { SET_FILTER } from "../actionTypes";
import { SHOW_ALL } from "../../constants";

const initialState = SHOW_ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
