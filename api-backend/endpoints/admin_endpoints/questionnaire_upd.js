const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const fs = require("fs");

function questionnaire_upd(req, res){

    fs.readFile()

    const db_string = {
        host: "localhost",
        user: "root",
        password: "intelliq",
        database: 'intelliq_database'
    };

    let db_con = mysql.createConnection(db_string);

    db_con.connect((err) => {
        if (err) {
            console.log("Database Connection Failed !!!", err);
            var Json = {
                status: "failed",
                dbconnection: db_string
            };
            res.status(500).send(Json);
            return;
        }
        else {
            console.log("Connected to Database");
            var Json = {
                status: "OK",
                dbconnection: db_string
            };
            res.status(200).send(Json);
            return;
        }
    });
}

router.get("/admin/healthcheck", healthcheck);

module.exports = router;