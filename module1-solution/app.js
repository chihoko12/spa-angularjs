(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
      function LunchCheckController($scope) {
        $scope.lunch = "";
        $scope.totalItems = 0;
        $scope.message = "";

        $scope.lunchCheck = function () {
          const noOfItems= countItems($scope.lunch);
          $scope.message = checker(noOfItems);
        }

        function countItems(string) {
          const splitItems = string.split(",");
          let count = 0;
          splitItems.forEach((item) => {
            if (item.trim()) {
              count += 1;
            }
          });
          return count;
        };

        function checker(no) {
          let result;
          if (no === 0) {
            result = 'Please enter data first';
          } else if (no > 0 && no <= 3) {
            result = 'Enjoy!';
          } else if (no > 3) {
            result = 'Too much!';
          };
          return result;
        };
      }
})();
