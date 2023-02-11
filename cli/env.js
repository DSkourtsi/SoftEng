const https = require("https");
const axios = require("axios");

const protocol = "https";
const host = "localhost";
const port = 9103;

const baseURL = `${protocol}://${host}:${port}/intelliq_api`;

const usage = "\nUsage: se2299 <scope> --param1 <value1> [--param2 <value2> ...] --format <fff>";

const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
    }),
});

const conString = {
    host: "localhost",
    user: "root",
    password: "intelliq",
    database: "intelliq_database",
};

module.exports = { baseURL, usage, instance, conString };