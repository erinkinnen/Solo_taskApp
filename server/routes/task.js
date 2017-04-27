var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
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

// module with bcrypt functions
var encryptLib = require('../modules/encryption');
var connection = require('../modules/connection');


// Handles request for HTML file
router.get('/', function(req, res, next) {
    pool.connect(function(errorConnectingToDB, client, done){
      if(errorConnectingToDB){
        console.log("Error Connecting to DB for Task List");
        res.send(500);
      } else {
        client.query('SELECT * FROM "tasks";', function(queryError, result){
          console.log("success******");
          done();
          if(queryError){
            console.log('Error making query for tasks on DB ');
            res.send(500);
          } else {
            res.sendFile(path.resolve(__dirname, '../public/views/templates/register.html'));
          }//end of 2nd else
        });//end of client.query
      }//end of 1st else
    });//end of pool.connect
    // res.sendFile(path.resolve(__dirname, '../public/views/register.html'));
});//end of .get

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
  });//end of pg.connect

});



module.exports = router;
