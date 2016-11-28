(function () {
'use strict';

angular.module('helloApp', [])

.controller('helloController', function($scope) {
    $scope.name = "John";

    $scope.sayHello = function() {
        return "Hello, Coursera";
    };
});

})();
