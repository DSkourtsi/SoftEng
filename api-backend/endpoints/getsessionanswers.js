const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const DB = require('../sqlConnection').db_con;

function sessans(req, res){

    let questionnaireID = req.params.questionnaireID;
    let session = req.params.session;
    
    if (questionnaireID.length == 0 || session.length == 0){
        res.status(400).send("400: Bad Request");
        return;
    }

    else{
        const myquery="SELECT qID, optID as ans\
                       FROM answers\
                       WHERE session = ?\
                       ORDER BY qID";
        const parameters = [session]

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
                var Json = {
                    status: "OK",
                    questionnaireID: questionnaireID,
                    session: session,
                    answers: result
                };
                res.status(200).send(Json);
                return;
            }
        });
    }
}
router.get("/getsessionanswers/:questionnaireID/:session", sessans);

module.exports = router;
