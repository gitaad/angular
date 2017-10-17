// This creates the service module
angular.module('serviceModule', []);

// This adds the food service to the exisiting service module
angular.module('serviceModule').service( 'FoodService', function () {

	console.log('Defining FoodService');

	this.supplyChocolate = function  () { return "bar" };
	this.supplyFood      = function  () { return "foo" };
	this.supplyFruit     = function  () { return "apple" };
});

// This adds the food service to the service module
angular.module('serviceModule').service( 'DrinksService', function () {

	console.log('Defining DrinksService');

	this.supplyCoffee = function  () { return "the black stuff" };
});
