import { POPULAR, SEARCHMOVIE, TDAY, TRATED, TWEEK } from "../utils/types";

export const listStateReducer = (state = "Popular Movies", action) => {
  switch (action.type) {
    case TDAY:
      return "Movies Trending Today";
    case TWEEK:
      return "Movies Trending This Week";
    case TRATED:
      return "Top Rated Movies";
    case POPULAR:
      return "Popular Movies";
    case SEARCHMOVIE:
      return `Search result for: ${action.payload}`;
    default:
      return state;
  }
};
