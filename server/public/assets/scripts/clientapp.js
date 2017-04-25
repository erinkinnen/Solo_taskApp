var myApp = angular.module('myApp', ['ngRoute']);
/// Routes ///

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "LoginController"
    })
    .when('/newaccount', {
      templateUrl: '/views/newaccount.html',
      controller: "NewAccountController"
    })
    .when('/chart', {
      templateUrl: 'views/templates/chart.html',
      controller: 'StaticChartController',
      controllerAs: 'staticchart'
    })
    .when('/register', {
      templateUrl: '/views/register.html',
      controller: "LoginController"
    })
    .when('/user', {
      templateUrl: '/views/user.html',
      controller: "UserController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
