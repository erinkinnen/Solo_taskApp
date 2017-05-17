
# Prime Solo Project : Task App, a Full-Stack Web Application

[Task App](https://solotaskapp.herokuapp.com/#/home/) is a mobile-first responsive web application that assists those visual thinkers who are less responsive to written lists to manage their time. It features a dynamic pie chart that visually represents tasks on a list, completed or not completed. Tasks are removed from the visual field as they are marked completed and the pie chart is dynamically updated.

This project was built in two weeks as a part of my coursework at Prime Digital Academy.

## To run the application on local host, follow these steps:

1. Download zip file of project.

2. In terminal:
  * Run 'npm install'
  * Run 'grunt'
  * Run 'npm start'

3. Set up local database. Table data provided in SQLfiles folder. Postico queries below.

4. Open up your browser and connect to localhost:5000.

## Technologies Used In this project:
- AngularJS
- Bootstrap
- Node.js
- Express.js
- PostgreSQL
- Passport.js
- Chart.js
- GruntJS

To create tables in Postico:

CREATE TABLE "assigned_tasks" (
"id" serial primary key,
"secondary_user_id" integer,
"date" date,
"task_name" varchar(25),
"complete" boolean
);

CREATE TABLE "secondary_user" (
"id" serial primary key,
"account_id" integer,
"first_name" varchar(25),
"last_name" varchar(25),
"age" integer,
"is_admin" boolean DEFAULT FALSE
);

CREATE TABLE "tasks" (
"id" serial primary key,
"name" varchar(40) not null,
"description" varchar(120),
"duration" integer,
"completed" boolean
);

CREATE TABLE "users" (
"id" serial primary key,
"username" varchar(40) not null,
"first_name" varchar(25),
"last_name" varchar(25),
"password" boolean varchar(120) not null,
"is_admin" boolean DEFAULT TRUE
);
