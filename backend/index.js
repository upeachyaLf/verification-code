// Package Imports
const express = require('express');
const bodyParser = require('body-parser');

// Custom Imports
const port = require('./app/constants/port');

// create express app
const app = express();

const cors = require('cors');
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('sudo service mongod start/stop', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({[port] : port});
});

require('./app/routes/verification-code.routes')(app);
 
// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port ",port);
});
