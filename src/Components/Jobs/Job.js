import React from "react";
import { ListGroup, Card } from "react-bootstrap";
export default class Job extends React.Component {
  render() {
    return (
      <Card key={this.props.id} style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>job id {this.props.id}</ListGroup.Item>
          <ListGroup.Item>job title {this.props.title}</ListGroup.Item>
          <ListGroup.Item>job company id {this.props.companyId}</ListGroup.Item>
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