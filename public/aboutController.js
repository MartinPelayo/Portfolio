'use strict';

(function(module){
    const aboutController = {};

    aboutController.logview = function() {
        cosole.log('From aboutController');
    }

    aboutController.render = function(){
        $('.testing').hide();
        $('.About').fadeIn();
    }

    module.aboutController = aboutController;
})(window);