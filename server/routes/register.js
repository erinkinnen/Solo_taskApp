var express = require('express');
var router = express.Router();
var passport = require('passport');
// var Users = require('../models/user');
var path = require('path');

// module with bcrypt functions
var encryptLib = require('../modules/encryption');
var connection = require('../modules/connection');
var pg = require('pg');

// Handles request for HTML file
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {
console.log("inside post:", req.body);
// var user = req.body.user;
  var saveUser = {
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: encryptLib.encryptPassword(req.body.password)
  };

  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    client.query("INSERT INTO users (username, first_name, last_name, password) VALUES ($1, $2, $3, $4) RETURNING id",
      [saveUser.username, saveUser.first_name, saveUser.last_name, saveUser.password],
        function (err, result) {
          client.end();
          console.log("success in INSERT to users ", result);
          if(err) {
            console.log("Error inserting data on user table: ", err);
            next(err);
          } else {
            res.redirect('/');
          }
        });//end of client.query
  });//end of pg.connect

});


module.exports = router;
