'use strict';
var projects = [];
// var json = require('data.json');

function Project(options){
  this.title = options.title;
  this.author = options.author;
  this.authorUrl = options.authorUrl;
  this.body = options.body;
}

Project.all = [];

Project.prototype.toHtml = function() {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago ` : '(draft)';

  var html = template(this);
  return html;
}

// data.forEach(function(ele) {
//   projects.push(new Project(ele));
// });

// projects.forEach(function(project) {
//     console.log('project', project);
//   $('#articles').append(project.toHtml());
// });

Project.loadAll = function(data) {
  data.sort(function(a,b){
    return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  data.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}






Project.fetchAll = function(){

if (localStorage.stored_data) {
  var storedData = localStorage.getItem('stored_data');
  Project.loadAll(storedData);
  console.log('working', storedData);
} else {
  $.ajax({
    url:'data.json',
    method: 'GET',
    success: function(data){
      localStorage.setItem('stored_data',JSON.stringify(data));
      Project.loadAll(data);
    }
  })
}
}
