(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListController', ShoppingListController);

  ShoppingListController.$inject = ['$scope'];
  function ShoppingListController ($scope) {
    $scope.shoppingList = shoppingList;
  }

})();
