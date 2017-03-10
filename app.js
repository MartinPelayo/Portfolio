'use strict';
var data = [
  {
    title: '72rpm',
    author: 'Ivy, Michele, Yuval, Martin',
    authorUrl: 'https://github.com/MartinPelayo/project-1',
    body: 'This is the best game on the Internet. It tests the skills of the most musically talented, and turns amatuer programers into prefesionals...'
  },
  {
    title: 'Bus Mall',
    author: 'Martin',
    authorUrl: 'https://github.com/MartinPelayo/Week3_resubs',
    body: 'A site made for the most lucrative company on the planet- BUS MALL',
  },
  {
    title: 'The Salmon Cookie Shop',
    author: 'Martin',
    authorUrl: 'https://github.com/MartinPelayo/week2-Resubmissions',
    body: 'A site for a company who has redifined the art of making gourmet cookies',
  }
];

var articleView = {};
articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    var $dataGrab = $(this).attr('data-content');
    console.log($dataGrab);

    $('section[class=tab-content]').hide();
    var $tryAgain = $('section[id=]' + $dataGrab + ']');
    $tryAgain.fadeIn();
  });
  $('main-nav .tab:first').click();
};
articleView.handleMainNav();

