var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "intelliq",
    database: "intelliq_database"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected to db..");
    var sql = "CREATE TABLE questionnaire (id VARCHAR(15) PRIMARY KEY, questionnaireTitle VARCHAR(100))";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table questionnaire created!");
    });
});