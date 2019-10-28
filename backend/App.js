const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const user = require('./routers/user');
const card = require('./routers/card');
const prefix = '/api/v1';
const db = require('./db');
const cors = require('cors');

app.use(cors())
app.use(express.static(__dirname + '/'));
app.use (bodyParser.urlencoded ({
    extended: true,
    limit: '50mb'
}));
app.use (bodyParser.json ({
    extended: true,
    limit: '50mb'
}));

app.use(`${prefix}/user`, user);
app.use(`${prefix}/card`, card);

app.listen(port,function() {
    console.log(`server started: ${port}`);
})