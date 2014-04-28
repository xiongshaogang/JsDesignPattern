//app/pizzas/ChicagoStyleVeggiePizza.js
define(
	['jquery', 'Pizza'],
	function($, Pizza) {
		var ChicagoStyleVeggiePizza = function(){
			Pizza.apply(this);
			this.sName = 'Chicago Style Deep Dish Cheese Pizza';
			this.sDough = 'Extra Thin Crust Dough';
			this.sSauce = 'Plum Tomato Sauce';
			this.aToppings = ["Shredded Mozzarella Cheese"];
		};
		ChicagoStyleVeggiePizza.prototype = new Pizza();
		ChicagoStyleVeggiePizza.prototype.cut = function(){
			console.log("Cutting the pizza into square slices.");
		};
		return ChicagoStyleVeggiePizza;
	}
);

