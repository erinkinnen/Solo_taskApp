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
    .when('/newUser', {
      templateUrl: '/views/templates/newUser.html',
      controller: "LoginController"
    })
    .when('/assignTask', {
      templateUrl: '/views/templates/assignTask.html',
      controller: "AssignTaskController"
    })
    .when('/newTask', {
      templateUrl: '/views/templates/newTask.html',
      controller: 'UserController'
    })
    .when('/secondary/:id', {
      templateUrl: '/views/templates/secondary.html',
      controller: 'SecondaryController'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
//
// myApp.filter('myDateFormat', function myDateFormat($filter){
//   console.log('found the filter');
//   return function(actual, expected){
//     // var tempActualDate= new Date(actual.date);
//     //   var tempExpectedDate= new Date(expected.date);
//     //   console.log('tempActualDate', $filter('date')(tempActualDate, "MMM-dd-yyyy"))
//     //   console.log('tempExpectedDate', $filter('date')(tempExpectedDate, "MMM-dd-yyyy"))
//     //   console.log($filter('date')(tempActualDate, "MMM-dd-yyyy") == $filter('date')(tempExpectedDate, "MMM-dd-yyyy"));
//     //   return $filter('date')(tempActualDate, "MMM-dd-yyyy") == $filter('date')(tempExpectedDate, "MMM-dd-yyyy");
//
//     console.log('about to return filter restuls');
//     return true;
//   };
// });
