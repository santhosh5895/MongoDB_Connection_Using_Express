const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const student = require('./routes/student.route');

const app = express();
const port = 1234;
const dev_db_url = "mongodb://localhost:27017/test_db";

let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '+dev_db_url));
db.on('connected', console.info.bind(console, 'MongoDB connected successfully: '+dev_db_url));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/students',student);

app.listen(port, () => {
    console.log("server is up and running on port number "+port);
});