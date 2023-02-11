// const axios = require("axios");
const env = require("../env.js");

function getsessansFunction(questionnaireID, sessionID) {
    env.instance.get(`${env.baseURL}/getsessionanswers/${questionnaireID}/${sessionID}`).then((res) => {
        console.log(res.data);
    });
}

module.exports = { getsessansFunction };