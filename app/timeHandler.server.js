'use strict';

function TimeHandler () {

	this.getTime = function (req, res) {
		var timestamp = req.params.timestamp;
			
		var date = new Date(timestamp*1000) || Date.parse(timestamp);
		
		console.log(new Date(timestamp*1000))
		
		if(!date) {
			res.json(null);
			return;
		}
		
		console.log(date)
		var unix = Math.round(date.getTime()/1000);
		var antural = date.toDateString();
		
		res.json({ 
			"unix": unix, 
			"natural": antural
		});
	};
	
}

module.exports = TimeHandler;