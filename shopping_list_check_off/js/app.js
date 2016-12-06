(function() {
// Minification checks done with https://jscompress.com/

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toByList = this;
  toByList.items = ShoppingListCheckOffService.getToByItems();

  toByList.buy = function(index) {
    ShoppingListCheckOffService.buy(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toByItems = [
    {
      name: "cookies",
      quantity: 5
    },
    {
      name: "chocolate",
      quantity: 12
    },
    {
      name: "marshmallow",
      quantity: 2
    },
    {
      name: "Nutella",
      quantity: 14
    },
    {
      name: "milk",
      quantity: 2
    },
    {
      name: "chicken",
      quantity: 3
    },
    {
      name: "cheese",
      quantity: 5
    },
    {
      name: "bread",
      quantity: 1
    }
  ];

  var boughtItems = [];

  service.getToByItems = function() {
    return toByItems;
  }

  service.getBoughtItems = function() {
    return boughtItems;
  }

  service.buy = function(index) {
    var item = toByItems[index];
    toByItems.splice(index, 1);
    boughtItems.push(item);
  }
}

})();
