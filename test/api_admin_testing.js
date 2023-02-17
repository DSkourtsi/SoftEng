const assert = require('assert');
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Set NODE_TLS_REJECT_UNAUTHORIZED to 0


describe('API Tests', function() {
  let apiBaseUrl = 'https://localhost:9103/intelliq_api';
  let previousTestPassed = true;

  beforeEach(async function() {
    if (!previousTestPassed) {
      throw new Error('Previous test failed');
    }
  });

  afterEach(function() {
    previousTestPassed = this.currentTest.state === 'passed';
  });

  it('should return a 200 status code for the /admin/healthcheck endpoint', async function() {
    const response = await axios.get(`${apiBaseUrl}/admin/healthcheck`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /admin/resetall endpoint', async function() {
    const response = await axios.post(`${apiBaseUrl}/admin/resetall`);
    assert.equal(response.status, 200);
  });
  it('should return a 200 status code for the /admin/questionnaire_upd endpoint', async function() {
    const filePath = './data/dummy.json';
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
});
