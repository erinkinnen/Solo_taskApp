console.log("clientapp.js loaded");
var myApp = angular.module('myApp', ['ngRoute']);
/// Routes ///

myApp.config(['$routeProvider', function($routeProvider) {
  // $locationProvider.hashPrefix('');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController'
    })
    // .when('/newaccount', {
    //   templateUrl: '/views/newaccount.html',
    //   controller: "NewAccountController"
    // })
    // .when('/chart', {
    //   templateUrl: 'views/templates/chart.html',
    //   controller: 'StaticChartController',
    // })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: "LoginController"
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: "UserController"
    })
    .when('/task', {
      templateUrl: '/views/task.html',
      controller: "UserController"
    })
    .when('/newTask', {
      templateUrl: '/views/newTask.html',
      controller: 'UserController'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
