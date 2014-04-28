//app/stores/NYPizzaStore.js
define(
	['jquery', 'PizzaStore', 'NyStyleCheesePizza', 'NyStyleVeggiePizza', 'NyStyleClamPizza', 'NyStylePepperoniPizza'], 
	function($, PizzaStore, NyStyleCheesePizza, NyStyleVeggiePizza, NyStyleClamPizza, NyStylePepperoniPizza) {
		var NYPizzaStore = function(){
			PizzaStore.apply(this);
		};
		NYPizzaStore.prototype = new PizzaStore();
		NYPizzaStore.prototype.createPizza = function(sType){
			if(sType === 'cheese'){
				return new NyStyleCheesePizza();
			}else if(sType === 'veggie'){
				return new NyStyleVeggiePizza();
			}else if(sType === 'clam'){
				return new NyStyleClamPizza();
			}else if(sType === 'pepperoni'){
				return new NyStylePepperoniPizza();
			}
			return null;
		};
		return NYPizzaStore;
	}
);