'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax('https://api.github.com/users/MartinPelayo/repos', {
      method: 'GET',
      headers: {Authorization: 'token ' + credential}
    }).then((res) => {
      res.forEach(function(items){
        repos.all.push(items);
        console.log(repos.all);
        callback();
      })
    }).catch((err) => {console.error})
  };
  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);