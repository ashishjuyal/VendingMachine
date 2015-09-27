var vendingMachine = function() {
	return {
		messageOnScreen: "Hello!! Quench your thirst",
		takeMoneyAndGiveSoda: function(money, sodaType){
			if(money !== undefined && money !== 0){
				if(sodaType === 'Coke'){
					return sodaCanCoke;
				}
			}
		}
	};
}
var sodaCanCoke = { sodaType: 'Coke', quantity: 1 };

module.exports = vendingMachine;