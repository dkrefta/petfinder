import React from "react";
import { render } from "react-dom";
import Results from "./Results";
import Details from "./Details";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import { Provider } from "react-redux";
import NavBar from "./NavBar";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
