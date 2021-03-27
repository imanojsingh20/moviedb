import { makeStyles, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchMovies } from "../actions/fetchActions";
import { onTermChange } from "../actions/searchBoxActions";

const useStyles = makeStyles({
  input: {
    "& .MuiInputBase-root": {
      borderBottom: "1px solid rgba(255,255,255,0.6)",
    },
  },
});

const SearchBox = ({ searchTerm, onTermChange, searchMovies }) => {
  const classes = useStyles();

  useEffect(() => {
    const TID = setTimeout(() => {
      searchMovies(searchTerm);
    }, 500);

    return () => clearTimeout(TID);
  }, [searchTerm, searchMovies]);

  return (
    <div>
      <TextField
        id="standard-basic"
        fullWidth
        className={classes.input}
        placeholder="Search"
        onChange={onTermChange}
        value={searchTerm}
        onKeyDown={(e) => (e.key === "Enter" ? searchMovies(searchTerm) : null)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { ...state };
};

export default connect(mapStateToProps, { onTermChange, searchMovies })(
  SearchBox
);
