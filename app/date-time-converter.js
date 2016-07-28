'use strict';

var dateTimeConverter = (function() {
    var moment = require('moment');
	var naturalDateFormat = "MMMM DD, YYYY";
	
	return {
	    fromNaturalDateString: fromNaturalDateString,
	    toNaturalDateString: toNaturalDateString,
	    fromUnixDateString: fromUnixDateString,
	    toUnixDateString: toUnixDateString
	};
	
	function fromNaturalDateString(dateStr) {
		var date = moment(dateStr, naturalDateFormat, true);
		return date.isValid() ? date.format() : null;
	}
	
	function toNaturalDateString(date) {
		return moment(date).format(naturalDateFormat); 
	}
	
	function fromUnixDateString(dateStr) {
		if(Number(dateStr) != dateStr) {
			return null;
		}
		
		var date = moment.unix(dateStr);
		return date.isValid() ? date.format() : null;
	}
	
	function toUnixDateString(date) {
		return moment(date).format("X"); 
	}
})();

module.exports = dateTimeConverter;