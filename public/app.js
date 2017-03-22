'use strict';
// $(document).ready(function() {
$('#articles').hide();
$('.Home').hide();
$('.About').hide();
// });

// $(document).ready(function(){
//   $('.home-tab').on('click', function(){
//     $('.Home').show();
//     $('.About').hide();
   //  $('#articles').hide();
//   });
// });

// $(document).ready(function(){
//   $('.project-tab').on('click', function(){
//     $('#articles').show();
//     $('.About').hide();
//     $('.Home').hide();
//   });
// });

// $(document).ready(function(){
//   $('.about-tab').on('click', function(){
//     $('.About').show();
//     $('.Home').hide();
//     $('#articles').hide();
//   });
// });

$('button').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});
