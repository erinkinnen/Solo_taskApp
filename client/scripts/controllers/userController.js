console.log("UserController.js loaded");
myApp.controller('UserController', ['$scope', '$http', '$location', 'AccountService', function($scope, $http, $location, AccountService) {
  // This happens after view/controller loads -- not ideal but it works for now.
  $scope.task = {
    name: '',
    description: '',
    duration: ''
  };

  $http.get('/user').then(function(response) {
      if(response.data.username) {
          // user has a curret session on the server
          $scope.userName = response.data.username;
          $scope.first_name = response.data.first_name;
          // console.log('User Data: ', $scope.first_name);
      } else {
          // user has no session, bounce them back to the login page
          $location.path("/home");
      }
  });//end of get /user

  AccountService.getTasks();
  $scope.taskObject = AccountService.taskObject;
  console.log("inside UserController: ", AccountService.taskObject);
  console.log('checking user');


  $scope.newTask = function(task){
    AccountService.createTask(task);
    $scope.task = {};
};
  $scope.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  };//end logout
}]);//end UserController
