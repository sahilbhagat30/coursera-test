(function () {
    'use strict';
    
    angular.module('data')
    .controller('CategoryController', CategoryController);
    
    
    CategoryController.$inject = ['items'];
    function CategoryController(items) {
      var cat = this;
      cat.items = items;
    }
    })();
  