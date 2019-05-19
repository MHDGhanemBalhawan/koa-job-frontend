import "whatwg-fetch";

const endPointCompanies = "http://localhost:4000/companies";
const endPointCandidates = "http://localhost:4000/candidates";
const endPointApplications = "http://localhost:4000/applications";
const endPointJobs = "http://localhost:4000/jobs";

export default class HttpService {
  getCompanies = () => {
    var promise = new Promise((resolve, reject) => {
      fetch(endPointCompanies).then(response => {
        resolve(response.json());
      });
    });
    return promise;
  };

  getJobs = () => {
    var promise = new Promise((resolve, reject) => {
      fetch(endPointJobs).then(response => {
        resolve(response.json());
      });
    });
    return promise;
  };
  getCandidates = () => {
    var promise = new Promise((resolve, reject) => {
      fetch(endPointCandidates).then(response => {
        resolve(response.json());
      });
    });
    return promise;
  };
  getApplications = () => {
    var promise = new Promise((resolve, reject) => {
      fetch(endPointApplications).then(response => {
        resolve(response.json());
      });
    });
    return promise;
  };
}
