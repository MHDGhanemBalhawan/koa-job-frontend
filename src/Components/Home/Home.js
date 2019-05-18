import React from "react";

import Job from "../Jobs/Job";
import HttpService from "../../services/http-service";
import { Container, Row, Col } from "react-bootstrap";
const http = new HttpService();
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="Home" />
      </div>
    );
  }
}
