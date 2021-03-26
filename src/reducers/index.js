import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { selectedMovieReducer } from "./selectedMovieReducer";
import { moviesListReducer } from "../reducers/moviesListReducer";
import { listStateReducer } from "./listStateReducer";

export default combineReducers({
  searchTerm: searchReducer,
  selectedMovie: selectedMovieReducer,
  moviesList: moviesListReducer,
  listState: listStateReducer,
});
