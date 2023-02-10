const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const DB = require('../../sqlConnection').con;

function resetq(req, res){

    let questionnaireID = req.params.questionnaireID;
    
    if (questionnaireID.length == 0){
        res.status(400).send("400: Bad Request");
        return;
    }

    else{
        var myquery="DELETE FROM answers\
                     WHERE qID IN (\
                        SELECT qID\
                        FROM questionnaire\
                        WHERE questionnaireID = '${questionnaireID}'";
        const db_string = {
            host: "localhost",
            user: "root",
            password: "intelliq",
            database: 'intelliq_database'
        };

        DB.query(myquery, function(err, result, fields){
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
                    status: "OK"
                };
                res.status(200).send(Json);
                return;
            }
        });
    }
}
router.post("/admin/resetq/:questionnaireID", resetq);

module.exports = router;
