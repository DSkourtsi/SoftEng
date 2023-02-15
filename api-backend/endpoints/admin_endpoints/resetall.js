const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const DB = require('../../sqlConnection').db_con;

function resetall(req, res){

    console.log("TEST");
    const myquery_ans="DELETE FROM answers";
    DB.query(myquery_ans, function(err, result, fields){
        if (err) {
            console.log("TESTprob");
            var Json = {
                status: "failed",
                error: err
            };
            res.status(500).send(Json);
            return;
            }
            else{
    
                const myquery_opt="DELETE FROM options";
                DB.query(myquery_opt, err => {
                    if (err) {
                        console.log("TESTprob");
                        var Json = {
                            status: "failed",
                            error: err
                        };
                        res.status(500).send(Json);
                        return;
                        }
                    else {
    
                        const myquery_q="DELETE FROM question";
                        DB.query(myquery_q, err => {
                            if (err) {
                                console.log("TESTprob");
                                var Json = {
                                    status: "failed",
                                    error: err
                                };
                                res.status(500).send(Json);
                                return;
                                }
                            else{
    
                                const myquery_qn="DELETE FROM questionnaire";
                                DB.query(myquery_qn, err => {
                                    if (err) {
                                        console.log("TESTprob");
                                        var Json = {
                                            status: "failed",
                                            error: err
                                        };
                                        res.status(500).send(Json);
                                        return;
                                        }
                                    else{
                                        const myquery_user="DELETE FROM user_session";
                                        DB.query(myquery_user, err => {
                                            if (err) {
                                                console.log("TESTprob");
                                                var Json = {
                                                    status: "failed",
                                                    error: err
                                                };
                                                res.status(500).send(Json);
                                                return;
                                                }
    
    
                                            else{
                                                console.log("TESTprob", flag);
                                                var Json = {
                                                    status: "OK"
                                                };
                                                res.status(200).send(Json);
                                                return;
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
}

router.post("/admin/resetall", resetall);

module.exports = router;
