const axios = require('axios');
const config = require('../config.js');
const mongoose = require('../database/index.js')

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  // get data
  axios(options)
  .then(function(response) {
    // save data to database (save function will handle duplicates)
    // iterate over response array and pass one repo at a time
    mongoose.save(response);
    })
    .catch(function(error) {
      console.log('Error getting repos from GitHub');
    })
}

module.exports.getReposByUsername = getReposByUsername;