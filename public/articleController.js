'use strict';

Project.fetchAll();

(function(module){
    const articleController = {};

    articleController.logView = function(){
        console.log('From articleController');
    }
    articleController.render = function(){
        $('.About').hide();
        $('#articles').fadeIn();
    }
    module.articleController = articleController;
})(window);