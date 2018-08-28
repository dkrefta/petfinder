import React from "react";
import { Link } from "@reach/router";

const NavBar = () => (
  <header>
    <Link to="/">Adopt Me!</Link>
    <Link to="/search-params">
      <span arial-label="search" role="img">
        Search For Pets
      </span>
    </Link>
  </header>
);

export default NavBar;
