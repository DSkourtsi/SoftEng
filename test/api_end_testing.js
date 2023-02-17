const assert = require('assert');
const axios = require('axios');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Set NODE_TLS_REJECT_UNAUTHORIZED to 0


describe('API Tests', function() {
  let apiBaseUrl = 'https://localhost:9103/intelliq_api';

  it('should return a 200 status code for the /questionnaire/:questionnaireID endpoint', async function() {
    const response = await axios.get(`${apiBaseUrl}/questionnaire/1111`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /question/:questionnaireID/:questionID endpoint', async function() {
    const response = await axios.get(`${apiBaseUrl}/question/1111/Q02`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /doanswer/:questionnaireID/:questionID/:sessionID/:optionID', async function() {
    const response = await axios.post(`${apiBaseUrl}/doanswer/1111/Q03/1234/Q03A1`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /getsessionanswers/:questionnaireID/:sessionID', async function() {
    const response = await axios.get(`${apiBaseUrl}/getsessionanswers/1111/1234`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /getquestionanswers/:questionnaireID/:questionID', async function() {
    const response = await axios.get(`${apiBaseUrl}/getquestionanswers/1111/Q03`);
    assert.equal(response.status, 200);
  });
});