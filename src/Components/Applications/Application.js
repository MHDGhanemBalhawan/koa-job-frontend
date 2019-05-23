import React from "react";
import { ListGroup, Card, Col } from "react-bootstrap";
export default class Job extends React.Component {
  render() {
    return (
      <Card key={this.props.JobId} style={{ width: "18rem" }}>
        <ListGroup variant="success">
          <ListGroup.Item>job id {this.props.jobId}</ListGroup.Item>
          <ListGroup.Item>CandidateId {this.props.candidateId}</ListGroup.Item>
        </ListGroup>
        <Card.Footer>
          <small className="text-muted">
            Created At {this.props.createdAt}
          </small>
          <br />
          <small className="text-muted">
            Last updated {this.props.updatedAt}
          </small>
        </Card.Footer>
      </Card>
    );
  }
}
