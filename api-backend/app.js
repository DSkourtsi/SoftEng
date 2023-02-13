// Requiring in-built https for creating
// https server
const https = require("https");
const healthcheck = require("./endpoints/admin_endpoints/healthcheck.js");
const questionnaire_upd = require("./endpoints/admin_endpoints/questionnaire_upd.js");
const resetq = require("./endpoints/admin_endpoints/resetq.js");
const resetall = require("./endpoints/admin_endpoints/resetall.js");
const questionnaire = require("./endpoints/questionnaire.js");
const question = require("./endpoints/question.js");
const sessans = require("./endpoints/getsessionanswers.js");
const qans = require("./endpoints/getquestionanswers.js");
const doans = require("./endpoints/doanswer.js");

// Express for handling GET and POST request
const express = require("express");
const app = express();

// Requiring file system to use local files
const fs = require("fs");

// Parsing the form of body to take
// input from forms
const bodyParser = require("body-parser");

// Configuring express to use body-parser
// as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get request for root of the app
app.get("/intelliq_api", function (req, res) {

// Sending index.html to the browser
res.sendFile(__dirname + "/index.html");
});

app.use("/intelliq_api", healthcheck);
app.use("/intelliq_api", questionnaire_upd);
app.use("/intelliq_api", resetq);
app.use("/intelliq_api", resetall);
app.use("/intelliq_api", questionnaire);
app.use("/intelliq_api", question);
app.use("/intelliq_api", sessans);
app.use("/intelliq_api", qans);
app.use("/intelliq_api", doans);

// Post request for geetting input from
// the form
app.post("/mssg", function (req, res) {

// Logging the form body
console.log(req.body);

// Redirecting to the root
res.redirect("/intelliq_api");
});

// Creating object of key and certificate
// for SSL
const options = {
key: fs.readFileSync("server.key"),
cert: fs.readFileSync("server.cert"),
};

// Creating https server by passing
// options and app object
https.createServer(options, app)
.listen(9103, function (req, res) {
console.log("Server started at port 9103");
});
