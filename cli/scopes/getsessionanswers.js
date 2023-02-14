const env = require("../env.js");

function getsessansFunction(questionnaireID, sessionID,format) {
    env.instance.get(`${env.baseURL}/getsessionanswers/${questionnaireID}/${sessionID}?format=${format}`).then((res) => {
        console.log(res.data);
    });
}

module.exports = { getsessansFunction };