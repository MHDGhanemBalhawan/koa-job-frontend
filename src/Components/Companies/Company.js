import React from "react";
import { ListGroup, Card, Button } from "react-bootstrap";
export default class Company extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Header>Feature</Card.Header>
        <Card.Body>
          <Card.Title>Company Name: {this.props.name}</Card.Title>
          <Card.Text>Address: {this.props.address}</Card.Text>
          <Card.Link href="#">{this.props.email}</Card.Link>
          <Button variant="primary">Add Company</Button>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>job id {this.props.Jobs}</ListGroup.Item>
          <ListGroup.Item>job name {this.props.jobs}</ListGroup.Item>
        </ListGroup>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    );
  }
}
