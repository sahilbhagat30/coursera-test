(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);



CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  var allcat = this;
  allcat.items = items;
}

})();
