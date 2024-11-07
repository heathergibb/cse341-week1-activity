const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const profRoutes = require('./routes/professional');

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use('/professional', profRoutes);

app.listen(port);
console.log("Web Server is listening at: " + port);