var app = angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", function() {
	this.toBuyItems = [{name: "Apples", quantity:"10"}, {name: "Bananas", quantity:"2"}, {name: "Mangos", quantity:"5"}, {name: "Strawberries", quantity:"3"}, {name: "Grapes", quantity:"100"}];
	this.boughtItems = [];
	this.buy = function(index) {
		var item = this.toBuyItems[index];
		this.toBuyItems.splice(index, 1);
		this.boughtItems.push(item);
	}
});

ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyController($scope, ShoppingListCheckOffService) {
	$scope.buyList = ShoppingListCheckOffService.toBuyItems;
	$scope.BuyItem = function(index) {
		ShoppingListCheckOffService.buy(index);
	}
}

AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
	$scope.boughtList = ShoppingListCheckOffService.boughtItems;
}

