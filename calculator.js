(function( app ){
	'use strict';
	var _app = app || {};
	var Calculator = function() {
	};

	Calculator.prototype = {
		constructor : Calculator,
		add : function( n1, n2 ) {
			var self = this, sum;
			if( !isNaN(n1) && !isNaN(n2) ) {
				sum = n1 + n2;
			}
			return sum;
		},
		subtract : function( n1, n2 ) {
			var self = this, result;
			if( !isNaN(n1) && !isNaN(n2) ) {
				result = n1 -n2;
			}
			return result;
		}
	};
	
	_app.Calculator = Calculator;
	
})( myApp || window.myApp );