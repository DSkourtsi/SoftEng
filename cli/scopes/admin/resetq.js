// const axios = require("axios");
const env = require("../../env.js");

function resetqFunction(questionnaireID) {
    env.instance.post(`${env.baseURL}/admin/resetq/${questionnaireID}`).then((res) => {
        console.log(res.data);
    });
}

module.exports = { resetqFunction };