const assert = require('assert');
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Set NODE_TLS_REJECT_UNAUTHORIZED to 0


describe('API Tests', function() {
  let apiBaseUrl = 'https://localhost:9103/intelliq_api';

  it('should return a 200 status code for the /admin/healthcheck endpoint', async function() {
    const response = await axios.get(`${apiBaseUrl}/admin/healthcheck`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /admin/questionnaire_upd endpoint', async function() {
    const filePath = './data/test.json';
    const fileStream = fs.createReadStream(filePath);
    const formData = new FormData();
    formData.append('file', fileStream, { filename: 'file.txt' });
    const response = await axios.post(`${apiBaseUrl}/admin/questionnaire_upd`, formData, {
        headers: formData.getHeaders(),
    });
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /admin/resetq/:questionnaireID endpoint', async function() {
    const response = await axios.post(`${apiBaseUrl}/admin/resetq/1111`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /question/:questionnaireID/:questionID endpoint', async function() {
    const response = await axios.get(`${apiBaseUrl}/question/1111/Q02`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /questionnaire/:questionnaireID endpoint', async function() {
    const response = await axios.get(`${apiBaseUrl}/questionnaire/1111`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /doanswer/:questionnaireID/:questionID/:session/:optionID', async function() {
    const response = await axios.post(`${apiBaseUrl}/doanswer/1111/Q03/aaaa/Q03A1`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /getsessionanswers/:questionnaireID/:session', async function() {
    const response = await axios.get(`${apiBaseUrl}/getsessionanswers/1111/aaaa`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /getquestionanswers/:questionnaireID/:questionID', async function() {
    const response = await axios.get(`${apiBaseUrl}/getquestionanswers/1111/Q03`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /admin/resetall endpoint', async function() {
    const response = await axios.post(`${apiBaseUrl}/admin/resetall`);
    assert.equal(response.status, 200);
  });
});
