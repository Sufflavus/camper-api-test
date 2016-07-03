'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
		return next();
	}

	var clickHandler = new ClickHandler();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	app.route('/favicon.ico')
		.get(function (req, res) {
			res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        	res.end();
		});
		
	app.route('/:timestamp')
		.get(function (req, res) {
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
		});

	/*app.route('/login')
		.get(function (req, res) {
			res.sendFile(path + '/public/login.html');
		});

	app.route('/logout')
		.get(function (req, res) {
			req.logout();
			res.redirect('/login');
		});

	app.route('/profile')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/profile.html');
		});

	app.route('/api/:id')
		.get(isLoggedIn, function (req, res) {
			res.json(req.user.github);
		});

	app.route('/auth/github')
		.get(passport.authenticate('github'));

	app.route('/auth/github/callback')
		.get(passport.authenticate('github', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));

	app.route('/api/:id/clicks')
		.get(isLoggedIn, clickHandler.getClicks)
		.post(isLoggedIn, clickHandler.addClick)
		.delete(isLoggedIn, clickHandler.resetClicks);*/
};
