import React from "react";
import SettingsMenu from "./SettingsMenu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Companies from "../Companies/Companies";
import Jobs from "../Jobs/Jobs";
import Home from "../Home/Home";
class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Koa Jobs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/Jobs" className="nav-link">
                  Jobs
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li>
                <SettingsMenu />
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/Jobs/" component={Jobs} />
        <Route path="/Companies/" component={Companies} />
      </Router>
    );
  }
}

export default Navigation;
