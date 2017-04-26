myApp.factory('RegisterService', ['$scope', '$http', '$location', function($scope, $http, $location){
console.log("inside factory");

  registerUser = function() {
    if($scope.user.username == '' || $scope.user.password == '') {
      $scope.message = "Choose a username and password!";
    } else {
      console.log('sending to USER to server...', $scope.user);
      $http.post('/register', $scope.user).then(function(response) {
        console.log('USER success');
        $location.path('/home');
      },
      function(response) {
        console.log('USER error');
        $scope.message = "Please try again."
      });
    }
}// end of function

return {
  registerUser: registerUser
}

}]);//end of factory
