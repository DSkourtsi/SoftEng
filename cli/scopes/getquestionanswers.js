// const axios = require("axios");
const env = require("../env.js");

function getqansFunction(questionnaireID, questionID) {
    env.instance.get(`${env.baseURL}/getquestionanswers/${questionnaireID}/${questionID}`).then((res) => {
        console.log(res.data);
    });
}

module.exports = { getqansFunction };
