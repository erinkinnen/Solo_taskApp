var myApp = angular.module('myApp', ['ngRoute']);
/// Routes ///

myApp.config(['$routeProvider', function($routeProvider) {
  // $locationProvider.hashPrefix('');
  // $routeProvider
  //   .when('/home', {
  //     templateUrl: '/views/home.html',
  //     controller: "LoginController"
  //   })
  //   .when('/newaccount', {
  //     templateUrl: '/views/newaccount.html',
  //     controller: "NewAccountController"
  //   })
  //   .when('/chart', {
  //     templateUrl: 'views/templates/chart.html',
  //     controller: 'StaticChartController',
  //   })
  //   .when('/register', {
  //     templateUrl: '/views/register.html',
  //     controller: "LoginController"
  //   })
  //   .when('/user', {
  //     templateUrl: '/views/user.html',
  //     controller: "UserController"
  //   })
  //   .when('/task', {
  //     templateUrl: '/views/task.html',
  //     controller: "UserController"
  //   })
  //   .otherwise({
  //     redirectTo: 'home'
  //   })
}]);
