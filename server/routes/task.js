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
            // console.log('result in query: ', result);
            res.send(result.rows);
          }//end of 2nd else
        });//end of client.query
      }//end of 1st else
    });//end of pool.connect
    // res.sendFile(path.resolve(__dirname, '../public/views/register.html'));
});//end of .get

// Handles POST request with new task data
router.post('/', function(req, res, next) {
// console.log("inside task post:", req.body);
// var user = req.body.user;
  var task = {
    name: req.body.name,
    description: req.body.description,
    duration: req.body.duration,
    completed: req.body.completed
  };
// console.log("task in post: ", task);

  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    client.query("INSERT INTO tasks (name, description, completed) VALUES ($1, $2, $3) RETURNING id",
      [task.name, task.description, task.completed],
        function (err, result) {
          done();
          //client.end();
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

router.post('/:assignedTask', function(req, res, next) {
console.log("inside assignedT ask post:", req.body);
// var user = req.body.user;
  var assignedTask = {
    secondary_user_id: parseInt(req.body.secondary_user_id.id),
    date: req.body.date,
    task_name: req.body.task.name,
    completed: req.body.completed
  };
// console.log("task in post: ", task);

  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    client.query("INSERT INTO assigned_tasks (secondary_user_id, date, task_name, completed) VALUES ($1, $2, $3, $4) RETURNING id",
      [assignedTask.  secondary_user_id, assignedTask.date, assignedTask.task_name, assignedTask.completed],
        function (err, result) {
          done();
          //client.end();
          if(err) {
            console.log("Error inserting data on assigned_tasks table: ", err);
            next(err);
          } else {
            // res.send("hi");
            res.sendStatus(201);
          }
        });//end of client.query
  });//end of pg.connect
});//end of post

// Handles request for HTML file
router.get('/assignedTask/:user_id/:selectedDate', function(req, res, next) {
    pool.connect(function(errorConnectingToDB, client, done){
      console.log("We are retesting");
      console.log("Inside assigned get ", req.params);
      if(errorConnectingToDB){
        console.log(errorConnectingToDB);
        console.log("HERE IS YOUR Error Connecting to DB GET/:ASSIGNED");
        res.send(400);
      } else {
        var secondary_user_id = parseInt(req.params.user_id);
        var task_date = new Date(req.params.selectedDate);
        console.log(secondary_user_id);
        client.query('SELECT * FROM "assigned_tasks" WHERE "secondary_user_id" = $1 AND "date" = $2',
        [secondary_user_id, task_date], function(queryError, result){
          done();
          if(queryError){
            console.log('HERE IS YOUR Error making query to DB GET/:ASSIGNED', queryError);
            res.send(500);
          } else {
            console.log("HERE IS YOUR SUCCESS GET/:ASSIGNED" + result.rows);
            // console.log('result in query: ', result);
            res.send(result.rows);
          }//end of 2nd else
        });//end of client.query
      }//end of 1st else
    });//end of pool.connect
    // res.sendFile(path.resolve(__dirname, '../public/views/register.html'));
});//end of .get

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
  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    // UPDATE "tasks" SET "completed"='true' WHERE "id" = req.body.id
    client.query('UPDATE tasks SET "completed" = true WHERE "id"= $1',
      [req.body.id],
        function (err, result) {
          done();
          //client.end();
          if(err) {
            console.log("Error inserting data on user table: ", err);
            next(err);
          } else {
            // res.send("hi");
            res.sendStatus(200);
          }
        });//end of client.query
  });//end of pg.connect
});//end of put

router.put('/assignedTask/', function(req, res, next) {
console.log("inside assignedTask PUT:", req.body);
// var user = req.body.user;
  var updateTask = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    duration: req.body.duration,
    completed: req.body.completed
  };
  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    // UPDATE "tasks" SET "completed"='true' WHERE "id" = req.body.id
    client.query('UPDATE assigned_tasks SET "completed" = true WHERE "id"= $1',
      [req.body.id],
        function (err, result) {
          done();
          //client.end();
          if(err) {
            console.log("Error inserting data on user table: ", err);
            next(err);
          } else {
            // res.send("hi");
            res.sendStatus(200, "YAY");
          }
        });//end of client.query
  });//end of pg.connect
});//end of put

module.exports = router;
