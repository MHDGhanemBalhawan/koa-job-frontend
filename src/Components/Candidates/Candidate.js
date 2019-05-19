import React from "react";
import { Alert } from "react-bootstrap";
export default class Candidate extends React.Component {
  render() {
    return (
      <Alert key={this.props.id} variant="info">
        <Alert.Heading>
          Candidate First Name: {this.props.firstName}{" "}
        </Alert.Heading>
        <Alert.Heading>
          Candidate Last Name: {this.props.lastName}
        </Alert.Heading>
        <p>Address: {this.props.address}</p>
        <hr />
        <Alert.Link href="#">{this.props.email}</Alert.Link>
        <p className="mb-0">Candidate details</p>
      </Alert>
    );
  }
}
