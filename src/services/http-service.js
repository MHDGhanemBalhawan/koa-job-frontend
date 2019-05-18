import "whatwg-fetch";

const endPointCompanies = "http://localhost:4000/companies";

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
}
