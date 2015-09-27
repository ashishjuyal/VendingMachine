var vm = require('../app/VendingMachine.js');

describe("Vending Machine", function() {
	it("should be able to display a hello message on the screen", function() {
		expect(vm().messageOnScreen).toBe("Hello!! Quench your thirst");
	});
});