// Testing
'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  function render(repo) {
    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);

    return template(repo);
  }

  repoView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('name').map(render)
    );
  };
  module.repoView = repoView;
})(window);