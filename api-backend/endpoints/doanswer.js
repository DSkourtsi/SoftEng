const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const DB = require('../sqlConnection').db_con;

function doans(req, res){

    let questionnaireID = req.params.questionnaireID;
    let questionID = req.params.questionID;
    let session = req.params.session;
    let optionID = req.params.optionID;
    
    if (questionnaireID.length == 0 || questionID.length == 0 || session.length == 0 || optionID == 0){
        res.status(400).send("400: Bad Request");
        return;
    }

    else{
        const init_query = "SELECT * FROM user_session\
                WHERE session = ?";
        const init_param = [session]

        const query="INSERT INTO user_session (session)\
                       VALUES (?)";
        const param = [session]
        
        const myquery="INSERT INTO answers (optID, session, qID)\
                       VALUES(?,?,?)";
        const parameters = [optionID, session, questionID]

        DB.query(init_query, init_param, function(err, init_result, fields){
            if (err) {
                var Json = {
                    status: "failed",
                    reson: "500: first Internal Server Error \n"+err
                };
                res.status(500).send(Json);
                return;
              }
            else{
                if (init_result.length == 0){
                    DB.query(query, param, function(err, temp_result, fields){
                        if (err) {
                            var Json = {
                                status: "failed",
                                reson: "500: first Internal Server Error \n"+err
                            };
                            res.status(500).send(Json);
                            return;
                          }
                        });
                }
                DB.query(myquery, parameters, function(err, result, fields){
                    if (err) {
                        var Json = {
                            status: "failed",
                            reson: "500: Internal Server Error \n"+err
                        };
                        res.status(500).send(Json);
                        return;
                    }
                    else{
                        var Json = {
                            status: "OK",
                        };
                        res.status(200).send(Json);
                        return;
                    }
                });
            }
        });
    }
}
router.post("/doanswer/:questionnaireID/:questionID/:session/:optionID", doans);

module.exports = router;
