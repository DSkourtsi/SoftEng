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
        const myquery="INSERT INTO answers (optID, session, qID)\
                       VALUES(?,?,?)";
        const parameters = [optionID, session, questionID]

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
}
router.post("/doanswer/:questionnaireID/:questionID/:session/:optionID", doans);

module.exports = router;
