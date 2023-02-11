// const axios = require("axios");
const env = require("../env.js");

function questionFunction(questionnaireID, questionID) {
    env.instance.get(`${env.baseURL}/question/${questionnaireID}/${questionID}`).then((res) => {
        console.log(res.data);
    });
}

module.exports = { questionFunction };