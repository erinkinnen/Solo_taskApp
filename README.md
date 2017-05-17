To Start:
npm install
Create database- database name is

Table data is in SQLfiles folder in parent directory.

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
