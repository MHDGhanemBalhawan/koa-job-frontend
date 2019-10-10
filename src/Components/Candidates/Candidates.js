import React from "react";
import Candidate from "./Candidate";

import Job from "../Jobs/Job";
import HttpService from "../../services/http-service";
import { Container, Row, Col } from "react-bootstrap";
const http = new HttpService();
export default class Candidates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      candidates: []
    };
    this.loadCandidateData = this.loadCandidateData.bind(this);
    this.CandidatesList = this.CandidatesList.bind(this);
    this.loadCandidateData();
    this.CandidatesList();
  }
  loadCandidateData = () => {
    var self = this;
    http.getCandidates().then(
      candidatesData => {
        self.setState({ candidates: candidatesData });
      },
      err => { }
    );
  };
  CandidatesList = () => {
    let candidateList = this.state.candidates.map(candidate => (
      <Container className="text-center fluid" key={candidate.id}>
        <Row key={candidate.id}>
          <Col key={candidate.id}>
            <Candidate
              id={candidate.id}
              firstName={candidate.firstName}
              lastName={candidate.lastName}
              address={candidate.address}
              email={candidate.email}
            />
          </Col>
        </Row>

        <br />
        <hr />
      </Container>
    ));
    console.log(candidateList);
    return candidateList;
  };

  render() {
    return (
      <div>
        <div className="Candidates">
          <header className="Candidates-header" />
          {this.CandidatesList()}
        </div>
      </div>
    );
  }
}
