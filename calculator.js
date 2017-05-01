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
		addAll : function() {
			var self = this, result = 0, currElem,
			allCount = arguments.length;
			if( allCount ) {
				for (var i = 0; i < allCount; i++) {
					currElem = arguments[i];
					if( !isNaN( currElem )) {
						result = result + currElem;
					}
					else if( Array.isArray( currElem ) && currElem.length ) {
						result = result + currElem.reduce(function( prev, curr ) {
							return prev + curr;
						},0);
					}
				};
			}
			return result;
		},
		subtract : function( n1, n2 ) {
			var self = this, result;
			if( !isNaN(n1) && !isNaN(n2) ) {
				result = n1 -n2;
			}
			return result;
		},
		divide : function( n1, n2 ) {
			var self, result;

			if( !isNaN(n1) && !isNaN(n2) ) {
				result = n1/n2;
			}
			return result;
		},
		average : function() {
			var self = this, result, allSum = 0, allCount;
			allCount = arguments.length;
			if( allCount ) {
				allSum = self.addAll.call(this, Array.from(arguments));
				result = allSum/allCount;
			}
			return result;
		} 
	};
	
	_app.Calculator = Calculator;
	
})( myApp || window.myApp );