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
var config = {
  user: 'erinkinnen', //env var: PGUSER
  database: 'SOLO_taskapp', //env var: PGDATABASE
  password: '', //env var: PGPASSWORD
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 1500, // 1.5s // how long a client is allowed to remain idle before being closed
};
var pool = new pg.Pool(config);

// Handles request for HTML file
// router.get('/', function(req, res, next) {
//     res.sendFile(path.resolve(__dirname, '../public/views/newUser.html'));
// });
console.log("HERE!");

router.get('/:secondaryUser', function(req, res, next) {
  console.log("inside secondaryUser ", req.params.secondaryUser);
    pool.connect(function(errorConnectingToDB, client, done){
      if(errorConnectingToDB){
        console.log("Error Connecting to DB for secondaryUser List");
        res.send(500);
      } else {
        client.query('SELECT "secondary_user"."first_name", "secondary_user"."last_name","secondary_user"."id"'  +
        'FROM "secondary_user" JOIN "users" ON "secondary_user"."account_id" = "users"."id" '+
        'AND "secondary_user"."account_id"= $1', [req.params.secondaryUser],
        function(queryError, result){
          console.log("GET SECONDARY success******", result);

          done();
          if(queryError){
            console.log('Error making query for tasks on DB ');
            res.send(500);
          } else {
            console.log('result in query: ', result);

            res.send(result.rows);
          }//end of 2nd else
        });//end of client.query
      }//end of 1st else
    });//end of pool.connect
});//end of .get

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
