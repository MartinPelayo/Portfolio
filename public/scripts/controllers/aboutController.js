'use strict';
// (function(module){
//     const aboutController = {};

//     aboutController.logview = function() {
//         cosole.log('From aboutController');
//     }

//     aboutController.render = function(){
//         $('.home-class').hide();
//         $('.project-class').hide();
//         $('.About').fadeIn();
//     }

//     module.aboutController = aboutController;
// })(window);
//Think Im good here
'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);