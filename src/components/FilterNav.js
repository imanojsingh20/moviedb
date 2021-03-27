import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { fetchMoviesList, setListState } from "../actions/fetchActions";
import { connect } from "react-redux";
import { POPULAR, TDAY, TRATED, TWEEK } from "../utils/types";

const useStyles = makeStyles({
  root: {
    // display: "flex",
    // gap: "2rem",
    // alignItems: "center",
    padding: "1rem 0",
  },
});

const FilterNav = ({ fetchMoviesList, setListState }) => {
  const classes = useStyles();

  const onClick = (type) => {
    fetchMoviesList(type);
    setListState(type);
  };

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={6} md>
        <Button variant="outlined" onClick={() => onClick(POPULAR)}>
          Popular
        </Button>
      </Grid>
      <Grid item xs={6} md>
        <Button variant="outlined" onClick={() => onClick(TRATED)}>
          Top Rated
        </Button>
      </Grid>
      <Grid item xs={6} md>
        <Button variant="outlined" onClick={() => onClick(TDAY)}>
          Trending Today
        </Button>
      </Grid>
      <Grid item xs={6} md>
        <Button variant="outlined" onClick={() => onClick(TWEEK)}>
          Trending Week
        </Button>
      </Grid>
    </Grid>
  );
};

export default connect(null, { fetchMoviesList, setListState })(FilterNav);
