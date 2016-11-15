// step #1 require dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// step #7 connect to database
var massive = require('massive');
var connectionString = 'postgres://paulhogge@localhost/baseballdb';
var massiveInstance = massive.connectSync({connectionString : connectionString});

// step #2 initialize express app and export
var app = module.exports = express();
app.set('db', massiveInstance);
var db = app.get('db');


// step #3 use body-parser json method to parse http body as json and assign result to req.body
// also use cors to replace the need to supply headers to the endpoint
app.use(bodyParser.json());
app.use(cors());
// added item
app.use(express.static('./public'));


// step #4 require controllers - may reduce controllers to tables for backend
var statsCtrl = require('./server/controllers/statsCtrl');
var playersCtrl = require('./server/controllers/rosterCtrl');
// var rosterCtrl = require('./js/controllers/rosterCtrl.js');
// var mainCtrl = require('./js/controllers/mainCtrl.js');
// var homeCtrl = require('./js/controllers/homeCtrl.js');

// step #5 build endpoints - get all players, get specific player, add a player, edit a player, delete a player
// GET ENDPOINTS
app.get('/roster', function(req, res, next) {
  db.get_all_players(function(err, roster) {
    console.log(roster);
    res.status(200).json(roster);
  });
});

app.get('/roster/:team', function(req, res, next) {
  db.get_player_by_team(req.params.team, function(err, roster) {
    res.status(200).send(roster);
  });
});

// POST ENDPOINTS
app.post('/roster', function(req, res, next) {

});
// PUT ENDPOINTS
app.put('/roster/:id', function(req, res, next) {

});
// DELETE ENDPOINTS
app.delete('/roster/:id', function(req, res, next) {

});

// step #6 tell express to listen to port
var port = 8000;
app.listen(port, function() {
  console.log('listening on port 8000');
});
