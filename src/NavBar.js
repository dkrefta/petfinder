import React from "react";
import { Link } from "@reach/router";
import styled from "react-emotion";

const Container = styled("header")`
  background-color: #333;
  position: sticky;
  top: 0;
  z-index: 10;
`

const NavBar = () => (
  <Container>
    <Link to="/">Adopt Me!</Link>
    <Link to="/search-params">
      <span arial-label="search" role="img">
        Search For Pets
      </span>
    </Link>
  </Container>
);

export default NavBar;
