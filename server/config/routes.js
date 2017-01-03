var eventController = require("../controller/event.controller");

module.exports = function (app) {
	app.get("/api/whoami", function(req, res) {
		res.send(req.user);
	});
	app.get('/getFriends', function(req, res) {
		if (req.user) {
            res.write(getFrends(req));
            res.close();
        }
	});
	app.post('/createEvent', function(req, res) {
		eventController.addEvent(req, res);
	})
}