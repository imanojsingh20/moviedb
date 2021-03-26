import { SELECTMOVIE } from "../utils/types";

const initialState = {};

export const selectedMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTMOVIE:
      return action.payload;

    default:
      return state;
  }
};
