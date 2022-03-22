const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let repoSchema = mongoose.Schema({
  repo_id: {type: Number, unique: true},
  repo_name: String,
  repo_url: String,
  user_name: String,
  user_id: Number,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var userId = repos.data[0].owner.id;
  for (let i = 0; i < repos.data.length; i++) {
    var repo = repos.data[i];
    let newRepo = new Repo({
      repo_id: repo.id,
      repo_name: repo.name,
      repo_url: repo.html_url,
      user_name: repo.owner.login,
      user_id: repo.owner.id,
      forks: repo.forks
    });
    newRepo.save(function(err) {
      if (err) {
        console.log('Repo already exists!');
      } else {
        console.log('New repo saved!');
      }
    })
  }
}
let pull = (callback) => {
  Repo.find({}).sort({forks: -1}).limit(25).exec(
    function(err, results) {
      if (err) {
        console.log('didnt pull')
      } else {
        callback(results);
      }
    }
  )
}

module.exports.save = save;
module.exports.pull = pull;