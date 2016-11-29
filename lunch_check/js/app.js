(function() {
"use strict";

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchItemsController);

LunchItemsController.$inject = ['$scope'];
function LunchItemsController($scope) {
    $scope.displayConclusion = function() {
        var lunchItems = $scope.lunchItemsInput;
        if (!lunchItems) {
            $scope.conclusion = "Please enter data first";
        } else {
            var numberOfItems = countNumberOfItems(lunchItems);
            if (numberOfItems == 0) {
                $scope.conclusion = "Please enter data first";
            } else if (numberOfItems <= 3) {
                $scope.conclusion = "Enjoy!";
            } else {
                $scope.conclusion = "Too much!";
            }
        }
    };

    function countNumberOfItems(string) {
        var items = string.split(',').filter(function(item) {
            return item.trim().length > 0;
        });
        return items.length;
    }
};

})();
