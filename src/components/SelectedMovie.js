import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { fetchMovie } from "../actions/fetchActions";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    padding: "2rem 0",
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingStar: {
    color: "#F3B421",
  },
  genres: {
    margin: "1rem 0",
    "& .genresList": {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
    },
  },
  poster: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    objectFit: "cover",
    "& img": {
      width: "90%",
    },
  },
});

const SelectedMovie = ({ movie, fetchMovie }) => {
  const classes = useStyles();

  const {
    poster_path,
    title,
    original_language,
    overview,
    genres,
    production_companies,
    spoken_languages,
    vote_average,
    release_date,
  } = movie;

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  if (Object.keys(movie).length > 1) {
    return (
      <div className={classes.root} id="details">
        <Grid container spacing={3}>
          <Grid item md={3} className={classes.poster}>
            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="" />
          </Grid>
          <Grid item md={9}>
            <Box component="div" className={classes.title}>
              <Typography variant="h6" component="h2">
                {title} ({original_language})
              </Typography>
              <div className={classes.rating}>
                <StarBorderOutlinedIcon className={classes.ratingStar} />{" "}
                {vote_average}
              </div>
            </Box>
            <Typography variant="body1">{overview}</Typography>
            <div className={classes.genres}>
              <Typography variant="h6" component="h2">
                Genres
              </Typography>
              <div className="genresList">
                {genres.map((_) => {
                  return (
                    <Typography key={_.id} variant="body1">
                      {_.name}
                    </Typography>
                  );
                })}
              </div>
            </div>
            <div className={classes.genres}>
              <Typography variant="h6" component="h2">
                Production Companies
              </Typography>
              <div className="genresList">
                {production_companies.map((_) => {
                  return (
                    <Typography key={_.id} variant="body1">
                      {_.name}
                    </Typography>
                  );
                })}
              </div>
            </div>
            <div className={classes.genres}>
              <Typography variant="h6" component="h2">
                Languages
              </Typography>
              <div className="genresList">
                {spoken_languages.map((_) => {
                  return (
                    <Typography key={_.name} variant="body1">
                      {_.name}
                    </Typography>
                  );
                })}
              </div>
            </div>
            <div className={classes.genres}>
              <Typography variant="h6" component="h2">
                Release Date
              </Typography>
              <div className="genresList">
                <Typography variant="body1">{release_date}</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { movie: state.selectedMovie };
};

export default connect(mapStateToProps, { fetchMovie })(SelectedMovie);
