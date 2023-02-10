const mysql = require("mysql");

let db_con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "intelliq",
    database: 'intelliq_database'
});

db_con.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("Connected to Database");
    }
});

module.exports = { db_con };