const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const DB = require('../../sqlConnection').db_con;

function resetq(req, res){

    let questionnaireID = req.params.questionnaireID;
    
    if (questionnaireID.length == 0){
        res.status(400).send("400: Bad Request");
        return;
    }

    else{
        const myquery="DELETE FROM answers\
                     WHERE qID IN (\
                        SELECT qID\
                        FROM question\
                        WHERE questionnaireID = ?)";
        const parameters = [questionnaireID]

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
