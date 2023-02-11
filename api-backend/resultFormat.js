const converter = require("json-2-csv");

exports.questionnaire = function FormattedResponseQuestionnaire(res, status, data, format) {
    if (format == 'csv') {
        var new_data = [];
        for (var i = 0; i < data.questions.length; i++) {
            const ans = {
                questionnaireID : data.questionnaireID,
                questionnaireTitle : data.questionnaireTitle,
                keywords: data.keywords,
                qID : data.questions[i].qID,
                qtext : data.questions[i].qtext,
                required : data.questions[i].required,
                type : data.questions[i].type
            };
            new_data.push(ans);
        }
        converter.json2csv(new_data, (err,csv) => {
            if (err) {
                var Json = {
                    status: "failed",
                    reson: "500: Internal Server Error \n"+err
                };
                res.status(500).send(Json);
                return;
            }
            res.status(status).send(csv);
        });
    }
    else if (format == 'json' || format == undefined){
        res.status(status).send(data);
    }
    else res.status(400).send("Bad request: Not acceptable format")
}

exports.question = function FormattedResponseQuestion(res, status, data, format) {
    if (format == 'csv') {
        var new_data = [];
        for (var i = 0; i < data.options.length; i++) {
            const ans = {
                questionnaireID : data.questionnaireID,
                questionID : data.questionID,
                qtext : data.qtext,
                required : data.required,
                type : data.type,
                optID : data.options[i].optID,
                opttxt : data.options[i].opttxt,
                nextqID : data.options[i].nextqID
            };
            new_data.push(ans);
        }
        converter.json2csv(new_data, (err,csv) => {
            if (err) {
                var Json = {
                    status: "failed",
                    reson: "500: Internal Server Error \n"+err
                };
                res.status(500).send(Json);
                return;
            }
            res.status(status).send(csv);
        });
    }
    else if (format == 'json' || format == undefined){
        res.status(status).send(data);
    }
    else res.status(400).send("Bad request: Not acceptable format")
}

exports.getqans = function FormattedResponseQAns(res, status, data, format) {
    if (format == 'csv') {
        var new_data = [];
        for (var i = 0; i < data.answers.length; i++) {
            const ans = {
              questionnaireID : data.questionnaireID,
              questionID : data.questionID,
              session : data.answers[i].session,
              ans : data.answers[i].ans
            };
            new_data.push(ans);
        }
        converter.json2csv(new_data, (err,csv) => {
            if (err) {
                var Json = {
                    status: "failed",
                    reson: "500: Internal Server Error \n"+err
                };
                res.status(500).send(Json);
                return;
            }
            res.status(status).send(csv);
        });
    }
    else if (format == 'json' || format == undefined){
        res.status(status).send(data);
    }
    else res.status(400).send("Bad request: Not acceptable format")
}

exports.getsessans = function FormattedResponseSessAns(res, status, data, format) {
    if (format == 'csv') {
        var new_data = [];
        for (var i = 0; i < data.answers.length; i++) {
            const ans = {
              questionnaireID : data.questionnaireID,
              session : data.session,
              qID : data.answers[i].qID,
              ans : data.answers[i].ans
            };
            new_data.push(ans);
        }
        converter.json2csv(new_data, (err,csv) => {
            if (err) {
                var Json = {
                    status: "failed",
                    reson: "500: Internal Server Error \n"+err
                };
                res.status(500).send(Json);
                return;
            }
            res.status(status).send(csv);
        });
    }
    else if (format == 'json' || format == undefined){
        res.status(status).send(data);
    }
    else res.status(400).send("Bad request: Not acceptable format")
}