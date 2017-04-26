var express = require('express');
var router = express.Router();
var passport = require('passport');
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
  var task = {
    name: req.body.name,
    description: req.body.description,
    duration: req.body.duration
  };
console.log("task in post: ", task);
  // var account =
  // console.log('NEW USER:', saveUser);
  // console.log('NEW ACCOUNT', account);
  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    client.query("INSERT INTO tasks (name, description, duration) VALUES ($1, $2, $3) RETURNING id",
      [task.name, task.description, task.duration],
        function (err, result) {
          client.end();

          if(err) {
            console.log("Error inserting data on user table: ", err);
            next(err);
          } else {
            // res.send("hi");
            res.redirect('/');
          }
        });//end of client.query
    // client.query("INSERT INTO account (name) VALUES ($1) RETURNING id",
    //   [account.name],
    //     function (err, result) {
    //       client.end();
    //
    //       if(err) {
    //         console.log("Error inserting data on account table: ", err);
    //         next(err);
    //       } else {
    //         res.redirect('/');
    //       }
    //     });//end of client.query
  });//end of pg.connect

});


module.exports = router;
