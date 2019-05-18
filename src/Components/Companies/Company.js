import React from "react";
import { ListGroup, Card, Button, Alert } from "react-bootstrap";
export default class Company extends React.Component {
  render() {
    return (
      <Alert key={this.props.id} variant="success">
        <Alert.Heading>Company Name: {this.props.name}</Alert.Heading>
        <p>Address: {this.props.address}</p>
        <hr />
        <Alert.Link href="#">{this.props.email}</Alert.Link>
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
        <Button variant="primary">Add Job</Button>
      </Alert>
    );
  }
}
