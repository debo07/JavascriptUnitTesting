describe('calculator', function () {
	var calculator;
	beforeEach( function(){
		calculator = new myApp.Calculator();
	});

	afterEach( function() {
		//This is done intentionally to check the behaviour of beforeEach,
		// so if we would have initialized calculator outside beforeEach in the first describe block,
		// in afterEach it could get changed and all the later specs can get failed.
		calculator = {}; 
	});

	describe('sum', function () {
		it('1 + 1 should equal 2', function () {
			expect(calculator.add(1, 1)).toBe(2);
		});	
	});

	describe('subtract', function () {
		it('3 - 2 should equal 1', function () {
			expect(calculator.subtract(3, 2)).toBe(1);
		});
	});

});