//app/pizzas/ChicagoStyleCheesePizza
define(
	['jquery', 'Pizza'],
	function($, Pizza) {
		var ChicagoStyleCheesePizza = function(){
			Pizza.apply(this);
			this.sName = 'Chicago Style Deep Dish Cheese Pizza';
			this.sDough = 'Extra Thin Crust Dough';
			this.sSauce = 'Plum Tomato Sauce';
			this.aToppings = ["Shredded Mozzarella Cheese"];
		};
		ChicagoStyleCheesePizza.prototype = new Pizza();
		ChicagoStyleCheesePizza.prototype.cut = function(){
			console.log("Cutting the pizza into square slices.");
		};
		return ChicagoStyleCheesePizza;
	}
);