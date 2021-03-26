import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { useEffect } from "react";
import Header from "./Header";
import theme from "../utils/theme";
import SelectedMovie from "./SelectedMovie";
import SearchBox from "./SearchBox";
import MoviesList from "./MoviesList";
import FilterNav from "./FilterNav";

const App = () => {
  useEffect(() => {}, []);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="lg">
        <SelectedMovie />
        <SearchBox />
        <FilterNav />
        <MoviesList />
      </Container>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
