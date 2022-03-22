const express = require('express');
let app = express();
const github = require('../helpers/github.js');
const mongoose = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
// app.use(express.urlencoded());
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  // get username from request(.body?)
  // run github.getReposByUsername
  console.log(req.body.username)
  github.getReposByUsername(req.body.username);
  // send succesful response
  // set status code
  mongoose.pull((data) => {
    res.send(JSON.stringify(data));
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  mongoose.pull((data) => {
    res.send(JSON.stringify(data));
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

