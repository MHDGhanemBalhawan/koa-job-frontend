import React from "react";
import Job from "./Job";
import "./jobs.css";
import HttpService from "../../services/http-service";
import { Container, Row, Col } from "react-bootstrap";
const http = new HttpService();
export default class Jobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Jobs: []
    };
    this.loadJobsData = this.loadJobsData.bind(this);
    this.JobsList = this.JobsList.bind(this);
    this.loadJobsData();
    this.JobsList();
  }
  loadJobsData = () => {
    var self = this;
    http.getJobs().then(
      data => {
        self.setState({ Jobs: data });
        console.log(data);
      },
      err => {}
    );
  };
  JobsList = () => {
    let listJobs = this.state.Jobs.map(job => (
      <Col sm={4} key={job.id} className="job">
        <Job
          id={job.id}
          title={job.title}
          createdAt={job.createdAt}
          updatedAt={job.updatedAt}
          CompanyId={job.CompanyId}
        />
      </Col>
    ));
    return listJobs;
  };

  render() {
    return (
      <div>
        <div className="jobs Container">
          <header className="Jobs-header" />
          <Container>
            <Row>{this.JobsList()}</Row>
          </Container>
        </div>
      </div>
    );
  }
}
