var userController = require("../controller/user.controller");

module.exports = function (app) {
	app.get("/api/whoami", function(req, res) {
		userController.findUser(req, res);
	});
	app.get('/getFriends', function(req, res) {
		if (req.user) {
            res.write(getFrends(req));
            res.close();
        }
	});
}