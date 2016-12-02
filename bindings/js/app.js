(function() {
"use strict";

angular.module("BindingApp", [])
.controller("BindingController", BindingController);

BindingController.$inject = ['$scope'];
function BindingController($scope, $timeout) {
    $scope.firstName = "Boris";

    $scope.showNumberOfWatchers = function() {
        console.log("# of Wathchers: ", $scope.$$watchersCount);
    };

    $scope.setFullName = function() {
        $scope.fullName = $scope.firstName + " " + "Egorov";
    };

    $scope.logFirstName = function() {
        console.log("First name is: ", $scope.firstName);
    };

    $scope.logFullName = function() {
        console.log("Full name is: ", $scope.fullName);
    };
}

})();
