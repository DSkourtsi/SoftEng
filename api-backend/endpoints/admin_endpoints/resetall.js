const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const DB = require('../../sqlConnection').db_con;

function resetall(req, res){

    flag = 0;
    const myquery_ans="DELETE FROM answers";
    DB.query(myquery_ans, function(err, result, fields){
        if (err) {
            flag = 1;
            var Json = {
                status: "failed",
                reson: "500: Internal Server Error \n"+err
            };
            res.status(500).send(Json);
            return;
            }
    });
    const myquery_opt="DELETE FROM options";
    DB.query(myquery_opt, function(err, result, fields){
        if (err) {
            flag = 1;
            var Json = {
                status: "failed",
                reson: "500: Internal Server Error \n"+err
            };
            res.status(500).send(Json);
            return;
            }
    });
    const myquery_q="DELETE FROM question";
    DB.query(myquery_q, function(err, result, fields){
        if (err) {
            flag = 1;
            var Json = {
                status: "failed",
                reson: "500: Internal Server Error \n"+err
            };
            res.status(500).send(Json);
            return;
            }
    });
    const myquery_qn="DELETE FROM questionnaire";
    DB.query(myquery_qn, function(err, result, fields){
        if (err) {
            flag = 1;
            var Json = {
                status: "failed",
                reson: "500: Internal Server Error \n"+err
            };
            res.status(500).send(Json);
            return;
            }
    });
    const myquery_user="DELETE FROM user_session";
    DB.query(myquery_user, function(err, result, fields){
        if (err) {
            flag = 1;
            var Json = {
                status: "failed",
                reson: "500: Internal Server Error \n"+err
            };
            res.status(500).send(Json);
            return;
            }
    });
    
    
    if (flag == 0){
        var Json = {
            status: "OK"
        };
        res.status(200).send(Json);
        return;
    }
}

router.post("/admin/resetall", resetall);

module.exports = router;
