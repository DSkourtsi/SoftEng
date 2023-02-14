#! /usr/bin/env node
const yargs = require("yargs"); /* maybe commander is a better option */
const axios = require("axios");
const env = require("../env.js");

const functionsDirectory = "../scopes";

const { healthcheckFunction } = require(`${functionsDirectory}/admin/healthcheck.js`);
const { resetallFunction } = require(`${functionsDirectory}/admin/resetall.js`);
const { questionnaire_updFunction } = require(`${functionsDirectory}/admin/questionnaire_upd.js`);
const { resetqFunction } = require(`${functionsDirectory}/admin/resetq.js`);

const { questionnaireFunction } = require(`${functionsDirectory}/questionnaire.js`);
const { questionFunction } = require(`${functionsDirectory}/question.js`);
const { doansFunction } = require(`${functionsDirectory}/doanswer.js`);
const { getsessansFunction } = require(`${functionsDirectory}/getsessionanswers.js`);
const { getqansFunction } = require(`${functionsDirectory}/getquestionanswers.js`);

const argv = yargs.argv;

const scope = argv._[0];

const arguments = {
    
    healthcheck: [],
    resetall: [],
    questionnaire_upd: [argv.source],
    resetq: [argv.questionnaire_id],
    
    questionnaire: [argv.questionnaire_id, argv.format],
    question: [argv.questionnaire_id, argv.question_id, argv.format],
    doanswer: [argv.questionnaire_id, argv.question_id, argv.session_id, argv.option_id],
    getsessionanswers: [argv.questionnaire_id, argv.session_id, argv.format],
    getquestionanswers: [argv.questionnaire_id, argv.question_id, argv.format],
};

const functionToCall = {

    healthcheck: healthcheckFunction,
    resetall: resetallFunction,
    questionnaire_upd: questionnaire_updFunction,
    resetq: resetqFunction,

    questionnaire: questionnaireFunction,
    question: questionFunction,
    doanswer: doansFunction,
    getsessionanswers: getsessansFunction,
    getquestionanswers: getqansFunction
};

if (!arguments[scope].every((item) => item)) {
    console.log(env.usage);
    return;
}

functionToCall[scope](...arguments[scope]);

