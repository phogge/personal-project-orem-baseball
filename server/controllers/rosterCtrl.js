var app = require("../../server");
var db = app.get("db");

module.exports = {
  // all GETS
  getAllPlayers: function(req, res){
    db.get_all_players(function(err, roster){
      if (err) {
        res.status(402).json(err);
      }else{
        res.status(200).json(roster);
      }
    });
  },

  getPlayersFrosh: function(req, res) {
    db.get_players_frosh(function(err, roster){
      if (err) {
        res.status(402).json(err);
      } else {
        res.status(200).json(roster);
      }
    });
  },

  getPlayersJV: function(req, res) {
    db.get_players_jv(function(err, roster){
      if (err) {
        res.status(402).json(err);
      } else {
        res.status(200).json(roster);
      }
    });
  },

  getPlayersVarsity: function(req, res) {
    db.get_players_varsity(function(err, roster){
      if (err) {
        res.status(402).json(err);
      } else {
        res.status(200).json(roster);
      }
    });
  },

  // all DELETES
  deletePlayerFrosh: function(req, res) {
    db.delete_player_frosh([req.body.team], function(err, roster){
      if (!err) {
        res.status(200).json(roster);
      } else {
        res.send(err);
      }
    });
  },

  deletePlayerJV: function(req, res) {
    db.delete_player_jv([req.body.team], function(err, roster){
      if (!err) {
        res.status(200).json(roster);
      } else {
        res.send(err);
      }
    });
  },

  deletePlayerVarsity: function(req, res) {
    db.delete_player_varsity([req.body.team], function(err, roster){
      if (!err) {
        res.status(200).json(roster);
      } else {
        res.send(err);
      }
    });
  },

  // all POSTS
  createPlayer: function(req, res){
    db.post_a_player([req.body.name, req.body.age, req.body.grade, req.body.team, req.body.player_number, req.body.height, req.body.weight, req.body.bats, req.body.throws, req.body.ba, req.body.pos1, req.body.pos2],function(err, roster){
      if (err) {
        res.status(402).json('something went wrong');
      }else{
        res.status(200).json('ok');
      }
    });
  },

  // all UPDATES
  updatePlayerItem: function(req, res) {
    db.update_player_item([req.body.name, req.body.age, req.body.grade, req.body.team, req.body.player_number, req.body.height, req.body.weight, req.body.bats, req.body.throws, req.body.ba, req.body.pos1, req.body.pos2], function(err, roster){
      if (!err) {
        res.status(200).json(roster);
      } else {
        res.send(err);
      }
    });
  },

};
