(function() {
"use strict";

angular.module("CounterApp", [])
.controller("CounterController", CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
    $scope.counter = 0;

    $scope.upCounter = function() {
        setTimeout(function() {
            $scope.$apply(function() {
                $scope.counter++;
                console.log("Counter incremented");
            });
        }, 2000);
    };
}

})();
