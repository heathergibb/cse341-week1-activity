const express = require('express');
const bodyParser = require('body-parser');

//stretch activity
const { MongoClient } = require('mongodb');
const mongodb = require('./db/connect');
//end of stretch

const app = express();
const profRoutes = require('./routes/professional');

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use('/professional', profRoutes);

// removed for stretch activity
// app.listen(port);
// console.log("Web Server is listening at: " + port);


//stretch activity
mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log("Connected to DB and listening at: " + port);
    }
});

//end of stretch