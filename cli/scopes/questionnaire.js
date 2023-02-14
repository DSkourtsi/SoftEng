const env = require("../env.js");

function questionnaireFunction(questionnaireID, format) {
    env.instance.get(`${env.baseURL}/questionnaire/${questionnaireID}?format=${format}`).then((res) => {
        console.log(res.data);
    });
}

module.exports = { questionnaireFunction };