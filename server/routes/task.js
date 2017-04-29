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
            console.log('result in query: ', result);
            res.send(result.rows);
          }//end of 2nd else
        });//end of client.query
      }//end of 1st else
    });//end of pool.connect
    // res.sendFile(path.resolve(__dirname, '../public/views/register.html'));
});//end of .get

// Handles POST request with new task data
router.post('/', function(req, res, next) {
console.log("inside task post:", req.body);
// var user = req.body.user;
  var task = {
    name: req.body.name,
    description: req.body.description,
    duration: req.body.duration,
    completed: req.body.completed
  };
console.log("task in post: ", task);

  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    client.query("INSERT INTO tasks (name, description, duration, completed) VALUES ($1, $2, $3, $4) RETURNING id",
      [task.name, task.description, task.duration, task.completed],
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
});//end of post

// Handles POST request with new task data
router.put('/', function(req, res, next) {
console.log("inside task PUT:", req.body);
// var user = req.body.user;
  var updateTask = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    duration: req.body.duration,
    completed: req.body.completed
  };

// console.log("task in PUT: ", task);

  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    // UPDATE "tasks" SET "completed"='true' WHERE "id" = req.body.id
    client.query('UPDATE tasks SET "completed" = true WHERE "id"= $1',
      [req.body.id],
        function (err, result) {
          client.end();
          if(err) {
            console.log("Error inserting data on user table: ", err);
            next(err);
          } else {
            // res.send("hi");
            res.sendStatus(200);
          }
        });//end of client.query
  });//end of pg.connect
});//end of post



module.exports = router;
