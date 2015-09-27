var vendingMachine = function() {
	return {
		messageOnScreen: "Hello!! Quench your thirst",
		takeMoneyAndGiveSoda: function(money){
			return 1;
		}
	};
}

module.exports = vendingMachine;