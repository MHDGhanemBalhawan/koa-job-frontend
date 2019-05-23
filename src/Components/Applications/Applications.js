import React from "react";
import Application from "./Application";

// import Job from "../Jobs/Job";
import HttpService from "../../services/http-service";
import { Container, Row, Col } from "react-bootstrap";
const http = new HttpService();
export default class Applications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      applications: []
    };
    this.loadApplicationsData = this.loadApplicationsData.bind(this);
    this.applicationsList = this.applicationsList.bind(this);
    this.loadApplicationsData();
    this.applicationsList();
  }
  loadApplicationsData = () => {
    var self = this;
    http.getApplications().then(
      applicationsData => {
        self.setState({ applications: applicationsData });
      },
      err => {}
    );
  };
  // applicationsList = () => {
  //   let listApplications = this.state.applications.map(application => (
  //     <Container className="text-center fluid" key={application.JobId}>
  //       <Row>
  //         <Col>
  //           <Application id={application.JobId} />
  //         </Col>
  //       </Row>

  //       <br />
  //       <hr />
  //     </Container>
  //   ));

  //   return listApplications;
  // };
  applicationsList = () => {
    let listApplications = this.state.applications.map(application => (
      <Container className="text-center fluid" key={application.JobId}>
        <Row>
          <Application
            jobId={application.JobId}
            candidateId={application.CandidateId}
            createdAt={application.createdAt}
            updatedAt={application.updatedAt}
          />
        </Row>
        <Col sm={4} key={application.CandidateId} />
        <br />
        <hr />
      </Container>
    ));
    return listApplications;
  };
  render() {
    return (
      <div>
        <div className="Applications">
          <header className="Applications-header" />
          {this.applicationsList()}
        </div>
      </div>
    );
  }
}
