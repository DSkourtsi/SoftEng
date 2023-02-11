// const axios = require("axios");
const env = require("../env.js");

function getqansFunction(questionnaireID, questionID, format) {
    env.instance.get(`${env.baseURL}/getquestionanswers/${questionnaireID}/${questionID}?format=${format}`).then((res) => {
        console.log(res.data);
    });
}

module.exports = { getqansFunction };