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
  });

  $scope.createTask = function() {
    if($scope.task.name == '' || $scope.task.description == '') {
      $scope.message = "Enter a task name and description";
    } else {
      // var completeAccount = {user: $scope.user, account: $scope.account};
      console.log('sending TASK to server...', $scope.task);
      $http.post('/task', $scope.task).then(function(response) {
        console.log(response);

        // $location.path('/meow');
      
      // function(response) {
      //   console.log('USER error');
      //   $scope.message = "Please try again."
      });
    }
  $scope.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  }
}
}]);
