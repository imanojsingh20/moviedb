import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6">MoviesDB</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
