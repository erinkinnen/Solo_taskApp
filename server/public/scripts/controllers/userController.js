myApp.controller('UserController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  // This happens after view/controller loads -- not ideal but it works for now.
  $scope.task = {
    name: '',
    description: '',
    duration: ''
  };

  console.log('checking user');

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

  $scope.createTask = function(task){
    if($scope.task.name === '' || $scope.task.description === '') {
      $scope.message = "Enter a task name and description";
    } else {
      //created newTask and send copy in order to grab data bound object, send it
      //to database AND be able to clear data binding
      var newTask = angular.copy(task);
      console.log(newTask);
      //must post newTask copy to DB
      $http.post('/task', newTask).then(function(response) {
        console.log("response to post is: ", response);
      });}//end of post /task
      //clears data bound task
      $scope.task = {};
  };//end of createTask

  $scope.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  };//end logout
}]);//end UserController
