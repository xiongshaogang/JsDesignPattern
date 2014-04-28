//js/app/WildTurkey.js
define(
	['jquery', 'Turkey'],
	function($, Turkey) {
		var WildTurkey = function(){
			Turkey.apply(this);
		};
		WildTurkey.prototype = new Turkey();
		WildTurkey.prototype.fly = function(){
			console.log("Fly short distance!");
		};
		WildTurkey.prototype.gobble = function(){
			console.log("Gobble! Gobble!");
		};
		return WildTurkey;
	}
);

