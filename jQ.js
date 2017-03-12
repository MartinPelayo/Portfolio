'use strict';
var projects = [];

function Project(options){
  this.title = options.title;
  this.author = options.author;
  this.authorUrl = options.authorUrl;
  this.body = options.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  // $newProject.attr('data-author', this.author); I think I placed this here for the filter goal...
  $newProject.attr('data-category',this.category);

  $newProject.find('address').children().text(this.author);
  $newProject.find('a[href]').attr('href', this.authorUrl);
  $newProject.find('h1').text(this.title);
  $newProject.find('section.article-body').html(this.body);
  $newProject.removeClass('template');
console.log('new project', $newProject);
  return $newProject;
};

data.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(project) {
    console.log('project', project);
  $('#articles').append(project.toHtml());
});


