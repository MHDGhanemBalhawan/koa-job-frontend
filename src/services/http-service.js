import "whatwg-fetch";

const endPointCompanies = "http://localhost:4000/companies";

export default class HttpService {
  getCompanies = () => {
    var promise = new Promise((resolve, reject) => {
      fetch(endPointCompanies).then(response => {
        resolve(response.json());
      });
    });
    return promise;
  };
}
