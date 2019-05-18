import React from "react";
import Job from "./Job";
import HttpService from "../../services/http-service";
import { CardColumns } from "react-bootstrap";
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
      <CardColumns key={job.id}>
        <Job
          id={job.id}
          title={job.title}
          createdAt={job.createdAt}
          updatedAt={job.updatedAt}
          CompanyId={job.CompanyId}
        />
      </CardColumns>
    ));
    return listJobs;
  };

  render() {
    return (
      <div>
        <div className="jobs">
          <header className="Jobs-header" />
          {this.JobsList()}
        </div>
      </div>
    );
  }
}
