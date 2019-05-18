import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Companies from "./Components/Companies/Companies";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header" />
          <Navigation />
          <Companies />
        </div>
      </div>
    );
  }
}
