import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { fetchMoviesList, setListState } from "../actions/fetchActions";
import { connect } from "react-redux";
import { POPULAR, TDAY, TRATED, TWEEK } from "../utils/types";

const useStyles = makeStyles({
  root: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    padding: "1rem",
  },
});

const FilterNav = ({ fetchMoviesList, setListState }) => {
  const classes = useStyles();

  const onClick = (type) => {
    fetchMoviesList(type);
    setListState(type);
  };

  return (
    <Box component="div" className={classes.root}>
      <Button variant="outlined" onClick={() => onClick(POPULAR)}>
        Popular
      </Button>
      <Button variant="outlined" onClick={() => onClick(TRATED)}>
        Top Rated
      </Button>
      <Button variant="outlined" onClick={() => onClick(TDAY)}>
        Trending Today
      </Button>
      <Button variant="outlined" onClick={() => onClick(TWEEK)}>
        Trending This Week
      </Button>
    </Box>
  );
};

export default connect(null, { fetchMoviesList, setListState })(FilterNav);
