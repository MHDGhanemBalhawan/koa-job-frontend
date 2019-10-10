import React from "react";
import Company from "./Company";
import "./companies.css";
import Job from "../Jobs/Job";
import HttpService from "../../services/http-service";
import { Container, Row, Col } from "react-bootstrap";
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
            },
            err => { }
        );
    };
    companiesList = () => {
        let list = this.state.companies.map(company => (
            <Container key={company.id}>
                <Row>
                    <Col>
                        <Company
                            id={company.id}
                            name={company.name}
                            address={company.address}
                            email={company.email}
                        />
                    </Col>
                </Row>
                <div className="container-fluid">
                    <Row className="justify-content-md-center">
                        {company.Jobs.map(job => (
                            <Job
                                key={job.id}
                                id={job.id}
                                title={job.title}
                                createdAt={job.createdAt}
                                updatedAt={job.updatedAt}
                                companyId={job.CompanyId}
                            />
                        ))}
                    </Row>
                </div>

                <br />
                <hr />
            </Container>
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
