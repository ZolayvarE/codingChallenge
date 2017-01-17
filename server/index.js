const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const helpers = require('./helpers.js');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/foodtrucks', function (req, res) {
  res.send(helpers.getData());
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Now listening on port:', port);
});
