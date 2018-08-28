import React, { Component } from "react";

export default class SearchParams extends Component {
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: ""
  };

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>
      </div>
    );
  }
}
