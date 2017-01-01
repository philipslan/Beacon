var mongoose = require("mongoose");
var User = require("../models/user");

module.exports.addUser = function (req, res) {
    var user = new User(req.body);
    user.
        save().
        then(function (user) {
            res.json(user);
        }).
        catch(function (err) {
            res.sendStatus(404);
        });
}

module.exports.findUser = function (req, res) {
    User.
        findOne(req.body).
        exec().
        then(function (user) {
            res.send(user);
        }).
        catch(function (err) {
            res.sendStatus(404);
        });
}

module.exports.getUsers = function (req, res) {
    User.
        find({}).
        exec().
        then(function (users) {
            console.log(users);
            res.json(users);
        });
}

module.exports.getFriends = function (req, res) {
    User.
        find(req.body).
        exec().
        then(function (users) {
            res.json(users[0].friends);
        });
}