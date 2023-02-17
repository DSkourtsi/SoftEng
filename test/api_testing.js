const assert = require('assert');
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Set NODE_TLS_REJECT_UNAUTHORIZED to 0


describe('API Tests', function() {
  let apiBaseUrl = 'https://localhost:9103/intelliq_api';
  let previousTestPassed = true;

  beforeEach(function(done) {
    setTimeout(function() {
      done();
    }, 1000);
  });

  it('should return a 200 status code for the /admin/healthcheck endpoint', function() {
    axios.get('https://localhost:9103/intelliq_api/admin/healthcheck')
        .then((response) => {
          expect(response.status).to.equal(200);
          done();
        })
        .catch((error) => done(error));
    });
  it('should return a 200 status code for the /admin/resetall endpoint', function() {
      axios.post('https://localhost:9103/intelliq_api/admin/resetall')
        .then((response) => {
          expect(response.status).to.equal(200);
          done();
        })
        .catch((error) => done(error));
    });
  it('should return a 200 status code for the /admin/questionnaire_upd endpoint', function() {
    const filePath = './data/dummy.json';
    const fileStream = fs.createReadStream(filePath);
    const formData = new FormData();
    formData.append('file', fileStream, { filename: 'file.txt' });
    axios.post('https://localhost:9103/intelliq_api/admin/questionnaire_upd', formData, {
        headers: formData.getHeaders(),
        })
        .then((response) => {
          expect(response.status).to.equal(200);
          done();
        })
        .catch((error) => done(error));
  });
  it('should return a 200 status code for the /admin/resetq/:questionnaireID endpoint', function() {
    axios.post(`${apiBaseUrl}/admin/resetq/1111`)
        .then((response) => {
          expect(response.status).to.equal(200);
          done();
        })
        .catch((error) => done(error));
    });
  it('should return a 200 status code for the /questionnaire/:questionnaireID endpoint', function() {
    axios.get('https://localhost:9103/intelliq_api/questionnaire/1111')
        .then((response) => {
          expect(response.status).to.equal(200);
          done();
        })
        .catch((error) => done(error));
  });
  it('should return a 200 status code for the /question/:questionnaireID/:questionID endpoint', function() {
    axios.get('https://localhost:9103/intelliq_api/question/1111/Q02')
        .then((response) => {
          expect(response.status).to.equal(200);
          done();
        })
  });
  it('should return a 200 status code for the /doanswer/:questionnaireID/:questionID/:sessionID/:optionID', function() {
    axios.post('https://localhost:9103/intelliq_api/doanswer/1111/Q03/aaaa/Q03A1')
    .then((response) => {
      expect(response.status).to.equal(200);
      done();
    })
    .catch((error) => done(error));
  });
  it('should return a 200 status code for the /getsessionanswers/:questionnaireID/:sessionID', function() {
    axios.get('https://localhost:9103/intelliq_api/getsessionanswers/1111/aaaa')
    .then((response) => {
      expect(response.status).to.equal(200);
      done();
    })
    .catch((error) => done(error));
  });
  it('should return a 200 status code for the /getquestionanswers/:questionnaireID/:questionID', function() {
    axios.get('https://localhost:9103/intelliq_api/getquestionanswers/1111/Q03')
    .then((response) => {
      expect(response.status).to.equal(200);
      done();
    })
    .catch((error) => done(error));
  });
});
