var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
var promise = require('bluebird');
mongoose.Promise = promise;

var dbURI = "mongodb://league:same@ds157677.mlab.com:57677/wildhackslol";
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },  
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } }};
mongoose.connect(dbURI, options);

app.set('port',(process.env.PORT || 8080));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/app',express.static(__dirname + "/app"));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
});

var gameController = require("./server/controller/game.controller");
var eventController = require("./server/controller/event.controller");
// Game Controller
app.get("/api/game", gameController.getGames);
app.get("/api/game/gameKey/:gameKey", gameController.getGameByKey);
app.get("/api/game/:id", gameController.getGameById);
app.post("/api/game", gameController.addGame);
app.put("/api/game", gameController.editGame);
// Event Controller
app.get("/api/event", eventController.getEvents);
app.post("/api/event", eventController.addEvent);

app.listen(app.get('port'), function(){
    console.log("Listening on port", app.get('port'));
});
