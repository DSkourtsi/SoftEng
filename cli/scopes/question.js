// const axios = require("axios");
const env = require("../env.js");

function questionFunction(questionnaireID, questionID, format) {
    env.instance.get(`${env.baseURL}/question/${questionnaireID}/${questionID}?format=${format}`).then((res) => {
        console.log(res.data);
    });
}

module.exports = { questionFunction };