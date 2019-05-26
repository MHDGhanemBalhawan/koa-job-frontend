import React from "react";
import "./jobs.css";
import { ListGroup, Card, Col, Row } from "react-bootstrap";
export default class Job extends React.Component {
  render() {
    return (
      <Card key={this.props.id} variant="info" style={{ width: "18rem" }}>
        <ListGroup>
          <ListGroup.Item variant="secondary">
            job id {this.props.id}
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            job title {this.props.title}
          </ListGroup.Item>
          <ListGroup.Item variant="primary">
            job company id {this.props.companyId}
          </ListGroup.Item>
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
