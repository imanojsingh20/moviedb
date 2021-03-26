import { MOVIESLIST } from "../utils/types";

export const moviesListReducer = (state = [], action) => {
  switch (action.type) {
    case MOVIESLIST:
      return action.payload;
    default:
      return state;
  }
};
