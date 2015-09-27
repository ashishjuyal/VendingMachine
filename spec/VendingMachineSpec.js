var vendingMachine = require('../app/VendingMachine.js')();

describe("Vending Machine", function() {
	it("should be able to display a hello message on the screen", function() {
		expect(vendingMachine.messageOnScreen).toBe("Hello!! Quench your thirst");
	});
});

describe("As a thirsty bastard I want to buy a can of soda so that I can fix my thirst", function() {
	it("should return soda when money is inserted in the machine", function() {
		expect(vendingMachine.takeMoneyAndGiveSoda(1)).toBe(1);
	});
});