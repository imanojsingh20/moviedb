import moviedb from "../api/moviedb";
import {
  SELECTMOVIE,
  MOVIESLIST,
  TDAY,
  TWEEK,
  TRATED,
  SEARCHMOVIE,
} from "../utils/types";

export const fetchMoviesList = (type, data) => async (dispatch) => {
  switch (type) {
    case TDAY:
      moviedb
        .get(`/trending/movie/day`)
        .then((res) => {
          dispatch({
            type: MOVIESLIST,
            payload: res.data.results,
          });
        })
        .catch((err) => console.log(err));
      break;
    case TWEEK:
      moviedb
        .get(`/trending/movie/week`)
        .then((res) => {
          dispatch({
            type: MOVIESLIST,
            payload: res.data.results,
          });
        })
        .catch((err) => console.log(err));
      break;
    case TRATED:
      moviedb
        .get(`/movie/top_rated`)
        .then((res) => {
          dispatch({
            type: MOVIESLIST,
            payload: res.data.results,
          });
        })
        .catch((err) => console.log(err));
      break;
    default:
      moviedb
        .get("/movie/popular")
        .then((res) => {
          dispatch({
            type: MOVIESLIST,
            payload: res.data.results,
          });
        })
        .catch((err) => console.log(err));
  }
};

export const fetchMovie = (id) => async (dispatch) => {
  if (id) {
    moviedb.get(`/movie/${id}`).then((data) => {
      dispatch({
        type: SELECTMOVIE,
        payload: data.data,
      });
    });
  } else {
    moviedb
      .get("/trending/movie/day")
      .then((res) => {
        moviedb.get(`/movie/${res.data.results[0].id}`).then((data) => {
          dispatch({
            type: SELECTMOVIE,
            payload: data.data,
          });
        });
      })
      .catch((err) => console.log(err));
  }
};

export const searchMovies = (term) => (dispatch) => {
  if (term) {
    moviedb.get(`/search/movie?query=${term}`).then((res) => {
      dispatch({
        type: MOVIESLIST,
        payload: res.data.results,
      });
      dispatch(setListState(SEARCHMOVIE, term));
    });
  }
};

export const setListState = (listState, term) => {
  return {
    type: listState,
    payload: term,
  };
};
