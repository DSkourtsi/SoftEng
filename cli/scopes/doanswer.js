const env = require("../env.js");

function doansFunction(questionnaireID, questionID, sessionID, optionID) {
    env.instance.post(`${env.baseURL}/doanswer/${questionnaireID}/${questionID}/${sessionID}/${optionID}`).then((res) => {
        console.log(res.data);
    });
}

module.exports = { doansFunction };