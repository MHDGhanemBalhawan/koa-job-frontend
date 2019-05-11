import React, { Component } from "react";
import "./App.css";
import Companies from "./Components/Companies/Companies";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header" />

          <Companies />
        </div>
      </div>
    );
  }
}
