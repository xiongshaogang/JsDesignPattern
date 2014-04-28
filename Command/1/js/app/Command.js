//jd/spp/Command.js
define(
	['jquery'],
	function($) {
		var Command = function(){

		};
		Command.prototype.execute = function(){
			throw new Error("This method must be overwritten!");
		};
		Command.prototype.undo = function(){
			throw new Error("This method must be overwritten!");
		};
		return Command;
	}
);