const env = require("../../env.js");
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

function questionnaire_updFunction(source) {
    const filePath = path.join(path.resolve('.'), '..', 'data', source);
    const fileStream = fs.createReadStream(filePath);

    const formData = new FormData();
    formData.append('file', fileStream, { filename: 'file.txt' });
    
    env.instance.post(`${env.baseURL}/admin/questionnaire_upd`, formData, {
        headers: formData.getHeaders(),
    }).then((res) => {
        console.log(res.data);
    });
}

module.exports = { questionnaire_updFunction };