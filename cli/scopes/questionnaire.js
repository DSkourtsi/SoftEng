// const axios = require("axios");
const env = require("../env.js");

function questionnaireFunction(questionnaireID) {
    env.instance.get(`${env.baseURL}/questionnaire/${questionnaireID}`).then((res) => {
        console.log(res.data);
    });
}

module.exports = { questionnaireFunction };
