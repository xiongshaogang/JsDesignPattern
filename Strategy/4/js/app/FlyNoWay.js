//js/app/FlyNoWay.js
define(
	['jquery', 'FlyBehavior'],
	function($, FlyBehavior) {
		var FlyNoWay = function(){
			FlyBehavior.apply(this);
		};
		FlyNoWay.prototype = new FlyBehavior();
		FlyNoWay.prototype.fly = function(){
			//Don't do nothing.
		};
		
		return FlyNoWay;
	}
);