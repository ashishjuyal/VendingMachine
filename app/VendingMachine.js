var vendingMachine = function() {
	return {
		messageOnScreen: "Hello!! Quench your thirst",
		takeMoneyAndGiveSoda: function(money){
			if(money !== undefined && money !== 0)
				return 1;
		}
	};
}

module.exports = vendingMachine;