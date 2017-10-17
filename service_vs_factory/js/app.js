// My own example to grasp the concepts
// 	
// 	The second argument is for dependency injection. You may find this
// 	documentation a little more helpful.
//
// 	Modules can list other modules as their dependencies. Depending on a module
// 	implies that the required module needs to be loaded before the requiring
// 	module is loaded. In other words the configuration blocks of the required
// 	modules execute before the configuration blocks of the requiring module.
// 	The same is true for the run blocks. Each module can only be loaded once,
// 	even if multiple other modules require it.  If you declare dependencies or
// 	leave the second argument as an empty block [], it means that you are
// 	declaring a new instance of the module. If you leave it off completely, you
// 	are referencing an existing module.
//

angular.module('myAppModule', [ 'serviceModule' ]);

angular.module('myAppModule').controller('myAppController', function ( FoodService, DrinksService ) {

	let module_scope = this;

	this.helloWorld = function () {

		alert( 'myAppModule says: "Hello World"' );
	};

	this.supplies = {

		chocolate: [],
		coffee:    [],
		fruit:     [],
		food:      []
	}

	this.getMoreChocolate = () => module_scope.supplies.chocolate.push( FoodService.supplyChocolate() );
	this.getMoreCoffee    = () => module_scope.supplies.coffee.push( DrinksService.supplyCoffee() );
	this.getMoreFruit     = () => module_scope.supplies.fruit.push( FoodService.supplyFruit() );
	this.getMoreFood      = () => module_scope.supplies.food.push( FoodService.supplyFood() );

	this.getMoreSupplies = function () {

		module_scope.getMoreChocolate();
		module_scope.getMoreCoffee();
		module_scope.getMoreFruit();
		module_scope.getMoreFood();
	}

	this.getMoreSupplies();
});
