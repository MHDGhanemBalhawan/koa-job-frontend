import React from "react";
import Company from "./Company";
import HttpService from "../../services/http-service";
import { CardColumns } from "react-bootstrap";
const http = new HttpService();
export default class Companies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: []
    };
    this.loadData = this.loadData.bind(this);
    this.companiesList = this.companiesList.bind(this);
    this.loadData();
    this.companiesList();
  }
  loadData = () => {
    var self = this;
    http.getCompanies().then(
      data => {
        self.setState({ companies: data });
        console.log(data);
      },
      err => {}
    );
  };
  companiesList = () => {
    let list = this.state.companies.map(company => (
      <CardColumns key={company.id}>
        <Company
          id={company.id}
          name={company.name}
          address={company.address}
          email={company.email}
        />
      </CardColumns>
    ));
    return list;
  };

  render() {
    return (
      <div>
        <div className="Companies">
          <header className="Comapnies-header" />
          {this.companiesList()}
        </div>
      </div>
    );
  }
}
