import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import MovieItem from "./MovieItem";
import { fetchMoviesList, fetchMovie } from "../actions/fetchActions";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    display: "flex",
    // alignItems: "center",
    flexWrap: "wrap",
    gap: "3rem",
    padding: "1rem 0",
  },
});

const MoviesList = ({ moviesList, listState, fetchMoviesList, fetchMovie }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchMoviesList();
  }, [fetchMoviesList]);

  if (moviesList.length > 1) {
    return (
      <Box component="div">
        <Typography variant="h6" component="h2">
          {listState}
        </Typography>
        <Box variant="div" className={classes.root}>
          {moviesList.map((movie) => {
            return (
              <MovieItem key={movie.id} data={movie} fetchMovie={fetchMovie} />
            );
          })}
        </Box>
      </Box>
    );
  } else return "loading";
};

const mapStateToProps = (state) => {
  return {
    moviesList: state.moviesList,
    listState: state.listState,
  };
};

export default connect(mapStateToProps, { fetchMoviesList, fetchMovie })(
  MoviesList
);
