const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const DB = require('../sqlConnection').db_con;

const resultformat = require("../resultFormat.js");

function question(req, res){
    
    let questionnaireID = req.params.questionnaireID;
    let questionID = req.params.questionID;
    const format = req.query.format;
    
    if (questionID.length == 0 || questionnaireID.length == 0 || questionnaireID == ':questionnaireID' || questionID == ':questionID'){
        res.status(400).send("400: Bad Request");
        return;
    }

    else{
        const myquery="SELECT questionnaireID, qID, qtext, required, type\
                       FROM question\
                       WHERE questionnaireID = ? AND qID = ?";
        const parameters = [questionnaireID, questionID]

        DB.query(myquery, parameters, function(err, result, fields){
            if (err) {
                var Json = {
                    status: "failed",
                    reson: "500: Internal Server Error \n"+err
                };
                res.status(500).send(Json);
                return;
              }
            if (result.length == 0){
                res.status(402).send("402: No data");
                return;
            }
            else{
                const query2="SELECT optID, opttxt, nextqID\
                       FROM options\
                       WHERE qID = ?";
                const parameters = [questionID]

                DB.query(query2, parameters, function(err, res_opt, fields){
                    if (err) {
                        var Json = {
                            status: "failed",
                            reson: "500: Internal Server Error \n"+err
                        };
                        res.status(500).send(Json);
                            return;
                    }
                    
                
                    else{
                        let optList = JSON.parse(JSON.stringify(res_opt));

                        resultformat.question(
                            res,
                            200,
                            {
                                questionnaireID: result[0].questionnaireID,
                                questionID: questionID,
                                qtext: result[0].qtext,
                                required: result[0].required,
                                type: result[0].type,
                                options: optList
                            },
                            format
                        );
                    }
                });
            }
        });
    }
}
router.get("/question/:questionnaireID/:questionID", question);

module.exports = router;
