'use strict';

function TimestampHandler () {
	var path = process.cwd();
	var dateTimeConverter = require(path + '/app/date-time-converter.js');

	this.getTime = function (req, res) {
		var timestamp = decodeURIComponent(req.params.timestamp);
		
		var date = dateTimeConverter.fromUnixDateString(timestamp) || 
			dateTimeConverter.fromNaturalDateString(timestamp);
		
		if(!date) {
			res.json(null);
			return;
		}
		
		res.json({ 
			"unix": dateTimeConverter.toUnixDateString(date), 
			"natural": dateTimeConverter.toNaturalDateString(date)
		});
	};
}

module.exports = TimestampHandler;