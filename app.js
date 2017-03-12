'use strict';
var projectsApear = {};
var data = [
  {
    title: '72rpm',
    author: 'Ivy, Michele, Yuval, Martin',
    authorUrl: 'https://github.com/MartinPelayo/project-1',
    body: 'This is a Game',
  },
  {
    title: 'Bus Mall',
    author: 'Martin',
    authorUrl: 'https://github.com/MartinPelayo/Week3_resubs',
    body: 'Website for Bus Mall',
  },
  {
    title: 'The Salmon Cookie Shop',
    author: 'Martin',
    authorUrl: 'https://github.com/MartinPelayo/week2-Resubmissions',
    body: 'A site for a gourmet cookie company',
  }
];

//THIS CAN BE REFACTORED WAY DOWN, WAY TOO MUCH REPEATED CODE.
$(document).ready(function() {
  $('#articles').hide();
  $('.Home').hide();
  $('.About').hide();
});

$(document).ready(function(){
  $('.home-tab').on('click', function(){
    $('.Home').show();
    $('.About').hide();
    $('#articles').hide();
  });
});

$(document).ready(function(){
  $('.project-tab').on('click', function(){
    $('#articles').show();
    $('.About').hide();
    $('.Home').hide();
  });
});

$(document).ready(function(){
  $('.about-tab').on('click', function(){
    $('.About').show();
    $('.Home').hide();
    $('#articles').hide();
  });
});

$('button').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});
