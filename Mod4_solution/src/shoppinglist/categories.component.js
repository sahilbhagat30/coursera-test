(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/shoppinglist/templates/categories.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
