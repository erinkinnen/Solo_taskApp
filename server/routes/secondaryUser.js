console.log("inside secondaryUser.js");
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
    res.sendFile(path.resolve(__dirname, '../public/views/newUser.html'));
});
console.log("HERE!");
// Handles POST request with new user data
router.post('/', function(req, res, next) {
console.log("inside secondary_user post:", req.body);
// var user = req.body.user;
  var saveSecondaryUser = {
    account_id: req.body.account_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age
  };

  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    client.query("INSERT INTO secondary_user (account_id, first_name, last_name, age) VALUES ($1, $2, $3, $4) RETURNING id",
      [saveSecondaryUser.account_id, saveSecondaryUser.first_name, saveSecondaryUser.last_name, saveSecondaryUser.age],
        function (err, result) {
          client.end();
          console.log("success in INSERT to secondary_user ", result);
          if(err) {
            console.log("Error inserting data on secondary_user table: ", err);
            next(err);
          } else {
            res.redirect('/');
          }
        });//end of client.query
  });//end of pg.connect

});


module.exports = router;
