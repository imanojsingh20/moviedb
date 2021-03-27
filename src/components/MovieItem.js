import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: 185,
    height: 250,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%",
    position: "relative",
    "& .MuiCardContent-root": {
      position: "absolute",
      zIndex: 10,
      width: 35,
      height: 35,
      background: "#F3B421",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      padding: "0.5rem",
      color: "#fafafa",
      right: "0.5rem",
      bottom: "0.5rem",
      fontWeight: "900",
    },
  },
  bgImg: {
    position: "absolute",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: 185,
  },
  title: {
    textAlign: "center",
    paddingTop: "0.5rem",
  },
});

const MovieItem = ({ data, fetchMovie, history }) => {
  const { poster_path, vote_average, title } = data;
  const classes = useStyles();
  return (
    <Box component="div" className={classes.wrapper}>
      <Card className={classes.root}>
        <CardActionArea
          className={classes.card}
          onClick={() => {
            fetchMovie(data.id);
          }}
          component="a"
          href="#details"
        >
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={
              poster_path
                ? `https://image.tmdb.org/t/p/w342${poster_path}`
                : `/poster_placeholder.jpg`
            }
            title="Contemplative Reptile"
            className={classes.bgImg}
          />
          <CardContent>{vote_average}</CardContent>
        </CardActionArea>
      </Card>
      <Typography variant="body2" className={classes.title}>
        {title}
      </Typography>
    </Box>
  );
};

export default MovieItem;
