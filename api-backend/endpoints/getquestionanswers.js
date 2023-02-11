const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const DB = require('../sqlConnection').db_con;

const resultformat = require("../resultFormat.js");

function qans(req, res){

    let questionnaireID = req.params.questionnaireID;
    let questionID = req.params.questionID;
    const format = req.query.format;
    
    if (questionnaireID.length == 0 || questionID.length == 0){
        res.status(400).send("400: Bad Request");
        return;
    }

    else{
        const myquery="SELECT session, optID as ans\
                       FROM answers\
                       WHERE qID = ?";
        const parameters = [questionID]

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
                let ansList = JSON.parse(JSON.stringify(result));

                resultformat.getqans(
                    res,
                    200,
                    {
                        questionnaireID: questionnaireID,
                        questionID: questionID,
                        answers: ansList
                    },
                    format
                );
            }
        });
    }
}
router.get("/getquestionanswers/:questionnaireID/:questionID", qans);

module.exports = router;
