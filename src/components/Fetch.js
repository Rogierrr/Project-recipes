import React, { Component } from "react";

class Fetch extends Component {
  componentDidMount() {
    // fetch("https://api.openbrewerydb.org/breweries")
    fetch("http://www.recipepuppy.com/api/")
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
      });
  }
  render() {
    console.log("fetch render");
    return <div>fetch</div>;
  }
}

export default Fetch;
