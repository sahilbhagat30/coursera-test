(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })
.state('categories', {
    url: '/categories',
    templateUrl: 'src/shoppinglist/templates/allcategories.html',
    controller: 'CategoriesController as allcat',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/shoppinglist/templates/category.html',
    controller: 'CategoryController as cat',
    resolve: {
      items: ['MenuDataService', '$stateParams',  function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
    }
  });

}

})();
