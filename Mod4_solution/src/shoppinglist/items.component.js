(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('items', {
      templateUrl: 'src/shoppinglist/templates/items.component.template.html',
      bindings: {
        items: '<'
      }
    });
    
    })();
    