import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Companies from "./Components/Companies/Companies";
import Jobs from "./Components/Jobs/Jobs";
import Home from "./Components/Home/Home";
import Candidates from "./Components/Candidates/Candidates";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header" />

          <Router>
            <Navigation />
            <Companies />
            <Route exact path="/" component={Home} />
            <Route path="/Jobs" component={Jobs} />
            <Route path="/Companies" component={Companies} />
            <Route path="/Candidates" component={Candidates} />
          </Router>
        </div>
      </div>
    );
  }
}
