const express = require("express")
const mongoose = require('mongoose');
const mongoString = "mongodb+srv://softeng22-99:softeng22@softeng99.uap3fhl.mongodb.net/test";
const port = 9103

const app = express()

mongoose.set('strictQuery', false);
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(port, () => {
	console.log(`Server Started at ${port}!`)
})